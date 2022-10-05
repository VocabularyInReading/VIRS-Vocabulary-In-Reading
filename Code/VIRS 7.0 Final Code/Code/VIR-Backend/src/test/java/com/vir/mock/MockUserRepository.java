//package com.vir.mock;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import com.vir.model.User;
//import com.vir.repository.UserRepository;
//
//import org.apache.http.util.TextUtils;
//import org.springframework.data.domain.Example;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//
//public class MockUserRepository implements UserRepository
//{
//    final List<User> dataStore;
//
//    public MockUserRepository(List<User> dataStore)
//    {
//        this.dataStore = dataStore == null ? new ArrayList<User>() : dataStore;
//    }
//
//    @Override
//    public List<User> findAll() {
//        return null;
//    }
//
//    @Override
//    public List<User> findAll(Sort sort) {
//        return null;
//    }
//
//    @Override
//    public List<User> findAll(Iterable<Long> ids) {
//        return null;
//    }
//
//    @Override
//    public <S extends User> List<S> save(Iterable<S> entities) {
//        return null;
//    }
//
//    @Override
//    public void flush() {
//
//    }
//
//    @Override
//    public <S extends User> S saveAndFlush(S entity) {
//        return null;
//    }
//
//    @Override
//    public void deleteInBatch(Iterable<User> entities) {
//
//    }
//
//    @Override
//    public void deleteAllInBatch() {
//
//    }
//
//    @Override
//    public User getOne(Long id) {
//        return null;
//    }
//
//    @Override
//    public <S extends User> List<S> findAll(Example<S> example) {
//        return null;
//    }
//
//    @Override
//    public <S extends User> List<S> findAll(Example<S> example, Sort sort) {
//        return null;
//    }
//
//    @Override
//    public Page<User> findAll(Pageable pageable) {
//        return null;
//    }
//
//    @Override
//    public <S extends User> S save(S entity)
//    {
//        if(entity == null) return null;
//
//        for(int i = 0; i < this.dataStore.size() ; ++i)
//        {
//            User u = this.dataStore.get(i);
//
//            if(u.getId() != entity.getId()) continue;
//
//            this.dataStore.set(i, entity);
//            return entity;
//        }//for u
//
//        this.dataStore.add(entity);
//        return entity;
//    }
//
//    @Override
//    public User findOne(Long id) {
//        return null;
//    }
//
//    @Override
//    public boolean exists(Long id) {
//        return false;
//    }
//
//    @Override
//    public long count() {
//        return 0;
//    }
//
//    @Override
//    public void delete(Long id) {
//
//    }
//
//    @Override
//    public void delete(User entity) {
//
//    }
//
//    @Override
//    public void delete(Iterable<? extends User> entities) {
//
//    }
//
//    @Override
//    public void deleteAll() {
//
//    }
//
//    @Override
//    public <S extends User> S findOne(Example<S> example) {
//        return null;
//    }
//
//    @Override
//    public <S extends User> Page<S> findAll(Example<S> example, Pageable pageable) {
//        return null;
//    }
//
//    @Override
//    public <S extends User> long count(Example<S> example) {
//        return 0;
//    }
//
//    @Override
//    public <S extends User> boolean exists(Example<S> example) {
//        return false;
//    }
//
//    @Override
//    public User findByUserName(String userName)
//    {
//        if(TextUtils.isBlank(userName)) return null;
//
//        for(User u : this.dataStore)
//        {
//            String uName = u.getUserName();
//            if(!userName.equals(uName)) continue;
//
//            return u;
//        }//for u
//        return null;
//    }
//
//    @Override
//    public User findByEmail(String email)
//    {
//        if(TextUtils.isBlank(email)) return null;
//
//        for(User u : this.dataStore)
//        {
//            String e = u.getEmail();
//            if(!email.equals(e)) continue;
//
//            return u;
//        }//for u
//        return null;
//    }
//
//    @Override
//    public Long removeByUserName(String userName)
//    {
//        final long INVALID_CODE = -1L;
//        User u = this.findByUserName(userName);
//        if(u == null) return INVALID_CODE;
//        boolean removed = this.dataStore.remove(u);
//
//        return removed ? 1 : INVALID_CODE;
//    }
//}