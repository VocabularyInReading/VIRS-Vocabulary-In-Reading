package com.vir.service.impl;

import static org.junit.Assert.assertEquals;

import java.io.InputStream;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.opencv.core.Mat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.test.context.junit4.SpringRunner;

import com.vir.GeneralDevTest;
import com.vir.helpers.IOHelper;

@RunWith(SpringRunner.class)
@GeneralDevTest
public class OcrOptimizerServiceTest {
	
	@Autowired
	private OcrOptimizerService ocrOptimizerService;

	@Ignore
	@Test
	public void convertToGreyScale_withAColorImage_returnsImageInGreyScale() throws Exception {
		
		final String filePath= "ocr_optimizer/color_image.jpg";
		InputStream stream = new ClassPathResource(filePath).getInputStream();
		Mat image = IOHelper.inputStreamToMat(stream);
		
		Mat grey = ocrOptimizerService.convertToGreyScaleTess(image, "jpg");
		assertEquals(1, grey.channels());
	}
}
