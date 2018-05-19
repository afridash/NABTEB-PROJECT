package com.nabteb.results;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ResultsService {
	private List<Results> results = new ArrayList<>();
	
	public List<Results> getAllResults () {
		return results;
	}
	
	public Results getResult (int id) {
		return results.stream().filter(r->r.getId() == id).findFirst().get();
	}
	
	public void addResult (Results result) {
		results.add(result);
	}
	
}
