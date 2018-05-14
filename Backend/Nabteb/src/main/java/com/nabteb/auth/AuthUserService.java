package com.nabteb.auth;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import com.nabteb.email.Email;
import com.nabteb.email.EmailService;

import freemarker.core.ParseException;
import freemarker.template.Configuration;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

import java.io.IOException;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
/*
 * @Author Richard Igbiriki
 * TO DO
 * Connect to Entity
 * Perform activities on DB rather than local array
 * Connect Email Service for dispatching pin, reset passwords
 */
import org.springframework.stereotype.Service;

@Service
public class AuthUserService {
	@Autowired
	private Configuration freemarkerConfig;
	@Autowired
	private EmailService emailService;
	
	private List<AuthUser> users = new ArrayList <> (Arrays.asList(
			new AuthUser(1, "imorobebh@gmail.com", "12345678", "candidate","today", false, "123456"),
			new AuthUser(2, "richard@gmail.com", "12345678", "candidate","today", true, "12345"),
			new AuthUser(3, "imoris@gmail.com", "12345678", "candidate","today", false, "12345"),
			new AuthUser(4, "user@gmail.com", "12345678", "center_owner","today", true, "12345")
			)); 
	public AuthUser login (String email, String password) {
		//Find user based on email 
		AuthUser user = users.stream().filter(temp->temp.getEmail().equals(email)).findFirst().get();
		//If password matches, return user
		if (user.getPassword().equals(password)) {
			return user;
		}
		return null;
		
	}
	public AuthUser verifyPin (String id, String pin) {
		int userId = Integer.parseInt(id);
		//Get user given Id
		AuthUser user = users.stream().filter(temp->temp.getId()==userId).findFirst().get();
		//If pin matches that of user found, update user status. Return user
		if (user.getPin().equals(pin)) {
			user.setVerified(true);
			int index = users.indexOf(user);
			users.set(index, user);
			return user;
		}
		return null;
	}
	public AuthUser createUser (AuthUser user) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
		//Create a unique user id (maybe using timestamp + name) 
		Random random = new Random();
		user.setId(random.nextInt());
		//Create a random pin. Send it via email to the user
	    String pin = generateRandomString();
		user.setPin(pin);
		sendUserEmail("Nabteb@localhost", "user@localhost", "Verification Pin",pin, "verification.ftl");
		//Save user
		users.add(user);
		//Add user
		return user;
	}
	private String generateRandomString() {
		SecureRandom secureRandom = new SecureRandom();
	    byte[] token = new byte[6];
	    secureRandom.nextBytes(token);
	    return  new BigInteger(1, token).toString(16);
	}
	private void sendUserEmail(String from, String to, String subject, String pin, String template) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
		 Map<String, Object> model = new HashMap();
	        model.put("user", to);
	        model.put("pin", pin);
	        freemarkerConfig.setClassForTemplateLoading(this.getClass(), "/templates");
	        Template t = freemarkerConfig.getTemplate(template);
	        String text = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
	        Email email = new Email(from, to, subject, text);
	        try {
				emailService.sendEmail(email);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

	public AuthUser resetPassword (String email) {
		//Find user by email
		AuthUser user = users.stream().filter(temp->temp.getEmail().equals(email)).findFirst().get();
		int index = users.indexOf(user);
		String password = generateRandomString();
		//change user password to a random string, email string to user
		user.setPassword(password);
		try {
			sendUserEmail("Nabteb@localhost", "user@localhost", "Password Reset", password, "reset.ftl");
		} catch (IOException | TemplateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//Update user
		users.set(index,user);
		return user;
	}
	public boolean changePassword (String email, String oldPassword, String newPassword) {
		//Find user by email
		AuthUser user = users.stream().filter(temp->temp.getEmail().equals(email)).findFirst().get();
		//If old password is correct, update password to new password
		//Return true if changed, return false if not
		if (user.getPassword().equals(oldPassword)) {
			int index = users.indexOf(user);
			users.set(index, user);
			user.setPassword(newPassword);
			return true;
		}else {
			return false;
		}
	}
}
