package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Pronunciation {

	private String audioFile;
	private List<String> dialects;
	private String phoneticNotation;
	private String phoneticSpelling;
	private List<String> regions;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Pronunciation that = (Pronunciation) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public String getAudioFile() {
		return audioFile;
	}
	public void setAudioFile(String audioFile) {
		this.audioFile = audioFile;
	}
	public List<String> getDialects() {
		return dialects;
	}
	public void setDialects(List<String> dialects) {
		this.dialects = dialects;
	}
	public String getPhoneticNotation() {
		return phoneticNotation;
	}
	public void setPhoneticNotation(String phoneticNotation) {
		this.phoneticNotation = phoneticNotation;
	}
	public String getPhoneticSpelling() {
		return phoneticSpelling;
	}
	public void setPhoneticSpelling(String phoneticSpelling) {
		this.phoneticSpelling = phoneticSpelling;
	}
	public List<String> getRegions() {
		return regions;
	}
	public void setRegions(List<String> regions) {
		this.regions = regions;
	}
}
