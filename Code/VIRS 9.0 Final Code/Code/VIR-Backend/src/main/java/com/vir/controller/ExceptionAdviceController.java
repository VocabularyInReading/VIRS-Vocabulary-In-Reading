package com.vir.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.vir.exception.ApiError;
import com.vir.exception.HeaderMalformattedError;
import com.vir.exception.PageLimitExceededException;
import com.vir.exception.UnableToGetEntryException;
import com.vir.exception.UnparseableContentException;

/**
 * All exceptions will be handled through this controller.
 * 
 * @author Alfredo Lopez
 *
 * @see <a href=
 *      "http://www.baeldung.com/global-error-handler-in-a-spring-rest-api"> I
 *      grabbed this puppy from here :P </a> All rights to the original Authors.
 *
 */
@ControllerAdvice
public class ExceptionAdviceController extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<String> errors = new ArrayList<String>();
		for (FieldError error : ex.getBindingResult().getFieldErrors()) {
			errors.add(error.getField() + ": " + error.getDefaultMessage());
		}
		for (ObjectError error : ex.getBindingResult().getGlobalErrors()) {
			errors.add(error.getObjectName() + ": " + error.getDefaultMessage());
		}

		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), errors);
		return handleExceptionInternal(ex, apiError, headers, apiError.getStatus(), request);
	}

	@Override
	protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		String error = ex.getParameterName() + " parameter is missing";

		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), error);
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}

	@ExceptionHandler({ ConstraintViolationException.class })
	public ResponseEntity<Object> handleConstraintViolation(ConstraintViolationException ex, WebRequest request) {
		List<String> errors = new ArrayList<String>();
		for (ConstraintViolation<?> violation : ex.getConstraintViolations()) {
			errors.add(violation.getRootBeanClass().getName() + " " + violation.getPropertyPath() + ": "
					+ violation.getMessage());
		}

		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), errors);
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}

	@ExceptionHandler({ MethodArgumentTypeMismatchException.class })
	public ResponseEntity<Object> handleMethodArgumentTypeMismatch(MethodArgumentTypeMismatchException ex,
			WebRequest request) {
		String error = ex.getName() + " should be of type " + ex.getRequiredType().getName();

		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), error);
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}

	@Override
	protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		String error = "No handler found for " + ex.getHttpMethod() + " " + ex.getRequestURL();

		ApiError apiError = new ApiError(HttpStatus.NOT_FOUND, ex.getLocalizedMessage(), error);
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}

	@Override
	protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		StringBuilder builder = new StringBuilder();
		builder.append(ex.getMethod());
		builder.append(" method is not supported for this request. Supported methods are ");
		ex.getSupportedHttpMethods().forEach(t -> builder.append(t + " "));

		ApiError apiError = new ApiError(HttpStatus.METHOD_NOT_ALLOWED, ex.getLocalizedMessage(), builder.toString());
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());

	}

	@Override
	protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		StringBuilder builder = new StringBuilder();
		builder.append(ex.getContentType());
		builder.append(" media type is not supported.");

		ApiError apiError = new ApiError(HttpStatus.UNSUPPORTED_MEDIA_TYPE, ex.getLocalizedMessage(),
				builder.toString());
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}

	@ExceptionHandler({ UnableToGetEntryException.class })
	public ResponseEntity<Object> handleAPIConnections(Exception ex, WebRequest request) {
		ApiError apiError = new ApiError(HttpStatus.SERVICE_UNAVAILABLE,
				"We are having some problems with the Dictionary", "error occurred");
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}

	@ExceptionHandler({ UnparseableContentException.class })
	public ResponseEntity<Object> handleUnparseableContent(Exception ex, WebRequest request) {
		ApiError apiError = new ApiError(HttpStatus.NO_CONTENT, "We were unable to parse the selected file",
				"error occurred");
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}

	@ExceptionHandler({ HeaderMalformattedError.class })
	public ResponseEntity<Object> handleHeaderMalformattedError(Exception ex, WebRequest request) {
		ApiError apiError = new ApiError(HttpStatus.NOT_ACCEPTABLE, "Headers for the file are not correct",
				"error occurred");
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}

	@ExceptionHandler({ PageLimitExceededException.class })
	public ResponseEntity<Object> handlePageLimitExceededException(Exception ex, WebRequest request) {
		ApiError apiError = new ApiError(HttpStatus.NOT_ACCEPTABLE, "Page limit exceeded.",
				"error occurred");
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}
	
	@ExceptionHandler({ Exception.class })
	public ResponseEntity<Object> handleAll(Exception ex, WebRequest request) {
		ApiError apiError = new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, ex.getLocalizedMessage(), "error occurred");
		return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	}
}
