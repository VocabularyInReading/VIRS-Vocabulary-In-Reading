package com.vir.repository;

import org.springframework.transaction.annotation.Isolation;

// import javax.transaction.Transactional;

import org.springframework.transaction.annotation.Transactional;
import com.vir.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
	@Transactional(isolation=Isolation.SERIALIZABLE)
	User findByUserName(String userName);
	@Transactional(isolation=Isolation.SERIALIZABLE)
	User findByEmail(String email);

	@Transactional
	Long removeByUserName(String userName);
}
	