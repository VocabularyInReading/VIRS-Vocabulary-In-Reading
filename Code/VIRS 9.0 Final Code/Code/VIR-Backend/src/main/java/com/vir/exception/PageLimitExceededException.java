package com.vir.exception;

public class PageLimitExceededException extends Exception {

	private static final long serialVersionUID = 1L;

	public PageLimitExceededException(String message) {
		super(message);
	}
}
