/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nabteb.examseries;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
/**
 *
 * @author darlynton
 */

public class ExamSeriesService {
    private final List<ExamSeries> examseries = new ArrayList <> (Arrays.asList(
			new ExamSeries(1, 2, "3", false, "May-June 2018", "mabel")
			)); 
	
	public List<ExamSeries> getAllExams () {
		return examseries;
	}
	public ExamSeries getExam (int id) {
		return examseries.stream().filter(u->u.getId() == id).findFirst().get();
	}
	public ExamSeries createExam (ExamSeries exam) {
		examseries.add(exam);
		return exam;
	}
	public ExamSeries updateExam(ExamSeries exam, int id) {
		ExamSeries x = examseries.stream().filter(u->u.getId() == id).findFirst().get();
		int index = examseries.indexOf(x);
		examseries.set(index, exam);
		return exam;
	}
        public ExamSeries deleteExam(ExamSeries exam, int id) {
		ExamSeries y = examseries.stream().filter(u->u.getId() == id).findFirst().get();
		int index = examseries.indexOf(y);
         examseries.remove(index);
		return exam;
	}
}
