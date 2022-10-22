package com.vir.service.impl.processor;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vir.model.Count;
import com.vir.model.Percent;
import com.vir.model.Statistics;
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
@Service("optimizedTextProcessorService")
@Transactional
public class OptimizedTextProcessorService implements TextProcessorService
{
	private final WordRepository wordRepository;
	private final WordService wordService;
	private final Object lockRepo;
	private final Logger logger = LoggerFactory.getLogger(OptimizedTextProcessorService.class);

	public OptimizedTextProcessorService
	(
		WordRepository wordRepository
		, @Qualifier("simpleWordService")
		WordService wordService
	)
	{
		this.wordRepository = wordRepository;
		this.wordService = wordService;
		this.lockRepo = new Object();
	}


	private int priorityOfCategory(String category){ //Priorities go from 1 to 10 with 1 being the most important

		if(category.equalsIgnoreCase("K1")){return 1;}
		else if(category.equalsIgnoreCase("K2")){return 2;}
		else if(category.equalsIgnoreCase("K3")){return 3;}
		else if(category.equalsIgnoreCase("awl")){return 4;}
		else if(category.equalsIgnoreCase("stem")){return 5;}
		else if(category.equalsIgnoreCase("hi")){return 6;}
		else if(category.equalsIgnoreCase("med")){return 7;}
		else if(category.equalsIgnoreCase("low")){return 9;}
		return 10;
			

	}

	//Handles words with multiple categories
	private List<Word> removeMultCategory(List<Word> c){

		List<Word> singleCategory = new ArrayList<Word>(); //List where the final word entities go
		HashMap<String, Integer> seen = new HashMap<String, Integer>(); //HashMap to see if a word has already been seen
		
		int index = 0;
		for(Word a : c){
			if (seen.get(a.getValue()) != null){
				//Check if word that has been seen has less priority, if so replace
				if(priorityOfCategory(singleCategory.get(seen.get(a.getValue())).getCategory()) > priorityOfCategory(a.getCategory())){ 
					
					int temp = seen.remove(a.getValue());
					seen.put(a.getValue(), temp);
					singleCategory.set(temp, a);
	
				}

			}
			else{
				seen.put(a.getValue(), index);
				singleCategory.add(index, a);
				index++;
			}

		}
		return singleCategory;
		
    }


	protected Text process(String textString, int dataQuerySize) {
		logger.info("Attempting to process extracted text");
		// @formatter:off
		List<String> originalWords = getStrings(textString);
		logger.info("There are {} extracted words in the list.", originalWords.size());
		logger.info("Cleaning words.");
		List<String> cleanValues = originalWords.stream()
				.map(wordService::clean)
				.filter(StringUtils::isNotBlank)
				.collect(Collectors.toList());

		int cleanValuesSize = cleanValues.size();
		logger.info("There are {} words in the list of clean words.", cleanValuesSize);

		Set<Word> resultWords = new HashSet<>();
		logger.info("Attempting to find a list of matching distinct words in the database.");
		synchronized(this.lockRepo)
		{
			int lowerIndex = 0;
			int upperIndex = cleanValuesSize / dataQuerySize == 0 ? cleanValuesSize : dataQuerySize;
			while (upperIndex < cleanValuesSize) {
				logger.info("Making a query of {} words from the list of clean words of size {}.", upperIndex - lowerIndex, cleanValuesSize);
				logger.debug("LowerIndex is {} and upperIndex is {}.", lowerIndex, upperIndex);
				resultWords.addAll(wordRepository.findWordDistinctByValueIn(cleanValues.subList(lowerIndex, upperIndex)));
				lowerIndex = upperIndex;
				upperIndex = Math.min((upperIndex + dataQuerySize), cleanValuesSize);
			}
			logger.info("Making a query of {} words from the list of clean words of size {}.", upperIndex - lowerIndex, cleanValuesSize);
			logger.debug("LowerIndex is {} and upperIndex is {} in the total list of clean values.", lowerIndex, upperIndex);
			resultWords.addAll(removeMultCategory(wordRepository.findWordDistinctByValueIn(cleanValues.subList(lowerIndex, upperIndex))));
			
		}//synchronized
		logger.info("Total of {} distinct words was found in the database.", resultWords.size());

		Map<String, Word> resultsMap = resultWords.stream()
				

				.collect(Collectors.toMap(Word::getValue, w -> w));
		List<WordMatch> matches = new ArrayList<>();

		// Loop through the word list and clean it
		for (String originalWord : originalWords) {
			logger.trace("Original word: {}", originalWord);
			String clean = wordService.clean(originalWord);
			logger.trace("Clean word: {}", clean);
			WordMatch match = new WordMatch(originalWord);

			// if result map contains the word then grab it.
			if (resultsMap.containsKey(clean)) {
				Word w = resultsMap.get(clean);
				match.setCategory(w.getCategory());
				match.setValue(w.getValue());
			}
			matches.add(match);
		}

		// Collect all data
		Count wordCount = getWordCount(matches);
		Percent wordPercent = new Percent(wordCount);
		Statistics statistics = new Statistics(wordCount, wordPercent);
		Long sentenceCount = countSentences(textString);
		Double fleschReadingScore = getFleschReadingEase(countWords(matches), sentenceCount, getSyllableCount(matches));
		logger.info("Finished processing extracted text. {} words and {} sentences were found.", matches.size(), sentenceCount);
		return new Text(matches, fleschReadingScore, statistics, sentenceCount);
		// @formatter:on
	}

	@Override
	public Text process(String textString)
	{
		return process(textString, 1000);
	}

	/**
	 * Get the count of all the words in the test.
	 * 
	 * @param words the test to count.
	 * @return an instance of the count.
	 */
	private Count getWordCount(List<WordMatch> words) {
		long stem = 0;
		long awl = 0;
		long hi = 0;
		long low = 0;
		long med = 0;
		long k1 = 0;
		long k2 = 0;
		long noCategory = 0;

		for (WordMatch wordMatch : words) {
			if (!StringUtils.isBlank(wordMatch.getInitialValue())) {
				stem += wordMatch.getCategory().equalsIgnoreCase("stem") ? 1 : 0;
				awl += wordMatch.getCategory().equalsIgnoreCase("awl") ? 1 : 0;
				hi += wordMatch.getCategory().equalsIgnoreCase("hi") ? 1 : 0;
				med += wordMatch.getCategory().equalsIgnoreCase("med") ? 1 : 0;
				low += wordMatch.getCategory().equalsIgnoreCase("low") ? 1 : 0;
				k1 += wordMatch.getCategory().equalsIgnoreCase("K1") ? 1 : 0;
				k2 += wordMatch.getCategory().equalsIgnoreCase("K2") ? 1 : 0;

				if (StringUtils.isBlank(wordMatch.getCategory())) {
					noCategory++;
				}
			}
		}
		return new Count(stem, awl, hi, med, low, noCategory, k1, k2);
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
		final String regex = "[\\n\\r\\s]";
		textString = textString.trim();
		return Arrays.asList(textString.split(regex));
	}

	/**
	 * Get's the counts of the words from a text.
	 */
	@Override
	public long countWords(List<WordMatch> words) {
		return words.stream().filter(isValidWord()).count();
	}

	/**
	 * Counts the amount of sentences in a text.
	 * 
	 * We are taking into consideration the decimal numbers.
	 */
	@Override
	public long countSentences(String textString) {
		final String regex = "([a-zA-Z\\s](?:[\\.?!]){1,3}[\\s])";
		textString = textString.trim();
		List<String> sentences = Arrays.asList(textString.split(regex));
		return sentences.size();
	}

	/**
	 * Calculation for the FleschReadingEase
	 * 
	 * http://www.readabilityformulas.com/flesch-reading-ease-readability-formula.php
	 */
	@Override
	public double getFleschReadingEase(long wordCount, long sentenceCount, long syllableCount) {

		final double maxThreshold = 100.0d;
		final double minThreshold = 0.0d;
		final int minWordCount = 100;
		final double baseConstant = 206.835;
		final double sentenceLengthRatio = 1.015;
		final double syllableRatio = 84.6;
		final double ASL = ((double) wordCount / sentenceCount);
		final double ASW = ((double) syllableCount / wordCount);
		
		if (wordCount < minWordCount) {
			return minThreshold;
		}

		double result = (baseConstant - (sentenceLengthRatio * ASL) - (syllableRatio * ASW));
		
		if (result > maxThreshold) {
			return maxThreshold;
		}
		
		if (result < minThreshold) {
			return minThreshold;
		}
		
		return result;
	}

	/**
	 * Predicate to determine what is a valid word.
	 * 
	 * @return True if is a valid word, else false
	 */
	private static Predicate<WordMatch> isValidWord() {
		return w -> {
			String value = w.getInitialValue().trim();

			if (value.length() > 1) {
				return true;
			}

			if ((value.length() == 1) && Character.isLetterOrDigit(w.getInitialValue().toCharArray()[0])) {
				return true;
			}
			return false;
		};
	}

	/**
	 * Gets a total of all the syllables in a text.
	 * 
	 * @param words the text to be inspected.
	 * @return the count.
	 */
	private long getSyllableCount(List<WordMatch> words) {

		long total = 0;
		for (WordMatch wordMatch : words) {
			if (StringUtils.isNoneBlank(wordMatch.getInitialValue())) {
				total += wordService.countSyllables(wordMatch.getInitialValue());
			}
		}
		return total;
	}
}
