package com.vir.service.impl;

import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang.ArrayUtils;
import org.springframework.stereotype.Service;

import com.vir.service.WordService;

import net.thucydides.core.util.Inflector;

@Service("simpleWordService")
public class SimpleWordService implements WordService {

	@Override
	public String removePunctuation(String word) {

		Character[] chars = ArrayUtils.toObject(word.toCharArray());
		StringBuilder stringBuilder = new StringBuilder();

		for (int i = 0; i < chars.length; i++) {
			if (Character.isLetterOrDigit(chars[i])) {
				stringBuilder.append(chars[i]);
			}
		}
		return stringBuilder.toString();
	}

	@Override
	public String getSingular(String word) {
		final int minPluralLength = 4;
		if (word.length() > minPluralLength) {
			return Inflector.getInstance().singularize(word);
		}
		return word;
	}

	@Override
	public String clean(String word) {
		return removePunctuation(getSingular(word)).toLowerCase();
	}

	/**
	 * Function to return the count of syllables in a word.
	 * 
	 * Note: We are removing one of the syllables from the word if the words ends
	 * with 't' or 'd' and verb past ends with '-ed'.
	 * 
	 * https://www.espressoenglish.net/105-regular-verbs-with-ed-in-the-past/
	 */
	@Override
	public int countSyllables(String word) {

		final List<String> exceptions = Arrays.asList("he", "she", "me", "pe", "fe", "be", "the", "we");
		//2018-10-28 - PAA - why was this removed?
		// final String finalWord = removePunctuation(word);
		String input = word.toLowerCase();
		
		// Words ending in e
		if (exceptions.contains(input)) {
			return 1;
		}	
		
		int i = input.length() - 1;
		while (i >= 0 && input.charAt(i) == 'e') {
			i--;
		}
		
		int syllables = 0;
		boolean preVowel = false;
		while (i >= 0) {
			if (isVowel(input.charAt(i))) {
				if (!preVowel) {
					syllables++;
					preVowel = true;
				}
			} else {
				preVowel = false;
			}
			i--;
		}
	
		return syllables;
	}

	public boolean isVowel(char ch) {
		return  (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'y');
	}
}
