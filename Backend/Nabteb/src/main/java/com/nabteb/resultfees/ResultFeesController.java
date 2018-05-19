package com.nabteb.resultfees;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
public class ResultFeesController {
	@Autowired 
	private ResultFeesService service;
	
	@GetMapping("/result/fees")
	public List<ResultFees> getAllFees () {
		return service.getAllFees();
	}
	@PostMapping("/result/fees")
	public void saveFees(@RequestBody ResultFees fees) {
		service.addFees(fees);
	}
	@GetMapping("/result/fees/{id}")
	public ResultFees getResultFees (@PathVariable int id) {
		return service.getResultFees(id);
	}
	@PutMapping("/result/fees/update/{id}/{count}")
	public void updateViews(@PathVariable int id, @PathVariable int count) {
		service.updateViews(id, count);
	}
}
