package com.vir.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.fileUpload;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.vir.ControllerDevTest;


@RunWith(SpringRunner.class)
@ControllerDevTest
public class AnalizerControlerTest {

	// @formatter:off
	
	@Autowired
	private MockMvc mockMvc;

	@Ignore
	@Test
	public void analizeText_Endpoint_Returns200Ok() throws Exception {
		final String url = "/api/analyzeText";
		final String word = "test";
		final String expected = "{\"words\":[{\"value\":\"test\",\"category\":\"hi\",\"initialValue\":\"test\"}]}";
		mockMvc.perform(post(url).content(word))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
			.andExpect(content().json(expected));
	}

	@Ignore
	@Test
	public void analizePdf_Endpoint_Returns200Ok() throws Exception {
		final String url = "/api/analyzeFile?type=PDF";
		final MockMultipartFile file = new MockMultipartFile("file", "myFile.txt", "text/plain", "hello".getBytes());
		mockMvc.perform(
				fileUpload(url)
				.file(file))
			.andDo(print())
			.andExpect(status().isOk());
	}
	// @formatter:on
}
