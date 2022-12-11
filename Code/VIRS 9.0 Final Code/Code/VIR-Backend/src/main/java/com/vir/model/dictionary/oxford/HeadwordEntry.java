package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class HeadwordEntry {

	private String id;
	private String language;
	private List<LexicalEntry> lexicalEntries;
	private List<Pronunciation> pronunciations;
	private String type;
	private String word;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		HeadwordEntry that = (HeadwordEntry) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public List<LexicalEntry> getLexicalEntries() {
		return lexicalEntries;
	}

	public void setLexicalEntries(List<LexicalEntry> lexicalEntries) {
		this.lexicalEntries = lexicalEntries;
	}

	public List<Pronunciation> getPronunciations() {
		return pronunciations;
	}

	public void setPronunciations(List<Pronunciation> pronunciations) {
		this.pronunciations = pronunciations;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}
}
