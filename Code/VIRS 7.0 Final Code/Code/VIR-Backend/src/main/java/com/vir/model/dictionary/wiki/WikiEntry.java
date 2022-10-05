package com.vir.model.dictionary.wiki;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.vir.model.DictionaryEntry;

public class WikiEntry implements DictionaryEntry{
	
	private String html;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		WikiEntry that = (WikiEntry) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public WikiEntry(String html) {
		super();
		this.html = html;
	}
	
	public String getHtml() {
		return html;
	}
	public void setHtml(String html) {
		this.html = html;
	}
}
