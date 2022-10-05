package com.vir.service.impl.dictionary;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;

import javax.net.ssl.HttpsURLConnection;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vir.exception.UnableToGetEntryException;
import com.vir.model.dictionary.oxford.RetrieveEntry;
import com.vir.service.DictionaryEntryService;

@Service("oxfordDictionaryEntryService")
public class OxfordDictionaryEntryService implements DictionaryEntryService
{
	private static final String HEADERS_ACCEPT = "Accept";
	private static final String HEADERS_APP_ID = "app_id";
	private static final String HEADERS_APP_KEY = "app_key";

	private static final String API_URL_ENGLISH = "https://od-api.oxforddictionaries.com/api/v1/entries/en/";

	@Value("${oxford.api.id}")
	private String apiId;

	@Value("${oxford.api.key}")
	private String apiKey;

	private final ObjectMapper mapper;

	public OxfordDictionaryEntryService(ObjectMapper mapper)
	{
		this.mapper = mapper;
	}

	@Override
	public RetrieveEntry getEntry(String wordId) throws UnableToGetEntryException {

		try {
			URL url = new URL(API_URL_ENGLISH + URLEncoder.encode(wordId, "UTF-8"));
			HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
			urlConnection.setRequestProperty(OxfordDictionaryEntryService.HEADERS_ACCEPT,
					MediaType.APPLICATION_JSON_VALUE);
			urlConnection.setRequestProperty(OxfordDictionaryEntryService.HEADERS_APP_ID, apiId);
			urlConnection.setRequestProperty(OxfordDictionaryEntryService.HEADERS_APP_KEY, apiKey);

			BufferedReader reader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
			StringBuilder stringBuilder = new StringBuilder();

			String line = null;
			while ((line = reader.readLine()) != null) {
				stringBuilder.append(line + "\n");
			}

			RetrieveEntry retrieveEntry = mapper.readValue(stringBuilder.toString(), RetrieveEntry.class);
			return retrieveEntry;
			
		} catch (Exception e) {
			throw new UnableToGetEntryException(e.getMessage());
		}
	}

}
