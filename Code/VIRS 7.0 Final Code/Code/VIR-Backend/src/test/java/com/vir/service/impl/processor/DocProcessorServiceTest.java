package com.vir.service.impl.processor;

import static org.junit.Assert.assertEquals;

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
public class DocProcessorServiceTest {

	@Autowired
	@Qualifier("docProcessorService")
	private FileProcessorService docProcessorService;

	@Ignore
	@Test
	public void process_WithDocFile_ReturnsString() throws Exception {
		final String filePath = "a_christmas_carol_by_charles_dickens_segment.doc";
		checkValues(filePath);
	}

	@Ignore
	@Test
	public void process_WithDocxFile_ReturnsString() throws Exception {
		final String filePath = "a_christmas_carol_by_charles_dickens_segment.docx";
		checkValues(filePath);
	}

	private void checkValues(String filePath) throws Exception {
		InputStream stream = new ClassPathResource(filePath).getInputStream();
		MockMultipartFile file = new MockMultipartFile(filePath, stream);
		Text actual = docProcessorService.process(file, FileType.DOC);

		assertEquals("Marley", actual.getWords().get(0).getInitialValue());
		assertEquals("was", actual.getWords().get(1).getInitialValue());
		assertEquals("dead,", actual.getWords().get(2).getInitialValue());
	}
}
