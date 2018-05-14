package com.nabteb.email;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	@Autowired
  	private JavaMailSender sender;
	
    public void sendEmail(Email params) throws Exception{
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
       
        helper.setFrom(params.getFrom());
        helper.setReplyTo(params.getFrom());
        helper.setTo(params.getTo());
        helper.setText(params.getMessage(),true);
        helper.setSubject(params.getSubject());
        sender.send(message);
    }
}
