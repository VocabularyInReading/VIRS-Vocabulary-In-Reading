package com.vir.model;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.vir.model.dictionary.oxford.RetrieveEntry;
import com.vir.model.dictionary.wiki.WikiEntry;

/**
 * Class to hold the definitions data.
 * 
 * @author Alfredo Lopez
 *
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Dictionary {

	private RetrieveEntry oxford;
	private WikiEntry wiki;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Dictionary that = (Dictionary) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
	
	public RetrieveEntry getOxford() {
		return oxford;
	}
	public void setOxford(RetrieveEntry oxford) {
		this.oxford = oxford;
	}
	public WikiEntry getWiki() {
		return wiki;
	}
	public void setWiki(WikiEntry wiki) {
		this.wiki = wiki;
	}
}