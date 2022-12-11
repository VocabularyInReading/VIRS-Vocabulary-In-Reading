package com.vir.controller;

import com.vir.model.EmailMessage;
import com.vir.model.Recovery;
import com.vir.repository.RecoveryRepository;
import com.vir.service.EmailService;
import com.vir.service.SendEmailService;


import com.vir.repository.UserRepository;
import com.vir.model.User;
import com.vir.model.enumerations.EmailResult;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.util.TextUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.*;
import java.util.Properties;
import java.util.*;
import javax.activation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.Session;

import com.vir.exception.ApiError;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;

/**
This is the operations for the user API, this API uses a repository in order to access the database created
**/

@RestController
@RequestMapping("/api/user")
@Api(tags = "user")
public class UserController
{
	private final UserRepository _userRepository;

	private final EmailService emailService;

	private final RecoveryRepository recoveryRepository;

	public UserController
	(
		UserRepository userRepository
		, EmailService emailService
		, RecoveryRepository recoveryRepository
	)
	{
		this._userRepository = userRepository;
		this.emailService = emailService;
		this.recoveryRepository = recoveryRepository;
	}
	
	@ApiOperation(value = "Gets all users in DB")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public Page<User> findAll(
			@RequestParam(value="page", defaultValue="0") int page,
			@RequestParam(value="size", defaultValue="20") int size,
			@RequestParam(value="sortKey", defaultValue="userName") String sortField,
			@RequestParam(value="sortDirection", defaultValue="ASC") Direction direction
			){
		
		Sort sort = new Sort(direction, sortField);
		PageRequest pageRequest = new PageRequest(page, size, sort);
		return _userRepository.findAll(pageRequest);
	}

	@ApiOperation(value = "Get the current user.")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@GetMapping(value = "{userName}", produces = MediaType.APPLICATION_JSON_VALUE)
	public User getUser(@PathVariable(name="userName", required=true) String userName, HttpServletResponse response)
	{
		boolean emptyUserName = TextUtils.isBlank(userName);
		
		User u = emptyUserName ? null : _userRepository.findByUserName(userName);
		int code = emptyUserName
			? HttpServletResponse.SC_BAD_REQUEST
			: u == null
				? HttpServletResponse.SC_NOT_FOUND
				: HttpServletResponse.SC_OK;
		response.setStatus(code);

		return u;
	}

	@ApiOperation(value = "Add the current user."	)
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@RequestMapping(method = {RequestMethod.POST}, value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
	public User addUser
	(
		@RequestBody(required=true) User user
		, HttpServletResponse response
	)
	{
		boolean invalidUser = user == null || TextUtils.isBlank(user.getUserName());
		User exists = invalidUser ? null : _userRepository.findByUserName( user.getUserName() );

		User emailExists = invalidUser || exists != null || user.getEmail() == null ? null : _userRepository.findByEmail(user.getEmail());
		
		final boolean VALIDATE_EMPTY_PASSWORD = true;
		boolean valid = !invalidUser && exists == null && emailExists == null && user.isValid(VALIDATE_EMPTY_PASSWORD);
		
		User u = !valid ? null : _userRepository.save(user);

		int code = invalidUser || !valid
			? emailExists != null
				? HttpServletResponse.SC_FORBIDDEN
				: HttpServletResponse.SC_BAD_REQUEST
			: u == null
				? HttpServletResponse.SC_INTERNAL_SERVER_ERROR
				: HttpServletResponse.SC_CREATED;
		response.setStatus(code);

		return u;
	}

	@ApiOperation(value = "Update user passed in"	)
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@RequestMapping(method = {RequestMethod.PATCH}, value = "/{userName}", produces = MediaType.APPLICATION_JSON_VALUE)
	public User updateUser
	(
		@RequestBody(required=true) User updatedUser
		, @PathVariable(name = "userName", required=true) String userName
		, HttpServletResponse response
	)
	{
		boolean emptyUserName = StringUtils.isBlank(userName);
		User currentUser = emptyUserName || updatedUser == null  ? null :  _userRepository.findByUserName( userName );

		User emailUser =
			currentUser == null || updatedUser.getEmail() == null || currentUser.areEmailsEqual(updatedUser)
			? null
			: _userRepository.findByEmail(updatedUser.getEmail());
		boolean valid = currentUser != null && emailUser == null && updatedUser.isUpdateValid(currentUser);
		if (!valid)
		{
			int code = emptyUserName
				? HttpServletResponse.SC_BAD_REQUEST
				: currentUser == null
					? HttpServletResponse.SC_NOT_FOUND
					: emailUser != null
						? HttpServletResponse.SC_FORBIDDEN
						: updatedUser.getPasswordMismatch()
							? HttpServletResponse.SC_UNAUTHORIZED
							: HttpServletResponse.SC_BAD_REQUEST;
			response.setStatus(code);
			//if it doesn't exist, then we cannot update
			return null;
		}//if

		if(!updatedUser.getUpdatePassword() && !userName.equals(updatedUser.getUserName()))
		{
			User existingUserName = _userRepository.findByUserName( updatedUser.getUserName() );
			if(existingUserName != null)
			{
				//the user is forbidden to use a user name that already exists
				response.setStatus(HttpServletResponse.SC_FORBIDDEN);
				return null;
			}//if
		}//if

		currentUser.update(updatedUser);
		User u = _userRepository.save(currentUser);

		int code = u == null
			? HttpServletResponse.SC_INTERNAL_SERVER_ERROR
			: HttpServletResponse.SC_OK;

		response.setStatus(code);

		return u;
	}

	@ApiOperation(value = "Removes desired user")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@DeleteMapping(value = "{userName}/{password}" , produces = MediaType.APPLICATION_JSON_VALUE)
	public void removeUser
	(
		@PathVariable(required=true) String userName
		, @PathVariable(required=true) String password
		// , @RequestBody(required=true) User deleteUser
		, HttpServletResponse response
	)
	{
		boolean invalidRequest = TextUtils.isBlank(userName) || TextUtils.isBlank(password);

		User exists = invalidRequest
			? null
			: _userRepository.findByUserName( userName );

		boolean match = exists != null && exists.isPasswordEqual(password);
		
		long deletedRecords = match ? _userRepository.removeByUserName( userName ) : -1;

		int code = invalidRequest
			? HttpServletResponse.SC_BAD_REQUEST
			: exists == null
				? HttpServletResponse.SC_NOT_FOUND
				: deletedRecords == 1
					? HttpServletResponse.SC_NO_CONTENT
					: !match
						? HttpServletResponse.SC_UNAUTHORIZED
						: HttpServletResponse.SC_INTERNAL_SERVER_ERROR;
		response.setStatus(code);
	}

	// **************************************  THIS IS ALL NEW  **************************************

	 @ApiOperation(value = "Send the token by email to the user.")
	 @ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	 @GetMapping(value = "/recovery/{userName}", produces = MediaType.APPLICATION_JSON_VALUE)
	 public void recoverPassword
	 (
		 @PathVariable(name="userName", required=true) String userName
		 , HttpServletResponse response
		 , HttpServletRequest request
	)
	 {
		User user =  TextUtils.isBlank(userName) ? null : _userRepository.findByUserName(userName);
		if (user != null)
		{
			String guid = java.util.UUID.randomUUID().toString();
			//let's try to save the recovery token first, because if this fails, the email is useless
			Recovery recovery = new Recovery(user.getId(),user.getEmail(),guid);
			//if this throws an exception then the response will be an HTTP 500 automatically
			Recovery saved = recoveryRepository.save(recovery);
			 
			EmailResult sr = saved == null ? EmailResult.ERROR : this.sendResetEmail(user.getEmail(), user.getUserName(), guid, request);

			int statusCode = sr == EmailResult.SUCCESS ? HttpServletResponse.SC_OK : HttpServletResponse.SC_INTERNAL_SERVER_ERROR;
			response.setStatus(statusCode);
	 	}//if
		else
		{
			 response.setStatus(HttpServletResponse.SC_NOT_FOUND);
		}//else
	 }

	 @ApiOperation(value = "Update password by token")
	 @ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	 @GetMapping(value = "/recovery_password/{token}", produces = MediaType.APPLICATION_JSON_VALUE)
	 public void updateByEmail(@PathVariable(name="token", required=true) String token, HttpServletResponse response)
	 {
		Recovery recovery = TextUtils.isBlank(token) ? null : recoveryRepository.findByToken(token);

		User user = recovery == null || TextUtils.isBlank(token) ? null : _userRepository.findOne(recovery.getUserId());
		int statusCode = user == null ? HttpServletResponse.SC_NOT_FOUND : HttpServletResponse.SC_OK;
		response.setStatus(statusCode);
	 }

	 //******************************************************************************************************

	 @ApiOperation(value = "Send the token by email to the user found by email.")
	 @ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	 @GetMapping(value = "/recovery_email/{email}", produces = MediaType.APPLICATION_JSON_VALUE)
	 public void recoverPasswordByEmail
	 (
		 @PathVariable(name="email", required=true) String email
		 , HttpServletResponse response
		 , HttpServletRequest request
	)
	 {
		System.out.println("Email from html " + email);
		User user =  TextUtils.isBlank(email) ? null : _userRepository.findByEmail(email);
		if (user != null)
		{
			System.out.println("user.getEmail "+ user.getEmail());
			String guid = java.util.UUID.randomUUID().toString();
			System.out.println("token "+ guid);

			//this code is repetitive, it can be merged into 1 method
			Recovery recovery = new Recovery(user.getId(),user.getEmail(),guid) ;
			Recovery saved = recoveryRepository.save(recovery);

			
			EmailResult sr = saved == null ? EmailResult.ERROR : this.sendResetEmail(user.getEmail(), user.getUserName(), guid, request);

			int statusCode = sr == EmailResult.SUCCESS ? HttpServletResponse.SC_OK : HttpServletResponse.SC_INTERNAL_SERVER_ERROR;
			response.setStatus(statusCode);
	 	}//if
		else
		{
			System.out.println("in the else ... Waiting for 404 ");
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
		}//else
	 }

	 //******************************************************************************************************
	 
	@ApiOperation(value = "Update password by token")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@PostMapping(value = "/recovery_password", produces = MediaType.APPLICATION_JSON_VALUE)
	public void updatePassword( @RequestParam(value="token",required = true) String token, @RequestParam(name="password", required=true) String password, HttpServletResponse response)
	{
		System.out.println("USER SEARCHING: " + token);
		Recovery recovery = TextUtils.isBlank(token) ? null : recoveryRepository.findByToken(token) ;
		System.out.println(recovery);
		if(recovery != null)
		{
			User user =  TextUtils.isBlank(token) ? null : _userRepository.findOne(recovery.getUserId()) ;
			System.out.println("USER FOUNDED " + user.toString());
			user.setPassword(password);
			_userRepository.save(user) ;

			try
			{
				recoveryRepository.delete(recovery);
			}//try
			catch(Throwable t)
			{
				//send an email, we don't care if the record wasn't deleted. we should clean up after "x" time has elapsed
				this.emailService.sendExceptionEmail(t);
			}//catch
			response.setStatus(HttpServletResponse.SC_OK);
		}//if
		else
		{
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
		}//else
	}
	private EmailResult sendResetEmail(String email, String username, String token, HttpServletRequest request)
    {
		int port = request.getServerPort();
		String scheme = request.getScheme();
		String host = request.getServerName() + (port == 80 || port == 443 ? "" : ":" + port);
		String url = String.format("%s://%s/restore?token=%s", scheme, host , token);
		String urlLink = String.format("<a href='%s'>click here</a>", url);
		
		String sub = "myvirs.com - Change Password";
		String to = email;
		String from = "do-not-reply@myvirs.com";
		final boolean HTML = true;
		String body = String.format("Hi " + username + ". Please %s to reset your account password at <a href='%s://%s'>%s</a>. You can also copy and paste the address below to your browser:<br/>%s", urlLink, scheme, host, host, url);
		
		EmailMessage emailMessage = new EmailMessage(from, to, sub, body, HTML);
		EmailResult er = this.emailService.sendEmail(emailMessage);

		return er;
    }	
}