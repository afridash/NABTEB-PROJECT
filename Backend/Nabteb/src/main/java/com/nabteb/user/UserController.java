package com.nabteb.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping("/users")
	public List<User> getAllUsers () {
		return userService.getAllUsers();
	}
	@RequestMapping("/users/{id}")
	public User getUser(@PathVariable int id ) {
		return userService.getUser(id);
	}
	@RequestMapping(method=RequestMethod.POST, value="/users")
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	@RequestMapping(method=RequestMethod.PUT, value="/users/{id}")
	public User updateUser(@RequestBody User user, @PathVariable int id) {
		return userService.updateUser(user, id);
	}
}
