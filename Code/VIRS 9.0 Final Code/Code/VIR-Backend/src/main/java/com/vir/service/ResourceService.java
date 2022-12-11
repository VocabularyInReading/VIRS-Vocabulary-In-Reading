package com.vir.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface ResourceService {

	public Resource get();

	public Boolean save(MultipartFile file, Boolean replace) throws Exception;
}
