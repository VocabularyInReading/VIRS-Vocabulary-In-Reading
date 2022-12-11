package com.vir.service.impl.dictionary.converter;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.vir.model.dictionary.wiki.WikiEntry;
import com.vir.model.dictionary.wiki.WikiPage;
import com.vir.model.dictionary.wiki.WikiResult;

@Service
public class WikiConverterService {

	private static final String PAGES_ID = "pages";

	public WikiEntry wikiResultToWikiEntry(WikiResult wikiResult) {
		Map<String, Map<String, WikiPage>> query = wikiResult.getQuery();
		Map<String, WikiPage> pages = query.get(PAGES_ID);
		WikiPage page = (WikiPage) pages.values().toArray()[0];
		return new WikiEntry(page.getExtract());
	}
}
