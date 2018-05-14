package com.nabteb.progress;

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
public class ProgressController {
	@Autowired 
	private ProgressService service;
	
	@RequestMapping("/progress")
	public List<Progress> getAllProgress(){
		return service.getAllProgress();
	}
	@RequestMapping(method=RequestMethod.POST, value="/progress")
	public void createProgress (@RequestBody Progress progress) {
		service.createProgress(progress);
	}
	@RequestMapping("/progress/{id}")
	public Progress getProgress(@PathVariable int id) {
		return service.getProgress(id);
	}
	@RequestMapping(method=RequestMethod.PUT, value="/progress/{id}")
	public void updateProgress(@RequestBody Progress progress, @PathVariable int id) {
		 service.updateProgress(progress, id);
	}
	
}
