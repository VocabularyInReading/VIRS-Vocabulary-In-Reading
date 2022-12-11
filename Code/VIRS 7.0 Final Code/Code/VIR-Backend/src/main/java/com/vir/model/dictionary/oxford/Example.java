package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Example {

	private List<String> definitions;
	private List<String> domains;
	private List<CategorizedText> notes;
	private List<String> regions;
	private List<String> registers;
	private List<String> senseIds;
	private String text;
	private List<Translation> translations;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Example that = (Example) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public List<String> getDefinitions() {
		return definitions;
	}

	public void setDefinitions(List<String> definitions) {
		this.definitions = definitions;
	}

	public List<String> getDomains() {
		return domains;
	}

	public void setDomains(List<String> domains) {
		this.domains = domains;
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

	public List<String> getSenseIds() {
		return senseIds;
	}

	public void setSenseIds(List<String> senseIds) {
		this.senseIds = senseIds;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<Translation> getTranslations() {
		return translations;
	}

	public void setTranslations(List<Translation> translations) {
		this.translations = translations;
	}

}
