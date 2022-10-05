package com.vir.model;

import org.junit.Ignore;
import org.junit.Test;
import com.vir.GeneralDevTest;
import com.vir.model.User;
import static org.junit.Assert.assertEquals;

@GeneralDevTest
public class UserTest
{

    @Ignore
    @Test
    public void validEmailTest()
    {
        String email = "test@test.com";
        boolean actual = User.validEmail(email);
        boolean expected = true;
        assertEquals(expected, actual);

        email = "not@valid";
        expected = false;
        actual = User.validEmail(email);
        assertEquals(expected, actual);

        email = "not.valid";
        expected = false;
        actual = User.validEmail(email);
        assertEquals(expected, actual);

        email = "test.me@test.com";
        expected = true;
        actual = User.validEmail(email);
        assertEquals(expected, actual);

        email = "test+23@test.com";
        expected = true;
        actual = User.validEmail(email);
        assertEquals(expected, actual);

        email = "test.something+23@test.com";
        expected = true;
        actual = User.validEmail(email);
        assertEquals(expected, actual);

        email = "";
        expected = false;
        actual = User.validEmail(email);
        assertEquals(expected, actual);

        email = " ";
        expected = false;
        actual = User.validEmail(email);
        assertEquals(expected, actual);

        email = null;
        expected = false;
        actual = User.validEmail(email);
        assertEquals(expected, actual);
    }
    private void isValidTest(String invalidValue)
    {
        User u = new User();
        //each test has the values explicitly set
        //for clarity
        //can we change this unit test to also pass in the validateEmptyPassword to make testing each permutation possible?
        u.setUserName(invalidValue);
        u.setEmail(invalidValue);
        u.setPassword(invalidValue);
        boolean validateEmptyPassword = true;
        boolean actual = u.isValid(validateEmptyPassword);
        boolean expected = false;
        assertEquals(expected, actual);

        u.setUserName(invalidValue);
        u.setEmail(invalidValue);
        u.setPassword(invalidValue);
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setEmail(invalidValue);
        u.setPassword(invalidValue);
        validateEmptyPassword = true;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setEmail(invalidValue);
        u.setPassword(invalidValue);
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName(invalidValue);
        u.setEmail("test@email.com");
        u.setPassword(invalidValue);
        validateEmptyPassword = true;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName(invalidValue);
        u.setEmail("test@email.com");
        u.setPassword(invalidValue);
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName(invalidValue);
        u.setEmail("@email.com");
        u.setPassword(invalidValue);
        validateEmptyPassword = true;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName(invalidValue);
        u.setEmail("@email.com");
        u.setPassword(invalidValue);
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName(invalidValue);
        u.setEmail(invalidValue);
        u.setPassword("password");
        validateEmptyPassword = true;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName(invalidValue);
        u.setEmail(invalidValue);
        u.setPassword("password");
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setEmail("email@email.com");
        u.setPassword("password");
        u.setFullName("Full Name");
        validateEmptyPassword = true;
        actual = u.isValid(validateEmptyPassword);
        expected = true;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setEmail("email@email.com");
        u.setPassword("password");
        u.setFullName("Full Name");
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = true;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setEmail("email@email.com");
        u.setPassword("password");
        u.setPassword(invalidValue);
        validateEmptyPassword = true;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setEmail("email@email.com");
        u.setPassword("password");
        u.setFullName("Full Name");
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = true;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setPassword("password");
        u.setEmail("email");
        validateEmptyPassword = true;        
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setPassword("password");
        u.setEmail("email");
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = false;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setPassword("password");
        u.setEmail("email@email.com");
        u.setFullName("Full Name");
        validateEmptyPassword = true;
        actual = u.isValid(validateEmptyPassword);
        expected = true;
        assertEquals(expected, actual);

        u.setUserName("userName");
        u.setPassword("password");
        u.setEmail("email@email.com");
        u.setFullName("Full Name");
        validateEmptyPassword = false;
        actual = u.isValid(validateEmptyPassword);
        expected = true;
        assertEquals(expected, actual);
    }

    @Ignore
    @Test
    public void isValidTest()
    {
        this.isValidTest(null);
        this.isValidTest("");
        this.isValidTest(" ");
        this.isValidTest("        ");
    }

    @Ignore
    @Test
    public void isUpdateValidTest()
    {
        User u = new User();
        u.setUpdatePassword(true);
        boolean actual = u.isUpdateValid(null);
        boolean expected = false;
        assertEquals(expected, actual);

        actual = u.getHasEmptyPasswords();
        expected = true;
        assertEquals(expected, actual);

        actual = u.getPasswordMismatch();
        expected = false;
        assertEquals(expected, actual);

        actual = u.isUpdateValid(new User());
        actual = false;
        assertEquals(expected, actual);

        actual = u.getHasEmptyPasswords();
        expected = true;
        assertEquals(expected, actual);

        actual = u.getPasswordMismatch();
        expected = false;
        assertEquals(expected, actual);

        u.setPassword("password");
        u.setNewPassword("new pw");
        expected = false;
        actual = u.isUpdateValid(null);
        assertEquals(expected, actual);

        actual = u.getHasEmptyPasswords();
        expected = false;
        assertEquals(expected, actual);

        actual = u.getPasswordMismatch();
        expected = true;
        assertEquals(expected, actual);

        expected = false;
        actual = u.isUpdateValid(new User());
        assertEquals(expected, actual);

        actual = u.getHasEmptyPasswords();
        expected = false;
        assertEquals(expected, actual);

        actual = u.getPasswordMismatch();
        expected = true;
        assertEquals(expected, actual);

        User old = new User();
        old.setPassword(u.getPassword());
        actual = u.isUpdateValid(old);
        expected = true;
        assertEquals(expected, actual);

        expected = false;
        actual = u.getHasEmptyPasswords();
        assertEquals(expected, actual);

        expected = false;
        actual = u.getPasswordMismatch();
        assertEquals(expected, actual);

        u.setNewPassword(null);
        expected = false;
        actual = u.isUpdateValid(old);
        assertEquals(expected, actual);

        expected = true;
        actual = u.getHasEmptyPasswords();
        assertEquals(expected, actual);

        expected = false;
        actual = u.getPasswordMismatch();
        assertEquals(expected, actual);

        expected = false;
        actual = u.isUpdateValid(null);
        assertEquals(expected, actual);
    }
    /**
     * Tests User.updateTest(), but with User.updatePassword set to true
     */

    @Ignore
    @Test
    public void updatePasswordTest()
    {
        User u = new User();

        String expected = null;
        String actual = u.getPassword();
        assertEquals(expected, actual);

        String old = "changed";
        u.setPassword(old);
        expected = old;
        actual = u.getPassword();
        assertEquals(expected, actual);

        User updated = new User();
        updated.setNewPassword("new");
        expected = updated.getNewPassword();
        updated.setUpdatePassword(true);
        u.update(updated);
        actual = u.getPassword();
        assertEquals(expected, actual);

        old = "changed";
        u.setPassword(old);
        expected = old;
        actual = u.getPassword();
        assertEquals(expected, actual);

        updated.setNewPassword("another new pw");
        updated.setUpdatePassword(true);
        expected = updated.getNewPassword();
        u.update(updated);
        actual = u.getPassword();
        assertEquals(expected, actual);
    }
    // private String getActual()
    /**
     * Tests User.updateTest(), but with User.updatePassword set to false
     */

    @Ignore
    @Test
    public void updateAccountTest()
    {
        User u = new User();

        String expected = null;
        String actual = u.getFullName();

        assertEquals(expected, actual);

        actual = u.getUserName();
        assertEquals(expected, actual);

        actual = u.getUserLevel();
        assertEquals(expected, actual);

        actual = u.getEmail();
        assertEquals(expected, actual);

        u.setUpdatePassword(false);
        User updated = new User("full name", "user name", "password", "user level", "email");

        u.update(updated);
        expected = updated.getFullName();
        actual = u.getFullName();
        assertEquals(expected, actual);

        expected = updated.getUserName();
        actual = u.getUserName();
        assertEquals(expected, actual);

        expected = updated.getUserLevel();
        actual = u.getUserLevel();
        assertEquals(expected, actual);

        expected = updated.getEmail();
        actual = u.getEmail();
        assertEquals(expected, actual);
    }

    @Ignore
    @Test
    public void areEmailsEqualTest()
    {
        User u = new User();
        User u2 = null;

        String email = "test@email.com";
        u.setEmail(email);
        boolean expected = false;
        boolean actual = u.areEmailsEqual(u2);
        assertEquals(expected, actual);

        u2 = new User();
        u2.setEmail(email);
        expected = true;
        actual = u.areEmailsEqual(u2);
        assertEquals(expected, actual);

        u2.setEmail("another@email.com");
        expected = false;
        actual = u.areEmailsEqual(u2);
        assertEquals(expected, actual);
    }

    @Ignore
    @Test
    public void isPasswordEqualTest()
    {
        User u = new User();
        u.setPassword("actualPassword");

        boolean expected = false;
        boolean actual = u.isPasswordEqual("wrongPassword");

        assertEquals(expected, actual);

        expected = true;
        actual = u.isPasswordEqual(u.getPassword());

        u.setPassword("");
        expected = false;
        actual = u.isPasswordEqual("");
        assertEquals(expected, actual);

        expected = false;
        actual = u.isPasswordEqual(null);
        assertEquals(expected, actual);

        u.setPassword(null);
        expected = false;
        actual = u.isPasswordEqual("");
        assertEquals(expected, actual);

        expected = false;
        actual = u.isPasswordEqual(null);
        assertEquals(expected, actual);
    }
}