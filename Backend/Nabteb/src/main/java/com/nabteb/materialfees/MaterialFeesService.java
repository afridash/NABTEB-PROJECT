package com.nabteb.materialfees;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class MaterialFeesService {
	private List<MaterialFees> fees = new ArrayList<>();
	
	public List<MaterialFees> getAllFees () {
		return fees;
	}

	public void addFees(MaterialFees fees2) {
		fees.add(fees2);	
	}

	public MaterialFees getResultFees(int id) {
		return fees.stream().filter(user->user.getId() == id).findFirst().get();
	}
}
