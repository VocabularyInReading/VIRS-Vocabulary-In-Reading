package com.vir.model;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class WordMatch {

	private String value;
	private String category;
	private String initialValue;
	
	public WordMatch(String value, String category, String initialValue) {
		super();
		this.value = value;
		this.category = category;
		this.initialValue = initialValue;
	}
	
	public WordMatch(String initialValue) {
		this(StringUtils.EMPTY, StringUtils.EMPTY, initialValue);
	}
	
	@Override
	public boolean equals(Object obj) {
		WordMatch that = (WordMatch) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}
	
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this, ToStringStyle.JSON_STYLE);
	}
	
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getInitialValue() {
		return initialValue;
	}
	public void setInitialValue(String initialValue) {
		this.initialValue = initialValue;
	}	
}
