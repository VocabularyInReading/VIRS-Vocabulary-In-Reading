package com.vir.service.impl.processor;

import static org.junit.Assert.assertEquals;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.junit4.SpringRunner;

import com.vir.GeneralDevTest;
import com.vir.service.WordService;

@RunWith(SpringRunner.class)
@GeneralDevTest
public class SimpleWordServiceTest {

	@Autowired
	@Qualifier("simpleWordService")
	private WordService wordService;

	@Ignore
	@Test
	public void removePunctuation_WithADot_ReturnsWordWithoutDot() throws Exception {
		final String word = "word.";
		final String expected = "word";
		assertEquals(expected, wordService.removePunctuation(word));
	}

	@Ignore
	@Test
	public void getSingular_WordEndingInS_ReturnsWordWithoutS() throws Exception {
		final String word = "animals";
		final String expected = "animal";
		assertEquals(expected, wordService.getSingular(word));
	}

	@Ignore
	@Test
	public void getSingular_WordEndingInIES_ReturnsWordEndingInY() throws Exception {
		final String word = "pennies";
		final String expected = "penny";
		assertEquals(expected, wordService.getSingular(word));
	}

	@Ignore
	@Test
	public void getSingular_WordChindren_ReturnsChild() throws Exception {
		final String word = "children";
		final String expected = "child";
		assertEquals(expected, wordService.getSingular(word));
	}

	@Ignore
	@Test
	public void getSingular_WordDeer_ReturnsDeer() throws Exception {
		final String word = "deer";
		final String expected = "deer";
		assertEquals(expected, wordService.getSingular(word));
	}

	@Ignore
	@Test
	public void countSyllables_WithDeer_Returns1() throws Exception {
		final String word = "deer";
		assertEquals(1, wordService.countSyllables(word));
	}

	@Ignore
	@Test
	public void countSyllables_WithAccepted_Returns3() throws Exception {
		final String word = "accepted";
		assertEquals(3, wordService.countSyllables(word));
	}
}
