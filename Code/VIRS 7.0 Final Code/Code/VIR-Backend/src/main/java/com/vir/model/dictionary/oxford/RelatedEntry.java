package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class RelatedEntry {

	private List<String> domains;
	private String id;
	private String language;
	private List<String> regions;
	private List<String> registers;
	private String text;

	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		RelatedEntry that = (RelatedEntry) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
	
	public List<String> getDomains() {
		return domains;
	}
	public void setDomains(List<String> domains) {
		this.domains = domains;
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
