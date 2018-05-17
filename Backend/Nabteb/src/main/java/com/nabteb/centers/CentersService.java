package com.nabteb.centers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service

public class CentersService {
	private List <Centers> centers = new ArrayList<>();
	
	public List<Centers> getAllCenters () {
		return centers;
	}
	public void addCenters (Centers newCenter) {
		centers.add(newCenter);
	}
	public Centers getCenters(int id) {
		return centers.stream().filter(user->user.getId() == id).findFirst().get();
	}
}
