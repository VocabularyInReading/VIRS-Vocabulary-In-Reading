package com.vir.service.impl.dictionary;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;

import javax.net.ssl.HttpsURLConnection;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vir.exception.UnableToGetEntryException;
import com.vir.model.DictionaryEntry;
import com.vir.model.dictionary.wiki.WikiEntry;
import com.vir.model.dictionary.wiki.WikiResult;
import com.vir.service.DictionaryEntryService;
import com.vir.service.impl.dictionary.converter.WikiConverterService;

/**
 * Service to retrieve data from a wiki-dictionary.
 * 
 * @author Alfredo Lopez
 *
 */
@Service("wikiDictionaryEntryService")
public class WikiDictionaryEntryService implements DictionaryEntryService {

	private static final String API_BASE_URL = "https://en.wiktionary.org/w/api.php";
	private static final String API_QUERY_URL = "?format=json&action=query&prop=extracts&exlimit=1&titles=";
	private static final String API_URL = API_BASE_URL + API_QUERY_URL;

	private final WikiConverterService wikiConverterService;
	private final WikiHtmlCleanerService wikiHtmlCleaner;

	public WikiDictionaryEntryService
	(
		WikiConverterService wikiConverterService
		, WikiHtmlCleanerService wikiHtmlCleaner
	)
	{
		this.wikiConverterService = wikiConverterService;
		this.wikiHtmlCleaner = wikiHtmlCleaner;
	}

	@Override
	public DictionaryEntry getEntry(String wordId) throws UnableToGetEntryException {

		try {
			URL url = new URL(API_URL + URLEncoder.encode(wordId, "UTF-8"));			
			HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
			
			BufferedReader reader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
			StringBuilder stringBuilder = new StringBuilder();

			String line = null;
			while ((line = reader.readLine()) != null) {
				stringBuilder.append(line + "\n");
			}

			ObjectMapper mapper = new ObjectMapper();
			WikiResult wikiResult = mapper.readValue(stringBuilder.toString(), WikiResult.class);

			WikiEntry entry = wikiConverterService.wikiResultToWikiEntry(wikiResult);
			entry.setHtml(wikiHtmlCleaner.clean(entry.getHtml()));
			return entry;

		} catch (Exception e) {
			System.out.println(e.getMessage());
			throw new UnableToGetEntryException(e.getMessage());
		}
	}
}
