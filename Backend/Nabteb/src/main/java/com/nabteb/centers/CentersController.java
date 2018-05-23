package com.nabteb.centers;

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
public class CentersController {
	 @Autowired
		private CentersService service;
		
		@GetMapping("/centers")
		public List<Centers> getAllCenters () {
			return service.getAllCenters();
		}
		@PostMapping("/centers")
		public void saveFees(@RequestBody Centers centers) {
			service.addCenters(centers);
		}
		@GetMapping("/centers/service/{id}")
		public Centers getCenters (@PathVariable int id) {
			return service.getCenters(id);
		}
	
}
