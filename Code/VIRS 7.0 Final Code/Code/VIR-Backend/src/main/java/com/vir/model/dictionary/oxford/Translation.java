package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Translation {

	private List<String> domains;
	private List<GrammaticalFeature> grammaticalFeatures;
	private String language;
	private List<CategorizedText> notes;
	private List<String> regions;
	private List<String> registers;
	private String text;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Translation that = (Translation) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public List<String> getDomains() {
		return domains;
	}

	public void setDomains(List<String> domains) {
		this.domains = domains;
	}

	public List<GrammaticalFeature> getGrammaticalFeatures() {
		return grammaticalFeatures;
	}

	public void setGrammaticalFeatures(List<GrammaticalFeature> grammaticalFeatures) {
		this.grammaticalFeatures = grammaticalFeatures;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public List<CategorizedText> getNotes() {
		return notes;
	}

	public void setNotes(List<CategorizedText> notes) {
		this.notes = notes;
	}

	public List<String> getRegions() {
		return regions;
	}

	public void setRegions(List<String> regions) {
		this.regions = regions;
	}

	public List<String> getRegisters() {
		return registers;
	}

	public void setRegisters(List<String> registers) {
		this.registers = registers;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

}
