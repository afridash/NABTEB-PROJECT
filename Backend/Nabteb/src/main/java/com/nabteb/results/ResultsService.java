package com.nabteb.results;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nabteb.auth.AuthUser;
import com.nabteb.auth.AuthUserService;

import freemarker.core.ParseException;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

@Service
public class ResultsService {
	@Autowired 
	private AuthUserService service;
	private List<Results> results = new ArrayList<>();
	
	public List<Results> getAllResults () {
		return results;
	}
	
	public Results getResult (int id) {
		return results.stream().filter(r->r.getId() == id).findFirst().get();
	}
	
	public void addResult (Results result) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
		results.add(result);
		AuthUser user = service.getUserEmail(result.getId());
		service.sendUserEmail("Nabteb@localhost", user.getEmail(), "Result Status", user.getEmail(), "results.ftl");
	}
	
}
