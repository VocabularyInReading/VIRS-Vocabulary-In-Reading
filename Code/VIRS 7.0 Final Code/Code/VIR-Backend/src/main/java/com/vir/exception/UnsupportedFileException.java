package com.vir.exception;

import org.springframework.web.HttpMediaTypeNotSupportedException;

public class UnsupportedFileException extends HttpMediaTypeNotSupportedException {

	private static final long serialVersionUID = 1L;

	public UnsupportedFileException(String message) {
		super(message);
	}
}
