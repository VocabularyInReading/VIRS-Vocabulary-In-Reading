package com.vir.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.vir.model.FileType;
import com.vir.model.Text;

/**
 * Main service used when processing a file.
 * 
 * @author Alfredo Lopez
 *
 */
@Service
public interface FileProcessorService {
	public Text process(MultipartFile file, FileType type) throws Exception;
}
