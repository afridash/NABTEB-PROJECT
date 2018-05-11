/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nabteb.exam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 *
 * @author Gbarane-David
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserExamController {
    
    @Autowired
    private UserExamService userExamService;
    //Create a new record
    @RequestMapping(method = POST, value = "/users/exams")
    public UserExamInfo post( @RequestBody UserExamInfo userExamInfoObject) {
        return userExamService.saveUserExamDetails(userExamInfoObject);
    }
    //Get all records
    @RequestMapping("/users/exams")
    public List<UserExamInfo> listAllSavedExamRecords() {
        return userExamService.getUserExamInfoList();
    }
    //Get specific record
    @RequestMapping("/users/exams/{id}")
    public UserExamInfo listSpecificSavedExamRecords(@PathVariable int id) {
        return userExamService.retrieveSpecificUser(id);
    }
    //Update a record
    @RequestMapping(method = PUT, value = "/users/exams/{id}")
    public Map<String, Object> put(@RequestBody UserExamInfo userExamInfoObject) {
        String status = userExamService.updateUserInfo(userExamInfoObject);
        Map<String, Object> reply = new HashMap<>();
        reply.put("Status",status);
        return reply;
    }
    
}
