package com.vir.service;

import org.springframework.stereotype.Service;

import com.vir.exception.UnableToGetEntryException;
import com.vir.model.DictionaryEntry;

@Service
public interface DictionaryEntryService {
	public DictionaryEntry getEntry(String wordId) throws UnableToGetEntryException;
}
