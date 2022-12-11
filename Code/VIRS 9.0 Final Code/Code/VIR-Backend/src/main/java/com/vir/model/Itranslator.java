package com.vir.model;

/**
 * Translation elements. In a way an abstract representation of a
 * translation.
 */
public class Itranslator {

	private String original;
	private String target;
	private String translated;

    /**
     * @return the original
     */
    public String getOriginal() {
        return original;
    }

    /**
     * @param target the target to set
     */
    public void setTarget(String target) {
        this.target = target;
    }

    /**
     * @param translated the translated to set
     */
    public void setTranslated(String translated) {
        this.translated = translated;
    }

    /**
     * @return the translated
     */
    public String getTranslated() {
        return translated;
    }

    /**
     * @return the target
     */
    public String getTarget() {
        return target;
    }

    /**
     * @param original the original to set
     */
    public void setOriginal(String original) {
        this.original = original;
    }
}
