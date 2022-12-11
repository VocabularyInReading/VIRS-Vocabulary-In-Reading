package com.vir.exception;

public class HeaderMalformattedError extends Exception {

	private static final long serialVersionUID = 1L;

	public HeaderMalformattedError(String message) {
		super(message);
	}
}
