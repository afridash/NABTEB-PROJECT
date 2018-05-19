package com.nabteb.resultfees;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ResultFeesService {
	private List<ResultFees> fees = new ArrayList<>();
	
	public List<ResultFees> getAllFees () {
		return fees;
	}

	public void addFees(ResultFees fees2) {
		fees.add(fees2);	
	}

	public ResultFees getResultFees(int id) {
		return fees.stream().filter(user->user.getId() == id).findFirst().get();
	}

	public void updateViews(int id, int count) {
		ResultFees fee =  fees.stream().filter(user->user.getId() == id).findFirst().get();
		int index = fees.indexOf(fee);
		fees.remove(index);
		fee.setViews(count);
		fees.add(index, fee);
		
	}
}
