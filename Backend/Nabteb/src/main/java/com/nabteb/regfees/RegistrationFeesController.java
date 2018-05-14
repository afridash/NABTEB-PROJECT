package com.nabteb.regfees;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RegistrationFeesController {
	@Autowired
	private RegistrationFeesService service;
	
	@GetMapping("/registration/fees")
	public List<RegistrationFees> getAllFees () {
		return service.getAllFees();
	}
	@PostMapping("/registration/fees")
	public void saveFees(@RequestBody RegistrationFees fees) {
		service.addFees(fees);
	}
	@GetMapping("/registration/fees/{id}")
	public RegistrationFees getRegistrationFees (@PathVariable int id) {
		return service.getRegistrationFees(id);
	}
}
