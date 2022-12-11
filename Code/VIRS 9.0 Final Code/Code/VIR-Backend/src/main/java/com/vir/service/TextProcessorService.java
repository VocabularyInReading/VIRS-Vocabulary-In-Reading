package com.vir.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.vir.model.Text;
import com.vir.model.WordMatch;

/**
 * Main service used when processing text.
 * 
 * @author Alfredo Lopez
 *
 */
@Service
public interface TextProcessorService {
	public Text process(String text);
	public long countWords(List<WordMatch> words );
	public long countSentences(String text);
	public double getFleschReadingEase(long wordCount, long sentenceCount, long syllableCount);
}
