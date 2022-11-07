package com.vir.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.vir.model.Word;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {
	@Transactional(isolation = Isolation.SERIALIZABLE)
	List<Word> findByValueIn(List<String> words);

	@Transactional(isolation = Isolation.SERIALIZABLE)
	List<Word> findWordDistinctByValueIn(List<String> words);

	@Transactional(isolation = Isolation.SERIALIZABLE)
	Word findFirstByValue(String value);

	// https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation
	@Transactional(isolation = Isolation.SERIALIZABLE)
	Word findFirstByValueAndCategoryIn(String value, String[] categories);

	@Transactional
	Long removeByValue(String value);

	@Transactional(isolation = Isolation.SERIALIZABLE)
	Page<Word> findAllByCategory(Pageable pageable, String category);

	@Transactional
	Page<Word> findAllByValueStartingWithAndCategoryIn(Pageable pageable, String value, String category);

	@Query("select value from Word where value like ?1% and category = ?2")
	List<Word> LiveWordSearch(@Param("value") String value,
			@Param("category") String category);

	@Transactional(isolation = Isolation.SERIALIZABLE)
	Long removeById(int id);

	@Transactional(isolation = Isolation.SERIALIZABLE)
	Long removeByCategory(String category);
}
