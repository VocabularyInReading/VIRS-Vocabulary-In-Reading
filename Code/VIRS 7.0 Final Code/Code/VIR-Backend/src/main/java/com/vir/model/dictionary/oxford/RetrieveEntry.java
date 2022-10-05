package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.vir.model.DictionaryEntry;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class RetrieveEntry implements DictionaryEntry {

	private Object metadata;
	private List<HeadwordEntry> results;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		RetrieveEntry that = (RetrieveEntry) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public Object getMetadata() {
		return metadata;
	}

	public void setMetadata(Object metadata) {
		this.metadata = metadata;
	}

	public List<HeadwordEntry> getResults() {
		return results;
	}

	public void setResults(List<HeadwordEntry> results) {
		this.results = results;
	}
}
