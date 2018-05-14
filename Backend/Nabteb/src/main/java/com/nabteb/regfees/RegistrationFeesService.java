package com.nabteb.regfees;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class RegistrationFeesService {
	private List<RegistrationFees> fees = new ArrayList<>();
	
	public List<RegistrationFees> getAllFees () {
		return fees;
	}

	public void addFees(RegistrationFees fees2) {
		fees.add(fees2);	
	}

	public RegistrationFees getRegistrationFees(int id) {
		return fees.stream().filter(user->user.getId() == id).findFirst().get();
	}
}
