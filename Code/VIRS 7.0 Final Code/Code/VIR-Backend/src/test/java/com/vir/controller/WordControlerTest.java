package com.vir.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.vir.ControllerDevTest;

@RunWith(SpringRunner.class)
@ControllerDevTest
public class WordControlerTest {

	// @formatter:off
	
	@Autowired
	private MockMvc mockMvc;

	@Ignore
	@Test
	public void findAll_Endpoint_Returns200Ok() throws Exception {
		final String url = "/api/words?category=awl&size=20&sortKey=value&sortDirection=ASC";
		
		mockMvc.perform(get(url))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE));
	}
	
	// @formatter:on
}
