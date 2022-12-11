package com.vir.service.impl.email;

import static org.junit.Assert.assertEquals;

import java.util.Map;
// import java.util.Map;

import com.vir.GeneralDevTest;
import com.vir.model.EmailMessage;
import com.vir.model.enumerations.EmailResult;
import com.vir.service.EmailService;

import org.junit.Ignore;
import org.junit.Test;

@GeneralDevTest
public class SendGridEmailServiceTest
{
    EmailService emailService;
    public SendGridEmailServiceTest()
    {
        this.emailService = new SendGridEmailService();
    }

    @Ignore
    @Test
    public void sendEmailTest()
    {
        EmailMessage msg = new EmailMessage();
        EmailResult result = this.emailService.sendEmail(msg);
        assertEquals(EmailResult.ERROR, result);

        String from = "do-not-reply@myvirs.com";
        String to = "vocabinreading@gmail.com";
        String subject = "myvirs.com SendGrid test email";
        String body = "Testing myvirs.com email service with SendGrid";
        boolean html = true;
        msg = new EmailMessage(from, to, subject, body, html);
        result = this.emailService.sendEmail(msg);
        assertEquals(EmailResult.SUCCESS, result);
    }
}