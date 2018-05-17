/*
 * @Author Richard Igbiriki
 */
package com.nabteb.centerfees;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CenterFeesService {
	private List<CenterFees> fees = new ArrayList<>();
	
	public List<CenterFees> getAllFees () {
		return fees;
	}

	public void createPayment(CenterFees payment) {
		fees.add(payment);
	}
	
	public CenterFees getCenterFees(int id) {
		return fees.stream().filter(u->u.getId() == id).findFirst().get();
	}
}
