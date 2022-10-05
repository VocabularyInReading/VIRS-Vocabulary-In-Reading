package com.vir.service.impl.processor;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.vir.exception.UnsupportedFileException;
import com.vir.model.FileType;
import com.vir.model.Text;
import com.vir.service.FileProcessorService;

@Service("simpleFileProcessorService")
public class SimpleFileProcessorService implements FileProcessorService
{
	private final FileProcessorService pdfProcessorService;
	private final FileProcessorService docProcessorService;
	private final FileProcessorService imgProcessorService;

	public SimpleFileProcessorService
	(
		@Qualifier("pdfProcessorService")
		FileProcessorService pdfProcessorService
		, @Qualifier("docProcessorService")
		FileProcessorService docProcessorService
		, @Qualifier("imgProcessorService")
		FileProcessorService imgProcessorService
	)
	{
		this.pdfProcessorService = pdfProcessorService;
		this.docProcessorService = docProcessorService;
		this.imgProcessorService = imgProcessorService;
	}

	@Override
	public Text process(MultipartFile file, FileType type) throws Exception {

		switch (type) {
		case PDF:
			return pdfProcessorService.process(file, type);
		case DOC:
			return docProcessorService.process(file, type);
		case IMG:
			return imgProcessorService.process(file, type);
		default:
			throw new UnsupportedFileException(type.toString());
		}
	}
}
