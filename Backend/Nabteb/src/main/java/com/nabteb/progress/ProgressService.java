package com.nabteb.progress;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProgressService {
	private List<Progress> users = new ArrayList <> (Arrays.asList(
			new Progress(2, false,false,false,false,false)
			));
	
	public List<Progress> getAllProgress () {
		return users;
	}
	public void createProgress (Progress progress) {
		users.add(progress);
	}
	public Progress getProgress(int id) {
		return users.stream().filter(u->u.getId()==id).findFirst().get();
	}
	public void updateProgress(Progress progress, int id) {
		Progress temp = users.stream().filter(u->u.getId()==id).findFirst().get();
		int index = users.indexOf(temp);
		users.set(index, progress);
	}
}
