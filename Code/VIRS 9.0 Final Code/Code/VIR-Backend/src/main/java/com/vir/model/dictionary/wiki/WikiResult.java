package com.vir.model.dictionary.wiki;

import java.util.Map;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

@JsonIgnoreProperties(ignoreUnknown = true)
public class WikiResult {

	

	private String batchcomplete;
	private Map<String, Map<String, WikiPage>> query;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		WikiResult that = (WikiResult) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
	
	public String getBatchcomplete() {
		return batchcomplete;
	}
	public void setBatchcomplete(String batchcomplete) {
		this.batchcomplete = batchcomplete;
	}
	public Map<String, Map<String, WikiPage>> getQuery() {
		return query;
	}
	public void setQuery(Map<String,  Map<String, WikiPage>> query) {
		this.query = query;
	}
	
}
