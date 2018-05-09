package com.nabteb.hello;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {

		@RequestMapping("/login/{username}/{password}")
		public ArrayList<String> sayHi(@PathVariable String username, @PathVariable String password) {
			ArrayList<String> responseList= new ArrayList<String>();
			if (password.equals("password") && username.equals("Richard")) {
				String val1 = "success";
				responseList.add(val1);
			return responseList;
			}else {
				String val1 = "error";
				responseList.add(val1);
					return responseList;
			}
		}
}
