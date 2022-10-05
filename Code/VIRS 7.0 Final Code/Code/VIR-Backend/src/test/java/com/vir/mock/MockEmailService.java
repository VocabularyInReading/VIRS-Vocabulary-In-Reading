package com.vir.mock;

import com.vir.model.EmailMessage;
import com.vir.model.enumerations.EmailResult;
import com.vir.service.EmailService;

public class MockEmailService implements EmailService {

    @Override
    public EmailResult sendEmail(EmailMessage emailMessage) {
        return EmailResult.SUCCESS;
    }

    @Override
    public EmailResult sendExceptionEmail(Throwable t) {
        return EmailResult.SUCCESS;
    }

}