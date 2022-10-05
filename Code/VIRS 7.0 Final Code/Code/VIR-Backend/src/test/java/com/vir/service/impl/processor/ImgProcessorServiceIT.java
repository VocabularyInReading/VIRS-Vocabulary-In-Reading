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
public class ImgProcessorServiceIT {
	
	private static final String BASE_PATH = "integration_tests/img";
	
	@Autowired
	@Qualifier("imgProcessorService")
	private FileProcessorService imgProcessorService;

	@Ignore
	@Test
	public void process_WithPictureOfBook_ReturnsAString() throws Exception {
		final String filePath= BASE_PATH + "/book-page.jpg";
		checkSomethingWasParsed(filePath);
	}

	@Ignore
	@Test
	public void process_WithPictureOfColumn_ReturnsAString() throws Exception {
		final String filePath= BASE_PATH + "/column.jpg";
		checkSomethingWasParsed(filePath);
	}

	@Ignore
	@Test
	public void process_WithPictureOfPoetry_ReturnsAString() throws Exception {
		final String filePath= BASE_PATH + "/poetry.jpg";
		checkSomethingWasParsed(filePath);
	}

	@Ignore
	@Test
	public void process_WithPictureTwoColumnsText_ReturnsAString() throws Exception {
		final String filePath= BASE_PATH + "/two-columns.jpg";
		checkSomethingWasParsed(filePath);
	}
	
	private void checkSomethingWasParsed(String filePath) throws Exception {
		InputStream stream = new ClassPathResource(filePath).getInputStream();
		MockMultipartFile file = new MockMultipartFile(filePath, stream);
		Text actual = imgProcessorService.process(file, FileType.PDF);
		assertTrue(actual.getWords().size() > 1);
	}
}
