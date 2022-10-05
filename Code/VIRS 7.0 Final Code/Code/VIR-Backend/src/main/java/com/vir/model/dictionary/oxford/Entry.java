package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Entry {

	private List<String> etymologies;
	private List<GrammaticalFeature> grammaticalFeatures;
	private String homographNumber;
	private List<CategorizedText> notes;
	private List<Pronunciation> pronunciations;
	private List<Sense> senses;
	private List<VariantForm> variantForms;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Entry that = (Entry) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public List<String> getEtymologies() {
		return etymologies;
	}
	public void setEtymologies(List<String> etymologies) {
		this.etymologies = etymologies;
	}
	public List<GrammaticalFeature> getGrammaticalFeatures() {
		return grammaticalFeatures;
	}
	public void setGrammaticalFeatures(List<GrammaticalFeature> grammaticalFeatures) {
		this.grammaticalFeatures = grammaticalFeatures;
	}
	public String getHomographNumber() {
		return homographNumber;
	}
	public void setHomographNumber(String homographNumber) {
		this.homographNumber = homographNumber;
	}
	public List<CategorizedText> getNotes() {
		return notes;
	}
	public void setNotes(List<CategorizedText> notes) {
		this.notes = notes;
	}
	public List<Pronunciation> getPronunciations() {
		return pronunciations;
	}
	public void setPronunciations(List<Pronunciation> pronunciations) {
		this.pronunciations = pronunciations;
	}
	public List<Sense> getSenses() {
		return senses;
	}
	public void setSenses(List<Sense> senses) {
		this.senses = senses;
	}
	public List<VariantForm> getVariantForms() {
		return variantForms;
	}
	public void setVariantForms(List<VariantForm> variantForms) {
		this.variantForms = variantForms;
	}
}
