package com.nabteb.registered;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegisteredController {
	@Autowired 
	private RegisteredService service;
	
	@GetMapping("/registered")
	public List<Registered> getAllRegistered(){
		return service.getAllRegistered();
	}
	@PostMapping("/registered")
	public Registered saveRegistered(@RequestBody Registered user) {
		return service.saveRegistered(user);
	}
	@GetMapping("/registered/{id}")
	public Registered getRegistered(@PathVariable int id) {
		return service.getRegistered(id);
	}
}
