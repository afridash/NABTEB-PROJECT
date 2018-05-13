package com.nabteb.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	private List<User> users = new ArrayList <> (Arrays.asList(
			new User(2, "Ikuromor", "Mabel", "Ogiriki","08012345576", "Female", "June 12, 2015", "Lugbe, Abuja", "John Doe","Los Angeles","07002345678", "","Bayelsa State", "Nembe")
			)); 
	
	public List<User> getAllUsers () {
		return users;
	}
	public User getUser (int id) {
		return users.stream().filter(u->u.getId() == id).findFirst().get();
	}
	public User createUser (User user) {
		users.add(user);
		return user;
	}
	public User updateUser(User user, int id) {
		User t = users.stream().filter(u->u.getId() == id).findFirst().get();
		int index = users.indexOf(t);
		users.set(index, user);
		return user;
	}
}
