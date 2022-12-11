package com.vir.model;

import java.io.Serializable;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.apache.http.util.TextUtils;

/**
 * Entity representation of a User.
 * 
 * @author Christian Hidalgo
 *
 */
//TODO:probably it would be a good idea to add a locked field, number of invalid attempts, invalid datetime; user level could easily be changed to an enumeration or perhaps in the code just add it as an enumeration
//https://www.mkyong.com/hibernate/how-to-call-store-procedure-in-hibernate/
//TODO:moving to nosql would save money: https://codeflex.co/java-spring-boot-with-dynamodb/
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html
//aws free tier: https://aws.amazon.com/free/
@Entity
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false, length=256)
	private String fullName;

	@Column(unique = true, nullable = false, length=256)
	private String userName;

	@Column(nullable = false, length=256)
	private String password;

	@Column(length=20)
	private String userLevel;

	@Column(unique=true, length=256)
	private String email;

	@Column(columnDefinition="DATETIME DEFAULT CURRENT_TIMESTAMP", nullable=false, insertable=false, updatable=false)
	private Date creationDate;
	public Date getCreationDate()
	{
		return this.creationDate;
	}
	@SuppressWarnings("unused")
	private void setCreationDate(Date creationDate)
	{
		this.creationDate = creationDate;
	}
	@Column(columnDefinition="BIT DEFAULT 0", nullable=false)
	private boolean locked;
	public boolean getLocked()
	{
		return this.locked;
	}
	public void setLocked(boolean locked)
	{
		this.locked = locked;
	}
	@Column(columnDefinition="SMALLINT DEFAULT 0", nullable=false)
	private short invalidLoginAttempts;
	public short getInvalidLoginAttempts()
	{
		return this.invalidLoginAttempts;
	}
	public void setInvalidLoginAttempts(short attempt)
	{
		this.invalidLoginAttempts = attempt;
	}
	//last login date/time table

	private static final Pattern EMAIL_REGEX = 
    Pattern.compile("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");

	public static boolean validEmail(String email)
	{
		if(TextUtils.isBlank(email)) return false;
		
		Matcher matcher = EMAIL_REGEX.matcher(email);
		boolean validEmail = matcher.find();

		return validEmail;
	}
	public boolean isValid(boolean validateEmptyPassword)
	{
		return
			!TextUtils.isBlank(this.userName)
			&& !TextUtils.isBlank(this.email)
			&& User.validEmail(this.email)
			&& !TextUtils.isBlank(this.fullName)
			&& (!validateEmptyPassword || !TextUtils.isBlank(this.password) && this.password.length() >= 6);

	}
	public boolean isUpdateValid(User old)
	{
		boolean valid;
		if(this.getUpdatePassword())
		{
			this.hasEmptyPasswords = TextUtils.isBlank(this.password) || TextUtils.isBlank(this.newPassword);
			this.passwordMismatch = !this.hasEmptyPasswords && (old == null || !this.password.equals(old.getPassword()));
			valid = !this.hasEmptyPasswords && !this.passwordMismatch;
		}//if
		else
		{
			final boolean VALIDATE_EMPTY_PASSWORD = false;
			valid = this.isValid(VALIDATE_EMPTY_PASSWORD);
		}//else
		return valid;
	}
	public boolean isPasswordEqual(String passwordToCompare)
	{
		return !TextUtils.isBlank(this.password) && !TextUtils.isBlank(passwordToCompare) && this.password.equals(passwordToCompare);
	}
	public boolean areEmailsEqual(User check)
	{
		if(check == null) return false;
		return this.email != null && this.email.equalsIgnoreCase(check.getEmail());
	}
	@Transient
	private boolean hasEmptyPasswords = false;
	@JsonIgnore
	public boolean getHasEmptyPasswords()
	{
		return this.hasEmptyPasswords;
	}
	@Transient
	private boolean passwordMismatch = false;
	@JsonIgnore
	public boolean getPasswordMismatch()
	{
		return this.passwordMismatch;
	}
	@Transient
	private String newPassword;
	// @Transient
	public void setNewPassword(String pw)
	{
		this.newPassword = pw;
	}
	@JsonInclude()
	public String getNewPassword()
	{
		return this.newPassword;
	}
	@Transient
	private boolean updatePassword;
	@JsonInclude()
	public boolean getUpdatePassword()
	{
		return this.updatePassword;
	}
	// @Transient
	public void setUpdatePassword(boolean updatePassword)
	{
		this.updatePassword = updatePassword;
	}
	public void update(User update)
	{
		if(!update.getUpdatePassword())
		{
			this.fullName = update.fullName;
			this.userName = update.userName;
			this.userLevel = update.userLevel;
			this.email = update.email;
		}//if
		else
		{
			this.password = update.newPassword;
		}//else
	}

	//---constructors-----

	public User() {
	}

	public User(String fullName, String userName, String password, String userLevel, String email) {
		super();
		this.userName = userName;
		this.fullName = fullName;
		this.password = password;
		this.userLevel = userLevel;
		this.email = email;
	}

	//-----getter methods----

	public String getEmail(){
		return this.email;
	}

	public String getUserName(){
		return this.userName;
	}

	public String getFullName(){
		return this.fullName;
	}

	public Long getId(){
		return this.id;
	}

	public String getPassword(){
		return this.password;
	}

	public String getUserLevel(){
		return this.userLevel;
	}

	//------setter methods-----
	public void setEmail(String email){
		this.email = email;
	}

	public void setFullName(String fullName){
		this.fullName = fullName;
	}

	public void setUserName(String userName){
		this.userName = userName;
	}

	public void setPassword(String password){
		this.password = password;	
	}

	public void setUserLevel(String userLevel){
		this.userLevel = userLevel;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this, ToStringStyle.JSON_STYLE);
	}

	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		User that = (User) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
}
