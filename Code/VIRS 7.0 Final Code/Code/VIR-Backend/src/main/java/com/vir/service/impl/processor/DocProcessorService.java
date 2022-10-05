package com.vir.service.impl.processor;

import java.io.InputStream;

import org.apache.commons.lang3.StringUtils;
import org.apache.tika.io.TikaInputStream;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.AutoDetectParser;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.parser.Parser;
import org.apache.tika.sax.BodyContentHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.vir.exception.UnparseableContentException;
import com.vir.model.FileType;
import com.vir.model.Text;
import com.vir.service.FileProcessorService;
import com.vir.service.TextProcessorService;

@Service("docProcessorService")
public class DocProcessorService implements FileProcessorService
{
	private final TextProcessorService textProcessorService;
	private final Logger LOGGER = LoggerFactory.getLogger(DocProcessorService.class);

	public DocProcessorService
	(
		@Qualifier("optimizedTextProcessorService")
		TextProcessorService textProcessorService
	)
	{
		this.textProcessorService = textProcessorService;
	}

	@Override
	public Text process(MultipartFile file, FileType type) throws Exception {
		LOGGER.info("Attempting to extract text from a {} file.", type);
		Parser parser = new AutoDetectParser();
		BodyContentHandler handler = new BodyContentHandler(Integer.MAX_VALUE);
		ParseContext parseContext = new ParseContext();

		try (InputStream stream = file.getInputStream();
				TikaInputStream tikaStream = TikaInputStream.get(stream)) {
			
			parser.parse(tikaStream, handler, new Metadata(), parseContext);
			
			if (StringUtils.isEmpty(handler.toString().trim())) {
				throw new UnparseableContentException("Could not parse the file.");
			}
			LOGGER.info("Finished extracting text from a {} file.", type);
			return textProcessorService.process(handler.toString());
		}
	}
}
