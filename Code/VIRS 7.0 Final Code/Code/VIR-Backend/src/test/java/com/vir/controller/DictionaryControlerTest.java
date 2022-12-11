package com.vir.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.vir.ControllerDevTest;

@RunWith(SpringRunner.class)
@ControllerDevTest
public class DictionaryControlerTest {

	// @formatter:off
	
	@Autowired
	private MockMvc mockMvc;

	@Ignore
	@Test
	public void getEntry_Endpoint_Returns200Ok() throws Exception {
		final String url = "/api/entries/apple?source=WIKI";
		
		mockMvc.perform(get(url))
			.andDo(print())
			.andExpect(status().isOk());
	}
	// @formatter:on
}
