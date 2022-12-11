package com.vir.model.dictionary.oxford;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Sense {

	private List<String> crossReferenceMarkers;
	private List<CrossReference> crossReferences;
	private List<String> definitions;
	private List<String> domains;
	private List<Example> examples;
	private String id;
	private List<CategorizedText> notes;
	private List<Pronunciation> pronunciations;
	private List<String> regions;
	private List<String> registers;
	private List<Sense> subsenses;
	private List<Translation> translations;
	private List<VariantForm> variantForms;
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this);
	}

	@Override
	public boolean equals(Object obj) {
		Sense that = (Sense) obj;
		return EqualsBuilder.reflectionEquals(this, that);
	}

	public List<String> getCrossReferenceMarkers() {
		return crossReferenceMarkers;
	}

	public void setCrossReferenceMarkers(List<String> crossReferenceMarkers) {
		this.crossReferenceMarkers = crossReferenceMarkers;
	}

	public List<CrossReference> getCrossReferences() {
		return crossReferences;
	}

	public void setCrossReferences(List<CrossReference> crossReferences) {
		this.crossReferences = crossReferences;
	}

	public List<String> getDefinitions() {
		return definitions;
	}

	public void setDefinitions(List<String> definitions) {
		this.definitions = definitions;
	}

	public List<String> getDomains() {
		return domains;
	}

	public void setDomains(List<String> domains) {
		this.domains = domains;
	}

	public List<Example> getExamples() {
		return examples;
	}

	public void setExamples(List<Example> examples) {
		this.examples = examples;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public List<String> getRegions() {
		return regions;
	}

	public void setRegions(List<String> regions) {
		this.regions = regions;
	}

	public List<String> getRegisters() {
		return registers;
	}

	public void setRegisters(List<String> registers) {
		this.registers = registers;
	}

	public List<Sense> getSubsenses() {
		return subsenses;
	}

	public void setSubsenses(List<Sense> subsenses) {
		this.subsenses = subsenses;
	}

	public List<Translation> getTranslations() {
		return translations;
	}

	public void setTranslations(List<Translation> translations) {
		this.translations = translations;
	}

	public List<VariantForm> getVariantForms() {
		return variantForms;
	}

	public void setVariantForms(List<VariantForm> variantForms) {
		this.variantForms = variantForms;
	}

}
