package com.vir.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.multipart.MultipartFile;

import com.vir.GeneralDevTest;
import com.vir.model.FileType;
import com.vir.model.Text;
import com.vir.service.FileProcessorService;

@RunWith(SpringRunner.class)
@GeneralDevTest
public class AceptanceOCRCriteriaBigFilesIntegrationTest {

	private static Logger logger = LoggerFactory.getLogger(AceptanceOCRCriteriaBigFilesIntegrationTest.class);
	
	@Autowired
	@Qualifier("simpleFileProcessorService")
	private FileProcessorService fileProcessorService;

	@Ignore
	@Test
	public void getAceptanceCriteriaTestResults() throws Exception {

		final String basePath = "/Users/alfredo/Downloads/pdf-test-documents/";
		List<String> files = Arrays.asList(
				"CK-12-Algebra-I-Concepts-Honors_b_v57_htr_s1.pdf",
				"CK-12-Fifth-Grade-Science_b_v7_8dq_s1.pdf", 
				"Economics 2013-A.pdf",
				"Government by the People 2009 3.pdf");
		List<Data> results = new ArrayList<>();
		
		try {
			
			for (String file : files) {
				long startTime = System.currentTimeMillis();
				Text resultText = doOperation(basePath, file);
				long endTime = System.currentTimeMillis();
				long duration = (endTime - startTime) / 1000;
				
				results.add(new Data(file, duration, resultText.getWords().size()));
			}

		} catch (Exception e) {
			logger.error("This is a very tricky test..");
			logger.error("The following did not work \n {}", e);
		}
		
		// Print the results if success
		System.out.println("\n\n\n");
		System.out.println(printHeaders());
		for (Data data : results) {
			System.out.println(data.toString());
		}
		System.out.println("\n\n\n");
	}

	private Text doOperation(final String basePath, String file) throws IOException, Exception {
		Path path = Paths.get(basePath, file);
		byte[] content = null;
		content = Files.readAllBytes(path);
		MultipartFile multipart = new MockMultipartFile("name", content);
		Text text = new Text();
		text = fileProcessorService.process(multipart, FileType.PDF);
		return text;
	}

	
	private String printHeaders() {
		return "File | Duration | Parsed Words Count";
	}
	
	class Data {
		public String file;
		public long duration;
		public long parsedWordsCount;
		
		public Data(String file, long duration, long parsedWordsCount) {
			super();
			this.file = file;
			this.duration = duration;
			this.parsedWordsCount = parsedWordsCount;
		}
		
		@Override
		public String toString() {
			return this.file + " | " + this.duration + " | " + this.parsedWordsCount; 
		}
	}
}
