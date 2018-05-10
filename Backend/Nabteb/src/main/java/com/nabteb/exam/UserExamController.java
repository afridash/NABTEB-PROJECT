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
 * @author Gbarane-Davd
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/examrest")
public class UserExamController {
    
    @Autowired
    private UserExamService userExamService;
    
    @RequestMapping("/save_exam_details/{id}/{state}/{localGovernment}/{examCenter}/{examType}/{examTitle}")
	public Map<String, Object> save_exam_details (@PathVariable String id,@PathVariable String state, @PathVariable String localGovernment, @PathVariable String examCenter,@PathVariable String examType, @PathVariable String examTitle) {
		
            UserExamInfo userExamInfoObject = new UserExamInfo();
            userExamInfoObject.setId(id);
            userExamInfoObject.setExamCenter(examCenter);
            userExamInfoObject.setExamTitle(examTitle);
            userExamInfoObject.setExamType(examType);
            userExamInfoObject.setLocalGovernment(localGovernment);
            userExamInfoObject.setState(state);
            
            userExamService.saveUserExamDetails(userExamInfoObject);
            
            Map<String, Object> reply = new HashMap<>();
            reply.put("Status","saved");
		return reply;
	}
    //This method expects a JSON MAPPED according to the structure of UserExamInfo class 
    // as a RequestBody
    @RequestMapping(value = "/register_exam_details/", method = POST)
    public Map<String, Object> post( @RequestBody UserExamInfo userExamInfoObject) {
        
        userExamService.saveUserExamDetails(userExamInfoObject);
        Map<String, Object> reply = new HashMap<>();
            reply.put("Status","saved");
		return reply;
    }
    //calling the only /view_all_saved_details/ URI should simply
    //populate all saved user exam info  records
    @RequestMapping(value = "/view_all_saved_details/", method = GET)
    public List<UserExamInfo> listAllSavedExamRecords() {
        return userExamService.getUserExamInfoList();
    }
    //calling /view_specific_saved_details/{id} fetches the data of a particular user
    @RequestMapping(value = "/view_specific_saved_details/{id}", method = GET)
    public List<UserExamInfo> listSpecificSavedExamRecords(@PathVariable String id) {
        return userExamService.retrieveSpecificUser(id);
    }
    //This method expects a JSON MAPPED according to the structure of UserExamInfo class 
    // as a RequestBody
    @RequestMapping(value = "/update_data/", method = PUT)
    public Map<String, Object> put(@RequestBody UserExamInfo userExamInfoObject) {
        
        String status = userExamService.updateUserInfo(userExamInfoObject);
        Map<String, Object> reply = new HashMap<>();
        reply.put("Status",status);
        return reply;
    }
    //calling delete_user/{id} deletes the data of a particular user
    @RequestMapping(value = "/delete_user/{id}")
    public Map<String, Object> delete(@PathVariable String id) {
        
        String status = userExamService.deleteUserInfo(id);
        Map<String, Object> reply = new HashMap<>();
        reply.put("Status",status);
        return reply;
    }
    //calling delete_user/ deletes all saved records
    @RequestMapping(value = "/delete_all_user/")
    public Map<String, Object> deleteAll() {
        
        String status = userExamService.deleteAllUserInfo();
        Map<String, Object> reply = new HashMap<>();
        reply.put("Status",status);
        return reply;
    }
    
}
