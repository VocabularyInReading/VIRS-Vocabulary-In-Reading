package com.vir.service;

import org.springframework.stereotype.Service;
import com.vir.model.EmailMessage;
import com.vir.model.enumerations.EmailResult;
@Service
public interface EmailService
{
    EmailResult sendEmail(EmailMessage emailMessage);
    EmailResult sendExceptionEmail(Throwable t);
}