package com.vir.service.impl.dictionary;

import static org.junit.Assert.assertTrue;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.vir.GeneralDevTest;
import com.vir.model.Dictionary;
import com.vir.model.SourceType;
import com.vir.model.dictionary.oxford.RetrieveEntry;
import com.vir.model.dictionary.wiki.WikiEntry;
import com.vir.service.DictionaryEntryService;

@RunWith(SpringRunner.class)
@GeneralDevTest
public class SimpleDictionaryEntryServiceTest {

	final static String WORD = "apple";

	@MockBean(name = "oxfordDictionaryEntryService")
	private DictionaryEntryService oxfordService;

	@MockBean(name = "wikiDictionaryEntryService")
	private DictionaryEntryService wikiService;

	@Autowired
	@InjectMocks
	private SimpleDictionaryEntryService simpleDictionaryEntryService;

	@Before
	public void setup() throws Exception {
		when(oxfordService.getEntry(anyString())).thenReturn(new RetrieveEntry());
		when(wikiService.getEntry(anyString())).thenReturn(new WikiEntry(anyString()));
	}

	@Ignore
	@Test
	public void getEntry_withOxford_returnsADictionaryWithAnOxfordEntryType() throws Exception {
		final List<SourceType> types = Arrays.asList(SourceType.OXFORD);
		Dictionary dictionary = simpleDictionaryEntryService.getEntry(WORD, types);
		assertTrue(dictionary.getOxford() != null);
	}

	@Ignore
	@Test
	public void getEntry_withWiki_returnsADictionaryWithAWikiEntryType() throws Exception {
		final List<SourceType> types = Arrays.asList(SourceType.WIKI);
		Dictionary dictionary = simpleDictionaryEntryService.getEntry(WORD, types);
		assertTrue(dictionary.getWiki() != null);
	}

	@Ignore
	@Test
	public void getEntry_withTwoSources_returnsADictionaryWithTwoEntries() throws Exception {
		final List<SourceType> types = Arrays.asList(SourceType.OXFORD, SourceType.WIKI);
		Dictionary dictionary = simpleDictionaryEntryService.getEntry(WORD, types);
		assertTrue(dictionary.getOxford() != null);
		assertTrue(dictionary.getWiki() != null);
	}

}
