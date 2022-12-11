package com.vir.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

@Service
public class WordRepositoryHelper
{
	/*
		warning for testing see:
		https://www.codejava.net/frameworks/hibernate/java-hibernate-jpa-annotations-tutorial-for-beginners

		EntityManagerFactory factory = Persistence.createEntityManagerFactory("UsersDB");
		EntityManager entityManager = factory.createEntityManager();
		 
		entityManager.getTransaction().begin();

		User newUser = new User();
		newUser.setEmail("billjoy@gmail.com");
		newUser.setFullname("bill Joy");
		newUser.setPassword("billi");
		 
		entityManager.persist(newUser);

		entityManager.getTransaction().commit();
		entityManager.close();
		factory.close();

		https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManagerFactory.html

		https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html


	*/
	@PersistenceContext(unitName = "default")
	private /*final*/ EntityManager entityManager;

	// public WordRepositoryHelper
	// (
	// 	@PersistenceContext(unitName = "default")
	// 	EntityManager entityManager
	// )
	// {
	// 	this.entityManager = entityManager;
	// }

	@Transactional
	public int truncateWordTable() {
		final String sql = "truncate table word";
		entityManager.createNativeQuery(sql).executeUpdate();
		return 1;
	}
}
