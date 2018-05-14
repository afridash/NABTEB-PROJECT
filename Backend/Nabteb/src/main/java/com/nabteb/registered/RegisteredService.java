package com.nabteb.registered;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import com.nabteb.email.Email;
import com.nabteb.email.EmailService;

import freemarker.core.ParseException;
import freemarker.template.Configuration;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

@Service
public class RegisteredService {
	@Autowired
	private Configuration freemarkerConfig;
	@Autowired
	private EmailService emailService;
	private List<Registered> users = new ArrayList<>();
	
	public List<Registered> getAllRegistered (){
		return users;
	}
	
	public Registered saveRegistered (Registered user) {
		users.add(user);
		try {
			sendUserEmail("Nabteb@localhost", "user@localhost", "Registration Status", user.getFullName(),  "confirmation.ftl");
		} catch (IOException | TemplateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}
	private void sendUserEmail(String from, String to, String subject, String user, String template) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
		 Map<String, Object> model = new HashMap();
	        model.put("user", user);
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
	
	public Registered getRegistered (int id) {
		return users.stream().filter(u->u.getId() == id).findFirst().get();
	}
}
