package com.vir.service.impl;


import com.vir.service.SendEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 * Created by ups on 11/10/18.
 */

@Configuration
public class SendEmail  implements SendEmailService{

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${email.from}")
    private String from;

    @Value("${email.url.recovery}")
    private String urlRecovery;


    public SendEmail() {
    }

    @Override
    public void sendEmail(String email, String token)
    {
        try {
            String url = urlRecovery.replace("{token}", token);
            String urlLink = String.format("<a href='%s'>click here</a>", url);
            MimeMessage msg = javaMailSender.createMimeMessage();
            MimeMessageHelper message = new MimeMessageHelper(msg);
            message.setSubject("myvirs.com - Change Password");
            message.setTo(email);
            message.setFrom(this.from);
            final boolean HTML = true;
            String body = String.format("Please %s to reset your account password at <a href='http://myvir.com'>myvir.com</a>. You can also copy and paste the address below to your browser:<br/>%s", urlLink, url);
            message.setText(body, HTML);
            System.out.println("OKOKOK okok ");
            javaMailSender.send(msg);
            System.out.println("OKOKOK okok ");
        } catch (Exception e) {
            System.out.println("[ERROR] - " + e.getMessage());
        }
    }

}
