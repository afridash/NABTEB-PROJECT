package com.nabteb.registered;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class RegisteredService {
	private List<Registered> users = new ArrayList<>();
	
	public List<Registered> getAllRegistered (){
		return users;
	}
	
	public Registered saveRegistered (Registered user) {
		users.add(user);
		return user;
	}
	
	public Registered getRegistered (int id) {
		return users.stream().filter(u->u.getId() == id).findFirst().get();
	}
}
