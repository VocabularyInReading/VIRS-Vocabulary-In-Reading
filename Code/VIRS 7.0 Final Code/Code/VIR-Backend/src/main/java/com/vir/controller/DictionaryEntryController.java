package com.vir.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vir.model.Dictionary;
import com.vir.model.SourceType;
import com.vir.service.impl.dictionary.SimpleDictionaryEntryService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api")
@Api(tags = "dictionary")
public class DictionaryEntryController
{
	private final SimpleDictionaryEntryService simpleDictionaryEntryService;

	public DictionaryEntryController(SimpleDictionaryEntryService simpleDictionaryEntryService)
	{
		this.simpleDictionaryEntryService = simpleDictionaryEntryService;
	}
	
	@ApiOperation("Get's the definition for a word.")
	@GetMapping(value = "/entries/{wordId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Dictionary getEntry (
			@PathVariable("wordId") String wordId,
			@RequestParam(value = "source", required=true) List<SourceType> sources) throws Exception {
		return simpleDictionaryEntryService.getEntry(wordId, sources);
	}
}
