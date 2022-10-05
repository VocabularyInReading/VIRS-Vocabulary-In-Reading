package com.vir.model.dictionary.wiki;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

public class WikiPage {

	private int pageid;
	private int ns;
	private String title;
	private String extract;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		WikiPage that = (WikiPage) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
	
	public int getPageid() {
		return pageid;
	}
	public void setPageid(int pageid) {
		this.pageid = pageid;
	}
	public int getNs() {
		return ns;
	}
	public void setNs(int ns) {
		this.ns = ns;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getExtract() {
		return extract;
	}
	public void setExtract(String extract) {
		this.extract = extract;
	}
}
