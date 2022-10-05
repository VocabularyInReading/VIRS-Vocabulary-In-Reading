package com.vir.model;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

public class Count {

	private long stem;
	private long awl;
	private long hi;
	private long med;
	private long low;
	private long noCategory;
	private long k1;
	private long k2;
	private long total;
	

	// private Count() {
	// }

	public Count(long stem, long awl, long hi, long med, long low, long noCategory, long k1, long k2) {
		this.stem = stem;
		this.awl = awl;
		this.hi = hi;
		this.med = med;
		this.low = low;
		this.k1 = k1;
		this.k2 = k2;
		this.noCategory = noCategory;
		this.total = this.stem + this.awl + this.hi + this.med + this.low + this.noCategory + this.k1 + this.k2;
	}
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Count that = (Count) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
	
	public long getStem() {
		return stem;
	}

	public void setStem(long stem) {
		this.stem = stem;
	}

	public long getAwl() {
		return awl;
	}
	public void setAwl(long awl) {
		this.awl = awl;
	}
	public long getHi() {
		return hi;
	}
	public void setHi(long hi) {
		this.hi = hi;
	}
	public long getMed() {
		return med;
	}
	public void setMed(long med) {
		this.med = med;
	}
	public long getLow() {
		return low;
	}
	public void setLow(long low) {
		this.low = low;
	}
	public long getK1() {
		return k1;
	}

	public void setK1(long k1) {
		this.k1 = k1;
	}
	public long getK2() {
		return k2;
	}

	public void setK2(long k2) {
		this.k2 = k2;
	}
	public long getNoCategory() {
		return noCategory;
	}
	public void setNoCategory(long noCategory) {
		this.noCategory = noCategory;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public static final Count EMPTY_COUNT = new Count(0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L);
}
