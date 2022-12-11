package com.vir.service.impl.processor;

import static org.junit.Assert.assertTrue;

import java.io.InputStream;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;

import com.vir.GeneralDevTest;
import com.vir.model.FileType;
import com.vir.model.Text;
import com.vir.service.FileProcessorService;

@RunWith(SpringRunner.class)
@GeneralDevTest
public class PdfProcessorServiceIT {
	
	private static final String BASE_PATH = "integration_tests/pdf";
	
	@Autowired
	@Qualifier("pdfProcessorService")
	private FileProcessorService pdfProcessorService;

	@Ignore
	@Test
	public void process_WithScannedColorBook_ReturnsAString() throws Exception {
		final String filePath= BASE_PATH + "/Economics-2013-A-Page-26.pdf";
		checkSomethingWasParsed(filePath);
	}

	@Ignore
	@Test
	public void process_WithScannedColorNewsPaper_ReturnsAString() throws Exception {
		final String filePath= BASE_PATH + "/Government-by-the-People-2009-3-Page-1.pdf";
		checkSomethingWasParsed(filePath);
	}

	@Ignore
	@Test
	public void process_WithPicturesFromBook_ReturnsAString() throws Exception {
		final String filePath= BASE_PATH + "/book-from-images.pdf";
		checkSomethingWasParsed(filePath);
	}
	
	private void checkSomethingWasParsed(String filePath) throws Exception {
		InputStream stream = new ClassPathResource(filePath).getInputStream();
		MockMultipartFile file = new MockMultipartFile(filePath, stream);
		Text actual = pdfProcessorService.process(file, FileType.PDF);
		assertTrue(actual.getWords().size() > 1);
	}
}
