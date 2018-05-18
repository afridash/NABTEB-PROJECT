/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nabteb.examseries;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import freemarker.core.ParseException;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;
/**
 *
 * @author darlynton
 */

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ExamSeriesController {
    @Autowired
    private ExamSeriesService examSeriesService;
    //Create a new exam series
    @RequestMapping(method=RequestMethod.POST, value="/examseries/create")
    public ExamSeries createExamSeries(@RequestBody ExamSeries exam) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
	return examSeriesService.createExam(exam);
    }
    //Delete a specific exam series 
    @RequestMapping(method=RequestMethod.DELETE, value="/examseries/delete/{id}")
    public ExamSeries deleteExamSeries(@RequestBody ExamSeries exam, @PathVariable int id) throws TemplateNotFoundException, TemplateException, MalformedTemplateNameException, ParseException, IOException {
        return examSeriesService.deleteExam(exam, id);
    }
    //Get a list of all exam series available
    @RequestMapping("/examseries")
    public List<ExamSeries> getExamSeries() {
        return examSeriesService.getAllExams();
    }
    //Get a specific exam series
    @RequestMapping(method=RequestMethod.GET, value="/examseries/{id}")
    public ExamSeries getExamSeries(@PathVariable int id) {
        return examSeriesService.getExam(id);
    }
    //Update a specific exam series
    @RequestMapping(method=RequestMethod.PUT, value = "/examseries/{id}")
    public ExamSeries updateExamSeries(@RequestBody ExamSeries exam, @PathVariable int id) throws TemplateNotFoundException, TemplateException, MalformedTemplateNameException, ParseException, IOException {
        return examSeriesService.updateExam(exam, id);
    }
}
