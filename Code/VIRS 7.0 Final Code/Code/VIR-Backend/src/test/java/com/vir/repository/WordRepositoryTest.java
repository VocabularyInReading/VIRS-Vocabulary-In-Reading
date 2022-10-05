package com.vir.repository;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Arrays;
import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import com.vir.GeneralDevTest;
import com.vir.model.Word;

@RunWith(SpringRunner.class)
@GeneralDevTest
public class WordRepositoryTest {
	
	@Autowired
	private WordRepository wordRepository;

	@Ignore
	@Test
	public void findAllIn_With2ExistingWords_ReturnsAListWith2Words() {
		List<String> strings = Arrays.asList("abandon", "abnormal");
		List<Word> words = wordRepository.findByValueIn(strings);
		assertEquals(2, words.size());
	}

	@Ignore
	@Test
	public void findAllIn_WithStringDog_ReturnsAWordWith() {
		List<String> strings = Arrays.asList("abandon");
		List<Word> words = wordRepository.findByValueIn(strings);
		assertEquals("awl", words.get(0).getCategory());
	}

	@Ignore
	@Test
	public void findFirstByValue_WithDog_ReturnsDog() throws Exception {
		Word result = wordRepository.findFirstByValue("dog");
		assertNotNull(result);
		assertEquals(result.getValue(), "dog");
	}
}
