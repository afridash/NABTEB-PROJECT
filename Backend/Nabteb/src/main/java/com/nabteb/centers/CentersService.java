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
	public Centers addCenters (Centers newCenter) {
		centers.add(newCenter);
		return newCenter;
	}
	public Centers getCenters(int id) {
		return centers.stream().filter(user->user.getId() == id).findFirst().get();
	}
	public List<Centers> getOwnerCenters(int id) {
		List<Centers> tmp = new ArrayList<>(); 
		for (int i=0; i<centers.size(); i++) {
			if (getAllCenters().get(i).getOwnerId() == id) {
				tmp.add(getAllCenters().get(i));
			}
		}
		return tmp;
	}
	public void updateStatus(int id, String status) {
		Centers c = centers.stream().filter(cen->cen.getId() == id).findFirst().get();
		int index = centers.indexOf(c);
		c.setStatus(status);
		centers.set(index, c);
		
	}
}
