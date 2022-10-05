package com.vir.model;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

public class Percent {
	private double stem;
	private double awl;
	private double hi;
	private double med;
	private double low;
	private double noCategory;
	private double total;
	private double K1;
	private double K2;

	@SuppressWarnings("unused")
	private Percent()
	{
	}

	public Percent(Count count)
	{
		boolean zeroTotal = count == null || count.getTotal() == 0;
		this.stem = zeroTotal ? 0 : (double) count.getStem() / count.getTotal();
		this.awl = zeroTotal ? 0 : (double) count.getAwl() / count.getTotal();
		this.hi = zeroTotal ? 0 : (double) count.getHi() / count.getTotal();
		this.med = zeroTotal ? 0 : (double) count.getMed() / count.getTotal();
		this.low = zeroTotal ? 0 : (double) count.getLow() / count.getTotal();
		this.noCategory = zeroTotal ? 0 : (double) count.getNoCategory() / count.getTotal();
		this.K1 = zeroTotal ? 0 : (double) count.getK1() /count.getTotal();
		this.K2 = zeroTotal ? 0 : (double) count.getK2() /count.getTotal();
		this.total = zeroTotal ? 0 : (double) count.getTotal() / count.getTotal();
	}

	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Percent that = (Percent) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}
	
	public double getStem() {
		return stem;
	}

	public void setStem(double stem) {
		this.stem = stem;
	}

	public double getAwl() {
		return awl;
	}
	public void setAwl(double awl) {
		this.awl = awl;
	}
	public double getHi() {
		return hi;
	}
	public void setHi(double hi) {
		this.hi = hi;
	}
	public double getMed() {
		return med;
	}
	public void setMed(double med) {
		this.med = med;
	}
	public double getLow() {
		return low;
	}
	public void setLow(double low) {
		this.low = low;
	}
	public double getK1() {
		return K1;
	}
	public void setK1(double K1) {
		this.K1 = K1;
	}
	public double getK2() {
		return K2;
	}
	public void setK2(double K2) {
		this.K2 = K2;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public double getNoCategory() {
		return noCategory;
	}
	public void setNoCategory(double noCategory) {
		this.noCategory = noCategory;
	}
	public static final Percent EMPTY_PERCENTAGE = new Percent(null); 
}
