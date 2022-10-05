package com.vir.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
public class AngularRedirectControllerTest {

	// @formatter:off
	
	@Autowired
	private MockMvc mockMvc;

	@Ignore
	@Test
	public void redirectToHome_WithAnUnknownAPI_RedirectsToHome() throws Exception {
		final String url = "/an-a";
		mockMvc.perform(get(url))
			.andExpect(status().isOk());
		
	}
	// @formatter:on
}
