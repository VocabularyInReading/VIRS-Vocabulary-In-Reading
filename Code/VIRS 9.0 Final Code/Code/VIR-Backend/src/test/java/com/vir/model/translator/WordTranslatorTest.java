package com.vir.model.translator;

import static org.junit.Assert.assertEquals;

import java.io.ByteArrayInputStream;
import java.io.InputStreamReader;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

import com.vir.GeneralDevTest;
import com.vir.model.Word;

@RunWith(SpringRunner.class)
@GeneralDevTest
public class WordTranslatorTest {

	private static final String HEADER_VALUE = "value";
	private static final String HEADER_CATEGORY = "category";

	@Ignore
	@Test
	public void fromCSVRecordToWord_WithCSVRecord_ReturnsWord() throws Exception {

		final String contents = "\"value\",\"category\"\n" + "\"abandon\",\"awl\"";

		String[] columns = new String[] { HEADER_VALUE, HEADER_CATEGORY };
		InputStreamReader is = new InputStreamReader(new ByteArrayInputStream(contents.getBytes()));
		CSVParser parser = CSVFormat.EXCEL.withHeader(columns).parse(is);
		List<CSVRecord> records = parser.getRecords();

		CSVRecord record = records.get(1);
		Word word = WordTranslator.fromCSVRecordToWord(record);

		assertEquals("awl", word.getCategory());
		assertEquals("abandon", word.getValue());
	}
}
