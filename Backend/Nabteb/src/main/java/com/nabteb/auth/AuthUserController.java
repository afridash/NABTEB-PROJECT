package com.nabteb.auth;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import freemarker.core.ParseException;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthUserController {
	@Autowired
	private AuthUserService userService;
	
	@RequestMapping("/login/{email}/{password}")
	public AuthUser login (@PathVariable String email, @PathVariable String password){
	 return userService.login(email, password);
	}
	@RequestMapping("/verify/{id}/{pin}")
	public AuthUser verifyPin (@PathVariable String id, @PathVariable String pin) {
	return userService.verifyPin(id, pin);
	}
	@RequestMapping(method=RequestMethod.POST, value="/users/create")
	public AuthUser createUser(@RequestBody AuthUser user) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
		return userService.createUser(user);
	}
	@RequestMapping("/reset_password/{email}")
	public AuthUser resetEmail (@PathVariable String email) {
		return userService.resetPassword(email);
	}
	@RequestMapping("/change_password/{email}/{oldPassword}/{newPassword}")
	public Map<String, Object> changePassword (@PathVariable String email, @PathVariable String oldPassword, @PathVariable String newPassword) {
		boolean response = userService.changePassword(email, oldPassword, newPassword);
		Map<String, Object>res;
		res = new HashMap<String, Object>();
		if (response) {
	        res.put("changed",true);
		}else {
			res.put("changed",false);
		}
		return res;
	}
}
