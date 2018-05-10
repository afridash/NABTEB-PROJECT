package com.nabteb.auth;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
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
	private List<AuthUser> users = new ArrayList <> (Arrays.asList(
			new AuthUser(1, "imorobebh@gmail.com", "12345678", "candidate","today", false, "123456"),
			new AuthUser(2, "richard@gmail.com", "12345678", "candidate","today", true, "12345"),
			new AuthUser(3, "imoris@gmail.com", "12345678", "candidate","today", false, "12345"),
			new AuthUser(4, "user@gmail.com", "12345678", "candidate","today", true, "12345")
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
	public AuthUser createUser (AuthUser user) {
		//Create a unique user id (maybe using timestamp + name) 
		Random random = new Random();
		user.setId(random.nextInt());
		//Create a random pin. Send it via email to the user
		user.setPin("12345");
		//Save user
		users.add(user);
		//Add user
		return user;
	}
	public AuthUser resetPassword (String email) {
		//Find user by email
		AuthUser user = users.stream().filter(temp->temp.getEmail().equals(email)).findFirst().get();
		int index = users.indexOf(user);
		//change user password to a random string, email string to user
		user.setPassword("1234567890");
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
