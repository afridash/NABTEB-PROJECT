package com.nabteb.materialfees;

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
public class MaterialFeesController {
	@Autowired 
	private MaterialFeesService service;
	
	@GetMapping("/materials/fees")
	public List<MaterialFees> getAllFees () {
		return service.getAllFees();
	}
	@PostMapping("/materials/fees")
	public void saveFees(@RequestBody MaterialFees fees) {
		service.addFees(fees);
	}
	@GetMapping("/materials/fees/{id}")
	public MaterialFees getResultFees (@PathVariable int id) {
		return service.getResultFees(id);
	}
}
