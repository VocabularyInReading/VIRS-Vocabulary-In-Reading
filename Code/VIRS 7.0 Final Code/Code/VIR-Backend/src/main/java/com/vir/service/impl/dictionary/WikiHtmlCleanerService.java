package com.vir.service.impl.dictionary;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import java.lang.*;
import java.lang.StringBuilder;

import org.apache.http.util.TextUtils;
import org.apache.xpath.SourceTree;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import org.springframework.stereotype.Service;

@Service
public class WikiHtmlCleanerService {

	/**
	 * Cleans the string to be returned.
	 * 
	 * @param html the html string to clean.
	 * @return the clean string.
	 */
	public String clean(String html) {
		String result = html;
		result = this.parseClean(html);
		// result = extractEnglishOrGuess(result);
		// result = extractDefinition(html);
		result = replaceAllEmptyTagsWithNothing(result);
		result = removeAllExtraLineBreaks(result);
		return result.trim();
	}

	/**
	 * Removes all empty tags from the html.
	 * 
	 * @param html the html to analyze.
	 * @return a string without empty tags.
	 */
	private String replaceAllEmptyTagsWithNothing(String html) {
		final String expression = "((?:<[^>\\/]+>)(?:|\\s+)(?:<\\/[^>]+>))";
		Pattern pattern = Pattern.compile(expression, Pattern.CASE_INSENSITIVE | Pattern.DOTALL | Pattern.MULTILINE);
		Matcher matcher = pattern.matcher(html);

		if (matcher.find()) {
			html = matcher.replaceAll("");
			return html;
		} else {
			return html;
		}
	}

	/**
	 * Extracts the English part of the text. If it cannot find the correct
	 * boundaries it returns the original.
	 * 
	 * @param html the html to analyze.
	 * @return the result.
	 */
	private String extractEnglishOrGuess(String html) {

		final String englishTitle = "<h2><span id=\"English\">English</span></h2>";
		final String newLine = "<hr>";

		int start = html.indexOf(englishTitle);
		int end = html.indexOf(newLine);

		start = (start == -1) ? 0 : start + englishTitle.length();
		end = (end == -1) ? html.length() : end;

		return html.substring(start, end);
	}

	/**
	 * Extracts the pronunciation part of the text. If it cannot find the correct
	 * boundaries it returns the original.
	 * 
	 * @param html the html to analyze.
	 * @return the result.
	 */
	private String extractPronunciation(String html){

		final String proStart = "<span id=\"Pronunciation\">";
		final String proEnd = "<span id=";

		int start = html.indexOf(proStart);

		int end = html.indexOf(proEnd, start + 5);

		if (start == -1){
			String pronunciation = "";
			return pronunciation;
		}
		else{
			String pronunciation = html.substring(start, end);
			return pronunciation;
		}	
	}

	/**
	 * Extracts the Definition part of the text and calls the
	 * pronunciation method.
	 * 
	 * @param html the html to analyze.
	 * @return the result.
	 */
	private String extractDefinition(String html){ 
		final String defStart;
		final String defEnd = "<span id="; 
		final String defOne = "<span id=\"Verb\">";
		final String defTwo = "<span id=\"Adjective\">";
		final String defThree = "<span id=\"Noun\">";
		final String defFour = "<span id=\"Adverb\">";
		final String defFive = "<span id=\"Pronoun\">";

		if (html.contains(defOne)){
			defStart = defOne; 
		}
		else if (html.contains(defTwo)){
			defStart = defTwo;
		}
		else if (html.contains(defThree)){
			defStart = defThree;
		}
		else if (html.contains(defFour)){
			defStart = defFour;
		}
		else {
			defStart = defFive;
		}

		int start = html.indexOf(defStart);

		int end = html.indexOf(defEnd, start + 5);

		if (end == -1){
			final String defEnd2 = "</ol>";
			int end2 = html.indexOf(defEnd2, start + 1);
			String definition = html.substring(start, end2);
			return definition + extractPronunciation(html);
		}
		else{
			String definition = html.substring(start, end);
			return definition + extractPronunciation(html);
		}
	}
	static final List<String> ALLOWED = Arrays.asList(new String[]{ "verb", "adverb", "noun", "pronoun", "adjective", "pronunciation", "particle", "preposition", "conjunction", "article", "interjection" });

	private boolean listContains(List<String> lst, String str)
	{
		boolean hasPrefix = str.contains("_");
		String strPrefix = hasPrefix ? str.substring(0, str.indexOf('_')) : str;
		boolean contains =
			lst.stream()
				.filter
				(
					s ->
						s.equalsIgnoreCase(str)
						|| hasPrefix && s.equalsIgnoreCase(strPrefix)
				).findFirst()
				.isPresent();

		return contains;
	}
	//recursively clear any blank nodes
	private static void clearEmptyNodes(Element e)
	{
		if(e == null) return;
		int n = e.children() == null ? 0 : e.children().size();
		for(int i = 0; i < n; ++i)
		{
			Element child = e.child(i);
			clearEmptyNodes(child);
			//if the children are dynamically removed n will change
			int newSize = e.children().size();
			if(newSize < n)
			{
				//go back 1 if the size changed so we don't skip the next element that is now index - 1
				--i;
				//set new max size
				n = newSize;
			}//if
		}//for i

		String val = e.text();
		boolean blank = TextUtils.isBlank(val);
		if(blank) e.remove();
	}
	private String parseClean(String html)
	{
		if(TextUtils.isBlank(html)) return html;

		Document doc = Jsoup.parse(html);
		if(doc == null || doc.childNodeSize() == 0 || doc.body().childNodeSize() == 0) return html;

		Elements elements = doc.body().children();

		Elements filtered = new Elements();
		boolean found = false;
		boolean shouldAppend = false;
		if(elements != null && elements.size() > 0)
		{
			for(int i = 0; i < elements.size(); ++i)
			{
				Element e = elements.get(i);

				if(found)
				{
					String tag = e.tag().getName();
					boolean boundaryFound = "hr".equalsIgnoreCase(tag);
					if(boundaryFound) break;
					else
					{
						boolean hasChildren = e.children() != null && e.children().size() > 0;
						Element child = !hasChildren ? null : e.children().first();
						String childTag = !hasChildren ? null : child.tagName();
						boolean childSpan = !TextUtils.isBlank(childTag) && "span".equalsIgnoreCase(childTag);

						//find tags h1 to h6
						Matcher matcher = Pattern.compile("h[0-6]{1}").matcher(tag);
						boolean headerFound = matcher.find();
						String id = child == null ? null : child.id();
						if(headerFound)
						{
							shouldAppend =
								//only grab those that are in the allowed list
								childSpan && headerFound && this.listContains(ALLOWED, id);
						}//if
						if(shouldAppend)
						{
							clearEmptyNodes(e);
							filtered.add(e);
						}
						continue;
					}//else
				}//if
				Elements children = e.children();
				
				if(children == null || children.size() == 0) continue;

				Element span = children.first();
				boolean spanFound = "span".equalsIgnoreCase(span.tag().getName());

				if(!spanFound) continue;

				String id = span.id();

				boolean english = "english".equalsIgnoreCase(id);

				if(!english) continue;
				found = true;
			}//for i
		}//if

		return !found || filtered.size() == 0 ? html : new Element("div").insertChildren(0, filtered).outerHtml();
	}

	/**
	 * Removed all extra spaces for the string
	 * 
	 * @param html
	 * @return
	 */
	private String removeAllExtraLineBreaks(String html) {
		return html.replaceAll("[\r\n]+", "\n");
	}
}
