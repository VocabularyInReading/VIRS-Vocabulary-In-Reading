package com.vir.service.impl.email;

import com.vir.service.EmailService;
import org.springframework.stereotype.Service;
import com.vir.model.EmailMessage;
import com.sendgrid.*;
import java.io.IOException;
import java.util.Map;

import com.vir.model.enumerations.EmailResult;

/*
@Autowired
@Qualifier("sendGridEmailService")
*/
import java.io.PrintWriter;
import java.io.StringWriter;

// import java.util.Map;
import com.vir.model.enumerations.EmailResult;

@Service("sendGridEmailService")
public class SendGridEmailService implements EmailService
{
    static final String SEND_GRID_API_ENVIRNOMENT_KEY = "SENDGRID_API_KEY";
    public void setSandBoxMode(Mail mail)
    {
        //if we're not in debug, then we won't be sending an email
        String prodEnvironmentVariable = System.getenv("PROD");
        boolean production = "1".equals(prodEnvironmentVariable);
        if(production) return;
        
        MailSettings mailSettings = new MailSettings();
        Setting sandBoxMode = new Setting();
        sandBoxMode.setEnable(true);
        mailSettings.setSandboxMode(sandBoxMode);
        mail.setMailSettings(mailSettings);
    }
    @Override
    public EmailResult sendEmail(EmailMessage emailMessage)
    {
        try
        {
            //taken from https://sendgrid.com/docs/for-developers/sending-email/v3-java-code-example/#using-sendgrids-java-library
            Email from = new Email(emailMessage.getFrom());
            String subject = emailMessage.getSubject();
            Email to = new Email(emailMessage.getTo());
            String contentType = emailMessage.getHtml() ? "text/html" : "text/plain";
            Content content = new Content(contentType, emailMessage.getBody());
            Mail mail = new Mail(from, subject, to, content);
            this.setSandBoxMode(mail);

            SendGrid sg = new SendGrid(System.getenv(SendGridEmailService.SEND_GRID_API_ENVIRNOMENT_KEY));
            Request request = new Request();
            //More options at: https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            
            Response response = sg.api(request);
            int statusCode = response.getStatusCode();
            String body = response.getBody();
            Map<String, String> headers = response.getHeaders();
            // String body = response.getBody();
            // Map<String, String> headers = response.getHeaders();
            boolean success = statusCode >= 200 && statusCode <= 299;

            return success ? EmailResult.SUCCESS : EmailResult.ERROR;
            //response codes: https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/errors.html
        }//try
        catch (IOException ex)
        {
            return EmailResult.ERROR;
            //TODO:we should add some logging into the db
        }//catch IOException
        catch(Throwable ex)
        {
            return EmailResult.ERROR;
            //TODO:we should add some logging into the db
        }//catch Exception

    }
    @Override
    public EmailResult sendExceptionEmail(Throwable t)
    {
        String stackTrace;
        //try to get the full stack trace
        try
        (
            StringWriter sw = new StringWriter();
            PrintWriter pw = new PrintWriter(sw);
        )
        {
            t.printStackTrace(pw);
            stackTrace = sw + ""; // stack trace as a string
        }//try
        catch(Throwable er)
        {
            stackTrace = t + "";
        }//catch
        String body = String.format("<h2>There was an application error</h2><p>%s: %s</p><p>%s</p>", t.getClass().getSimpleName(), t.getMessage(), stackTrace.replace(("\n"), "<br/>"));
        EmailMessage emailMessage = new EmailMessage();
        String from = "do-not-reply@myvirs.com";
        emailMessage.setFrom(from);
        String to = "vocabinreading@gmail.com";
        emailMessage.setTo(to);
        String sub = "Vocabulay In Reading Application Error";
        emailMessage.setSubject(sub);
        emailMessage.setBody(body);
        emailMessage.setHtml(true);
        EmailResult er = this.sendEmail(emailMessage);

        System.err.println(String.format("From:\t%s\nTo:\t%s\nSubject:\t%s\nBody:\t%s", from, to, sub, body));

        return er;
    }
}