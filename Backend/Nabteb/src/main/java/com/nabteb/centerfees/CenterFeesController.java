package com.nabteb.centerfees;

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
public class CenterFeesController {
	@Autowired
	private CenterFeesService service;
	
	@GetMapping("/centers/fees")
	public List<CenterFees> getAllFees () {
		return service.getAllFees();
	}
	
	@PostMapping("/centers/fees")
	public void createPayment (@RequestBody CenterFees payment) {
		service.createPayment(payment);
	}
	
	@GetMapping("/centers/fees/{id}")
	public CenterFees getCenterFees (@PathVariable int id) {
		return service.getCenterFees(id);
	}
}
