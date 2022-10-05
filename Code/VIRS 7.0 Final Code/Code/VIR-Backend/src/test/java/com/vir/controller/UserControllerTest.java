//package com.vir.controller;
//
//import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertFalse;
//import static org.junit.Assert.assertNotEquals;
//import static org.junit.Assert.assertNotNull;
//import static org.junit.Assert.assertNull;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.servlet.http.HttpServletResponse;
//
//import com.vir.GeneralDevTest;
//import com.vir.model.EmailMessage;
//import com.vir.model.Recovery;
//import com.vir.model.User;
//import com.vir.model.enumerations.EmailResult;
//import com.vir.repository.RecoveryRepository;
//import com.vir.service.EmailService;
//
//import org.junit.Ignore;
//import org.junit.Test;
//import org.springframework.data.domain.Example;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//
//import com.vir.mock.MockHttpServletResponse;
//import com.vir.mock.MockUserRepository;
//
//@GeneralDevTest
//public class UserControllerTest
//{
//    private final MockUserRepository userRepository;
//    private final UserController userController;
//    private final MockHttpServletResponse response;
//    private final List<User> dataStore;
//
//    public UserControllerTest()
//    {
//        this.dataStore = new ArrayList<User>();
//        for(int i = 0; i < 5; ++i)
//        {
//            Long userID = i + 1L;
//            String fullName = "Test User " + i;
//            String userName = "pqsk" + i;
//            String password = "test123";
//            String userLevel = null;
//            String email = "test" + i + "@email.com";
//            User u = new User(fullName, userName, password, userLevel, email);
//            u.setId(userID);
//            dataStore.add(u);
//        }//for i
//
//        this.userRepository = new MockUserRepository(dataStore);
//        this.userController = new UserController(this.userRepository, new EmailService(){
//
//            @Override
//            public EmailResult sendExceptionEmail(Throwable t) {
//                return EmailResult.SUCCESS;
//            }
//
//            @Override
//            public EmailResult sendEmail(EmailMessage emailMessage) {
//                return EmailResult.SUCCESS;
//            }
//        }, new RecoveryRepository(){
//
//            @Override
//            public <S extends Recovery> S findOne(Example<S> example) {
//                return null;
//            }
//
//            @Override
//            public <S extends Recovery> Page<S> findAll(Example<S> example, Pageable pageable) {
//                return null;
//            }
//
//            @Override
//            public <S extends Recovery> boolean exists(Example<S> example) {
//                return false;
//            }
//
//            @Override
//            public <S extends Recovery> long count(Example<S> example) {
//                return 0;
//            }
//
//            @Override
//            public <S extends Recovery> S save(S entity) {
//                return null;
//            }
//
//            @Override
//            public Recovery findOne(Long id) {
//                return null;
//            }
//
//            @Override
//            public boolean exists(Long id) {
//                return false;
//            }
//
//            @Override
//            public void deleteAll() {
//
//            }
//
//            @Override
//            public void delete(Iterable<? extends Recovery> entities) {
//
//            }
//
//            @Override
//            public void delete(Recovery entity) {
//
//            }
//
//            @Override
//            public void delete(Long id) {
//
//            }
//
//            @Override
//            public long count() {
//                return 0;
//            }
//
//            @Override
//            public Page<Recovery> findAll(Pageable pageable) {
//                return null;
//            }
//
//            @Override
//            public <S extends Recovery> S saveAndFlush(S entity) {
//                return null;
//            }
//
//            @Override
//            public <S extends Recovery> List<S> save(Iterable<S> entities) {
//                return null;
//            }
//
//            @Override
//            public Recovery getOne(Long id) {
//                return null;
//            }
//
//            @Override
//            public void flush() {
//
//            }
//
//            @Override
//            public <S extends Recovery> List<S> findAll(Example<S> example, Sort sort) {
//                return null;
//            }
//
//            @Override
//            public <S extends Recovery> List<S> findAll(Example<S> example) {
//                return null;
//            }
//
//            @Override
//            public List<Recovery> findAll(Iterable<Long> ids) {
//                return null;
//            }
//
//            @Override
//            public List<Recovery> findAll(Sort sort) {
//                return null;
//            }
//
//            @Override
//            public List<Recovery> findAll() {
//                return null;
//            }
//
//            @Override
//            public void deleteInBatch(Iterable<Recovery> entities) {
//
//            }
//
//            @Override
//            public void deleteAllInBatch() {
//
//            }
//
//            @Override
//            public Recovery findByToken(String token) {
//                return null;
//            }
//        });
//        this.response = new MockHttpServletResponse();
//    }
//    private void getUserNullOrEmptyTest(String userName)
//    {
//        User u = this.userController.getUser(userName, this.response);
//
//        assertNull(u);
//
//        int expected = HttpServletResponse.SC_BAD_REQUEST;
//        int actual = this.response.getStatus();
//        assertEquals(expected, actual);
//    }
//
//    @Ignore
//    @Test
//    public void getUserTest()
//    {
//        String userName = this.dataStore.get(0).getUserName();
//
//        User u = this.userController.getUser(userName, this.response);
//        assertNotNull(u);
//
//        int expectedStatus = HttpServletResponse.SC_OK;
//        int actualStatus = this.response.getStatus();
//        assertEquals(expectedStatus, actualStatus);
//
//        userName = null;
//        this.getUserNullOrEmptyTest(userName);
//
//        userName = "";
//        this.getUserNullOrEmptyTest(userName);
//
//        userName = "doesNotExist";
//        u = this.userController.getUser(userName, this.response);
//
//        assertNull(u);
//
//        expectedStatus = HttpServletResponse.SC_NOT_FOUND;
//        actualStatus = this.response.getStatus();
//        assertEquals(expectedStatus, actualStatus);
//    }
//
//    @Ignore
//    @Test
//    public void addUserTest()
//    {
//        User user = null;
//        User userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        int expected = HttpServletResponse.SC_BAD_REQUEST;
//        int actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        user = this.dataStore.get(1);
//
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        User tmp = new User();
//
//        tmp.setUserName("newUserName");
//        tmp.setEmail(user.getEmail());
//        tmp.setPassword(user.getPassword());
//        tmp.setFullName("New User");
//        user = tmp;
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_FORBIDDEN;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        user.setEmail("new.email@test.com");
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNotNull(userResult);
//
//        expected = HttpServletResponse.SC_CREATED;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        User exists = this.userRepository.findByUserName(user.getUserName());
//
//        assertNotNull(exists);
//
//        String tmpUserName = user.getUserName();
//        user.setUserName(null);
//
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        user.setUserName(tmpUserName);
//        String tmpEmail = user.getEmail();
//        user.setEmail(null);
//
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        user.setEmail(tmpEmail);
//
//        String tmpPw = user.getPassword();
//        user.setPassword(null);
//
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        user.setUserName(null);
//        user.setEmail(null);
//        user.setPassword(null);
//
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        user.setUserName(tmpUserName);
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        user.setUserName(null);
//        user.setEmail(tmpEmail);
//
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        user.setEmail(null);
//        user.setPassword(tmpPw);
//        userResult = this.userController.addUser(user, this.response);
//
//        assertNull(userResult);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//    }
//    private void updateUserTestNullOrEmptyTest(String userName, User u)
//    {
//        User result = this.userController.updateUser(u, userName, this.response);
//        assertNull(result);
//
//        int expected = HttpServletResponse.SC_BAD_REQUEST;
//        int actual = this.response.getStatus();
//        assertEquals(expected, actual);
//    }
//
//    @Ignore
//    @Test
//    public void updateUserTest()
//    {
//        String userName = null;
//        User u = null;
//
//        this.updateUserTestNullOrEmptyTest(userName, u);
//
//        userName = "";
//        this.updateUserTestNullOrEmptyTest(userName, u);
//
//        userName = " ";
//        this.updateUserTestNullOrEmptyTest(userName, u);
//
//        userName = "userNameDoesNotExist";
//
//        User result = this.userController.updateUser(u, userName, this.response);
//        assertNull(result);
//
//        int expected = HttpServletResponse.SC_NOT_FOUND;
//        int actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        User tmp = this.dataStore.get(2);
//        userName = tmp.getUserName();
//
//
//        u = new User(tmp.getFullName(), tmp.getUserName(), tmp.getPassword(), null, tmp.getEmail());
//
//        String tmpEmail = u.getEmail();
//        u.setEmail(this.dataStore.get(0).getEmail());
//
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNull(result);
//
//        expected = HttpServletResponse.SC_FORBIDDEN;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        String tmpPw = u.getPassword();
//        u.setPassword("wrongPassword");
//        u.setNewPassword("newPassword");
//        u.setEmail(tmpEmail);
//        u.setUpdatePassword(true);
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNull(result);
//
//        expected = HttpServletResponse.SC_UNAUTHORIZED;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        u.setUpdatePassword(false);
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNotNull(result);
//
//        User updated = this.userRepository.findByUserName(userName);
//        assertNotNull(updated);
//        assertEquals(tmpPw, updated.getPassword());
//        assertEquals(u.getFullName(), updated.getFullName());
//        assertEquals(u.getUserName(), updated.getUserName());
//        assertEquals(u.getEmail(), updated.getEmail());
//        assertEquals(u.getUserLevel(), updated.getUserLevel());
//
//        expected = HttpServletResponse.SC_OK;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        u.setPassword(tmpPw);
//        u.setNewPassword(null);
//        u.setUpdatePassword(true);
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNull(result);
//
//        expected = HttpServletResponse.SC_BAD_REQUEST;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        u.setUserName(this.dataStore.get(4).getUserName());
//        u.setNewPassword("newPassWord");
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNotNull(result);
//
//        expected = HttpServletResponse.SC_OK;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        assertEquals(u.getNewPassword(), result.getPassword());
//
//        userName = this.dataStore.get(4).getUserName();
//        u = new User("Changed Name", "someNewUserName", "newPassword123", null, "some.new+email@test.com");
//        u.setUpdatePassword(false);
//
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNotNull(result);
//
//        expected = HttpServletResponse.SC_OK;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        User find = this.userRepository.findByUserName(u.getUserName());
//
//        assertNotNull(find);
//
//        assertEquals(u.getFullName(), find.getFullName());
//
//        assertEquals(u.getUserName(), find.getUserName());
//        assertNotEquals(u.getPassword(), find.getPassword());
//        assertEquals(u.getUserLevel(), find.getUserLevel());
//        assertEquals(u.getEmail(), find.getEmail());
//
//        u.setUpdatePassword(true);
//        u.setNewPassword("newPassword321!");
//        u.setPassword(find.getPassword());
//
//        userName = u.getUserName();
//        result = this.userController.updateUser(u, userName, this.response);
//
//        assertNotNull(result);
//
//        expected = HttpServletResponse.SC_OK;
//        actual = this.response.getStatus();
//        assertEquals(expected, actual);
//
//        find = this.userRepository.findByUserName(userName);
//        assertNotNull(find);
//
//        assertEquals(u.getNewPassword(), find.getPassword());
//
//        String tmpUserName = u.getUserName();
//        u.setUserName(null);
//        u.setUpdatePassword(false);
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNull(result);
//
//        assertEquals(HttpServletResponse.SC_BAD_REQUEST, this.response.getStatus());
//
//        u.setUserName(tmpUserName);
//        tmpEmail = u.getEmail();
//        u.setEmail(null);
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNull(result);
//
//        assertEquals(HttpServletResponse.SC_BAD_REQUEST, this.response.getStatus());
//
//        u.setUserName(null);
//
//        result = this.userController.updateUser(u, userName, this.response);
//        assertNull(result);
//
//        assertEquals(HttpServletResponse.SC_BAD_REQUEST, this.response.getStatus());
//    }
//    private void removeUserEmptyOrNullTest(String invalidValue)
//    {
//        String userName = invalidValue;
//        String password = invalidValue;
//        this.userController.removeUser(userName, password, this.response);
//        assertEquals(HttpServletResponse.SC_BAD_REQUEST, this.response.getStatus());
//
//        userName = this.dataStore.get(0).getUserName();
//        this.userController.removeUser(userName, password, this.response);
//        assertEquals(HttpServletResponse.SC_BAD_REQUEST, this.response.getStatus());
//
//        userName = invalidValue;
//        password = this.dataStore.get(0).getPassword();
//        this.userController.removeUser(userName, password, this.response);
//        assertEquals(HttpServletResponse.SC_BAD_REQUEST, this.response.getStatus());
//    }
//
//    @Ignore
//    @Test
//    public void removeUserTest()
//    {
//        this.removeUserEmptyOrNullTest(null);
//        this.removeUserEmptyOrNullTest("");
//        this.removeUserEmptyOrNullTest(" ");
//
//        String userName = "doesNotExist";
//        String password = this.dataStore.get(0).getPassword();
//        this.userController.removeUser(userName, password, this.response);
//        assertEquals(HttpServletResponse.SC_NOT_FOUND, this.response.getStatus());
//
//        userName = this.dataStore.get(0).getUserName();
//        password = "invalidPassword";
//        this.userController.removeUser(userName, password, this.response);
//        assertEquals(HttpServletResponse.SC_UNAUTHORIZED, this.response.getStatus());
//
//        User u = this.dataStore.get(0);
//        userName = u.getUserName();
//        password = u.getPassword();
//        this.userController.removeUser(userName, password, this.response);
//        assertEquals(HttpServletResponse.SC_NO_CONTENT, this.response.getStatus());
//        assertFalse(this.dataStore.contains(u));
//    }
//}
//