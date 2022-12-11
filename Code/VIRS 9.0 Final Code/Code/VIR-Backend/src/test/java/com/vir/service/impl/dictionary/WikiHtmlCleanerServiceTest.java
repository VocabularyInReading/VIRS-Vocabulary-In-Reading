package com.vir.service.impl.dictionary;

import static org.junit.Assert.assertEquals;

import org.junit.Ignore;
import org.junit.Test;

public class WikiHtmlCleanerServiceTest {

	final static String THIS_IS_TEXT = "<p>This is text</p>";
	final static String ENGLISH_HEADER = "<h2><span id=\"English\">English</span></h2>";
	final static String HEADER = "<h4><span id=\"Pronunciation\">Pronunciation</span></h4>";
	final static String HORIZONTAL_ROW_LINE_TAG = "<hr>";
	final static String DIV_START = "<div>";
	final static String DIV_END = "</div>";

	private final WikiHtmlCleanerService wikiHtmlCleanerService;

	public WikiHtmlCleanerServiceTest()
	{
		this.wikiHtmlCleanerService = new WikiHtmlCleanerService();
	}

	@Ignore
	@Test
	public void clean_withEmptyTags_returnsStringWithoutEmptyTags() throws Exception {
		final String html = "<p></p><h2></h2>" + THIS_IS_TEXT;
		assertEquals(THIS_IS_TEXT, wikiHtmlCleanerService.clean(html));
	}

	@Ignore
	@Test
	public void clean_withEnglishHeader_returnsStringWithoutEnglishHeader() throws Exception {
		final String html = ENGLISH_HEADER + HEADER + THIS_IS_TEXT;
		final String expected = (DIV_START + HEADER + THIS_IS_TEXT + DIV_END).replaceAll("\\s+|\\n+", "");
		final String actual = wikiHtmlCleanerService.clean(html).replaceAll("\\s+|\\n+", "");
		assertEquals(expected, actual);
	}

	@Ignore
	@Test
	public void clean_withEnglishHeaderAndEndingTag_returnsStringWithTheContentsBetween() throws Exception {
		final String html = ENGLISH_HEADER + HEADER + THIS_IS_TEXT + HORIZONTAL_ROW_LINE_TAG;
		final String expected = (DIV_START + HEADER  + THIS_IS_TEXT + DIV_END).replaceAll("\\s+|\\n+", "");
		final String actual = wikiHtmlCleanerService.clean(html).replaceAll("\\s+|\\n+", "");
		
		assertEquals(expected, actual);
	}

	@Ignore
	@Test
	public void clean_withoutEnglishHeaderOrEndingTag_returnsFullString() throws Exception {
		final String html = THIS_IS_TEXT;
		assertEquals(THIS_IS_TEXT, wikiHtmlCleanerService.clean(html));
	}
}
