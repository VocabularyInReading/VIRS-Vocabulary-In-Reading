package com.vir.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * Created by ups on 11/10/18.
 */
@Service
public interface SendEmailService {

    public void sendEmail(String email, String token);

}
