package com.nabteb.results;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import freemarker.core.ParseException;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ResultsController {
	@Autowired 
	private ResultsService service;
	
	@GetMapping("/users/results")
	public List<Results> getAlResults () {
		return service.getAllResults();
	}
	@GetMapping("/users/results/{id}")
	public Results getResult (@PathVariable int id) {
		return service.getResult(id);
	}
	@PostMapping("/users/results/create")
	public void addResult (@RequestBody Results res) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
		service.addResult(res);
	}
}
