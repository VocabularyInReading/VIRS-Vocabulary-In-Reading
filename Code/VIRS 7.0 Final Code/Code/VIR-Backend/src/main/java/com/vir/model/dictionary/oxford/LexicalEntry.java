package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class LexicalEntry {

	private List<RelatedEntry> derivativeOf;
	private List<Entry> entries;
	private List<GrammaticalFeature> grammaticalFeatures;
	private String language;
	private String lexicalCategory;
	private List<CategorizedText> notes;
	private List<Pronunciation> pronunciations;
	private String text;
	private List<VariantForm> variantForms;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		LexicalEntry that = (LexicalEntry) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public List<RelatedEntry> getDerivativeOf() {
		return derivativeOf;
	}
	public void setDerivativeOf(List<RelatedEntry> derivativeOf) {
		this.derivativeOf = derivativeOf;
	}
	public List<Entry> getEntries() {
		return entries;
	}
	public void setEntries(List<Entry> entries) {
		this.entries = entries;
	}
	public List<GrammaticalFeature> getGrammaticalFeatures() {
		return grammaticalFeatures;
	}
	public void setGrammaticalFeatures(List<GrammaticalFeature> grammaticalFeatures) {
		this.grammaticalFeatures = grammaticalFeatures;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getLexicalCategory() {
		return lexicalCategory;
	}
	public void setLexicalCategory(String lexicalCategory) {
		this.lexicalCategory = lexicalCategory;
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
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public List<VariantForm> getVariantForms() {
		return variantForms;
	}
	public void setVariantForms(List<VariantForm> variantForms) {
		this.variantForms = variantForms;
	}
}
