package com.vir.model.translator;

import org.apache.commons.csv.CSVRecord;

import com.vir.model.Word;

public class WordTranslator {
	public static Word fromCSVRecordToWord(CSVRecord csvRecord) {
		return new Word(csvRecord.get("value"), csvRecord.get("category"));
	}
}
