package com.vir.service.impl;

import org.apache.tika.parser.ocr.TesseractOCRConfig;
import org.springframework.stereotype.Service;

import com.vir.config.TesseractPropertiesConfig.TesseractProperties;

@Service
public class TesseractConfigurationService
{	
	private final TesseractProperties tesseractProperties;
	public TesseractConfigurationService(TesseractProperties tesseractProperties)
	{
		this.tesseractProperties = tesseractProperties;
	}

	public TesseractOCRConfig getConfig() {
		TesseractOCRConfig config = new TesseractOCRConfig();
		config.setTessdataPath(tesseractProperties.tessdataPrefix);
		config.setTesseractPath(tesseractProperties.tesseractPath);
		config.setEnableImageProcessing(1);
		return config;
	}
}
