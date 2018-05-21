package com.nabteb.centers;

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
public class CentersController {
	 @Autowired
	private CentersService service;
		
	@GetMapping("/centers")
	public List<Centers> getAllCenters () {
		return service.getAllCenters();
	}
	@PostMapping("/centers")
	public Centers saveCenter(@RequestBody Centers centers) {
		return service.addCenters(centers);
	}
	@GetMapping("/centers/{id}")
	public Centers getCenters (@PathVariable int id) {
		return service.getCenters(id);
	}
	@GetMapping("/centers/owners/{id}")
	public List<Centers> getOwnerCenters (@PathVariable int id){
		return service.getOwnerCenters(id);
	}
	
	@GetMapping("/centers/{id}/update/{status}")
	public void updateCenter(@PathVariable int id, @PathVariable String status) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
		service.updateStatus(id, status);
	}
	
}
