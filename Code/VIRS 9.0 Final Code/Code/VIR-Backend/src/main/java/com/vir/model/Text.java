package com.vir.model;

import java.util.Collections;
import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

/**
 * Class to hold the list of words. In a way an abstract representation of a
 * text fragment.
 * 
 * @author Alfredo Lopez
 *
 */
public class Text {

	private List<WordMatch> words;
	private Double fleschReadingScore;
	private Statistics statistics;
	private Long sentenceCount;

	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Text that = (Text) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
	
	public Text()
	{
		this(null, 0.0, null, 0L);
	}
	public long getTotalWithCategories()
	{
		Count count = this.getStatistics().getWordCount();
		long wordCount = count.getTotal() - count.getNoCategory();

		return wordCount;
	}
	public Text(List<WordMatch> words, Double fleschReadingScore, Statistics statistics, Long sentenceCount)
	{
		this.words = words == null ? Collections.<WordMatch>emptyList() : words;
		this.fleschReadingScore = fleschReadingScore == null ? 0 : fleschReadingScore;
		this.statistics = statistics == null ? Statistics.EMPTY_STATISTICS : statistics;
		this.sentenceCount = sentenceCount == null ? 0 : sentenceCount;
	}
	public List<WordMatch> getWords() {
		return words;
	}

	public void setWords(List<WordMatch> words) {
		this.words = words == null ? Collections.<WordMatch>emptyList() : words;
	}

	public Double getFleschReadingScore() {
		return fleschReadingScore;
	}

	public void setFleschReadingScore(Double fleschReadingScore) {
		this.fleschReadingScore = fleschReadingScore == null ? 0 : fleschReadingScore;
	}

	public Statistics getStatistics() {
		return statistics;
	}

	public void setStatistics(Statistics statistics) {
		this.statistics = statistics == null ? Statistics.EMPTY_STATISTICS : statistics;
	}

	public Long getSentenceCount() {
		return sentenceCount;
	}

	public void setSentenceCount(Long sentenceCount) {
		this.sentenceCount = sentenceCount == null ? 0 : sentenceCount;
	}
}
