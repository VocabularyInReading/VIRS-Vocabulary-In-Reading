package com.vir.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.vir.exception.ApiError;
import com.vir.model.EmailMessage;
import com.vir.model.FileType;
import com.vir.model.Text;
import com.vir.service.EmailService;
import com.vir.service.FileProcessorService;
import com.vir.service.TextProcessorService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * Main controller for the Analyzer.
 * 
 * @author Alfredo Lopez
 *
 */
@RestController
@RequestMapping("/api")
@Api(tags = "analyzer")
public class AnalyzerController
{
	private final TextProcessorService textProcessorService;

	private final FileProcessorService fileProcessorService;
	private final EmailService emailService;

	private final Logger LOGGER = LoggerFactory.getLogger(AnalyzerController.class);

	public AnalyzerController
	(
		@Qualifier("optimizedTextProcessorService")
		TextProcessorService textProcessorService
		, @Qualifier("simpleFileProcessorService")
		FileProcessorService fileProcessorService
		, EmailService emailService
	)
	{
		this.textProcessorService = textProcessorService;
		this.fileProcessorService = fileProcessorService;
		this.emailService = emailService;
	}

	@ApiOperation(value = "Analyzes text input")
	@ApiResponse(code = 400, message = "Generic error", response = ApiError.class)
	@PostMapping(value = "/analyzeText", produces = MediaType.APPLICATION_JSON_VALUE)
	public Text analizeText(@RequestBody(required = true) String text) {
		LOGGER.info("Attempting to process plain text.");
		Text result = textProcessorService.process(text);
		LOGGER.info("Finished processing plain text.");
		return result;
	}

	@ApiOperation(value = "Analyzes a file input.")
	@ApiResponses(value = { 
			@ApiResponse(code = 400, message = "Generic error", response = ApiError.class),
			@ApiResponse(code = 415, message = "Unsupported media type", response = ApiError.class),
			@ApiResponse(code = 406, message = "The content from the file cannot be parsed", response = ApiError.class),
			@ApiResponse(code = 422, message = "Page limit exeeded", response = ApiError.class)
			})
	@PostMapping(value = "/analyzeFile", produces = MediaType.APPLICATION_JSON_VALUE)
	public Text analize(@RequestParam(name = "file", required = true) MultipartFile file,
			@RequestParam(name = "type", required = true) FileType type)
			throws Exception
	{
		LOGGER.info("Attempting to process {} file", type);
		Text result = fileProcessorService.process(file, type);
		LOGGER.info("Finished processing {} file", type);
		return result;
	}
}