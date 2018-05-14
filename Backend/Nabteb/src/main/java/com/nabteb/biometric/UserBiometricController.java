package com.nabteb.biometric;

import com.nabteb.exam.UserExamService;
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
public class UserBiometricController {
 
    @Autowired
    private UserBiometricService userBiometricService;
    @RequestMapping(method = GET)
    public List<Object> list() {
        return null;
    }
    
    //Create a new record
    @RequestMapping(method = POST, value = "/users/biometric/savebiometric")
    public UserBiometricInfo post( @RequestBody UserBiometricInfo userBiometricInfoObject) {
        return userBiometricService.saveUserBiometricDetails(userBiometricInfoObject);
    }
    //Get all records
    @RequestMapping("/users/biometric/showall")
    public List<UserBiometricInfo> listAllSavedBiometricRecords() {
        return userBiometricService.getUserBiometricInfoList();
    }
     //Get specific record
    @RequestMapping("/specific_user/biometric/{id}")
    public List<UserBiometricInfo> listSpecificSavedBiometricRecord(@PathVariable String id) {
        return userBiometricService.retrieveSpecificUserBiometric(id);
    }
    //Update a record
    @RequestMapping(method = PUT, value = "/update_user/biometric/{id}")
    public Map<String, Object> put(@RequestBody UserBiometricInfo userBiometricInfoObject) {
        String status = userBiometricService.updateUserBiometricInfo(userBiometricInfoObject);
        Map<String, Object> reply = new HashMap<>();
        reply.put("Status",status);
        return reply;
    }
    
}
