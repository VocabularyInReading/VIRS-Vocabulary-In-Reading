package com.vir.service.impl.processor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.apache.commons.lang3.NotImplementedException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vir.model.Text;
import com.vir.model.Word;
import com.vir.model.WordMatch;
import com.vir.repository.WordRepository;
import com.vir.service.TextProcessorService;
import com.vir.service.WordService;

/**
 * A simple text processor to match a word to the category.
 * 
 * @author Alfredo Lopez
 *
 */
@Service("simpleTextProcessorService")
@Transactional
public class SimpleTextProcessorService implements TextProcessorService
{
	private final WordRepository wordRepository;
	private final WordService wordService;

	public SimpleTextProcessorService
	(
		WordRepository wordRepository
		, @Qualifier("simpleWordService")
		WordService wordService
	)
	{
		this.wordRepository = wordRepository;
		this.wordService = wordService;
	}

	@Override
	public Text process(String textString) {

		List<String> initialStrings = getStrings(textString);
		Map<String, WordMatch> map = new HashMap<>();
		List<WordMatch> finalList = new ArrayList<>();

		WordMatch result = null;
		for (String initialString : initialStrings) {
			if (map.containsKey(initialString)) {
				result = map.get(initialString);
			} else {
				String cleanValue = wordService.removePunctuation(initialString);

				if (StringUtils.isEmpty(cleanValue)) {
					result = new WordMatch(initialString);
				} else {
					result = getWord(cleanValue, initialString);
				}
				map.put(initialString, result);
			}
			finalList.add(result);
		}

		Text text = new Text();
		text.setWords(finalList);

		return text;
	}

	/**
	 * Gets the list of strings from a text.
	 * 
	 * @param textString the string to split
	 * @return A list of strings
	 * 
	 *         Note: We make sure there is no more than two white spaces between the
	 *         words.
	 */
	private List<String> getStrings(String textString) {

		String regex = "[\\n\\r\\s]";
		String regexPlus = "[\\n\\r\\s]+";

		textString = textString.trim();
		textString = textString.replaceAll(regexPlus, StringUtils.SPACE);

		return Arrays.asList(textString.split(regex));
	}

	/**
	 * Gets a word from a string.
	 * 
	 * @param cleanValue The clean value of the string
	 * @param initialValue The initial value of the word.
	 * @return A word if found, else and empty word with the initial value
	 * 
	 */
	private WordMatch getWord(String cleanValue, String initialValue) {
		Word result;
		result = wordRepository.findFirstByValue(cleanValue.toLowerCase());

		if (result == null) {
			return new WordMatch(initialValue);
		} else {
			return new WordMatch(result.getValue(), result.getCategory(), initialValue);
		}
	}

	@Override
	public long countWords(List<WordMatch> words) {
		throw new NotImplementedException("This is not implemented. Check OptimizedTextProcessor");
	}

	@Override
	public long countSentences(String text) {
		throw new NotImplementedException("This is not implemented. Check OptimizedTextProcessor");
	}

	@Override
	public double getFleschReadingEase(long wordCount, long sentenceCount, long syllableCount) {
		throw new NotImplementedException("This is not implemented. Check OptimizedTextProcessor");
	}
}
