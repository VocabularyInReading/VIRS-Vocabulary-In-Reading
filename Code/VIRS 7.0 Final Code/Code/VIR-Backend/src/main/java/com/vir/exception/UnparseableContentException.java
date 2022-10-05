package com.vir.exception;

import org.springframework.web.HttpMediaTypeNotSupportedException;

public class UnparseableContentException extends HttpMediaTypeNotSupportedException {

	private static final long serialVersionUID = 1L;

	public UnparseableContentException(String message) {
		super(message);
	}
}
