package com.nabteb.biometric;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gbarane-Davd
 */
@Service
public class UserBiometricService {

List<UserBiometricInfo> userBiometricInfoList = new ArrayList<>();

public List<UserBiometricInfo> getUserBiometricInfoList(){
   return userBiometricInfoList;
}
public UserBiometricInfo saveUserBiometricDetails(UserBiometricInfo object){
    userBiometricInfoList.add(object);
    return object;
}
public String updateUserBiometricInfo(UserBiometricInfo object){
    
    String status = "failed";
    for(int i=0; i<getUserBiometricInfoList().size(); i++){
        if(getUserBiometricInfoList().get(i).getId().equals(object.getId())){
            getUserBiometricInfoList().remove(i);
            getUserBiometricInfoList().add(object);
            status = "success";
        }
    }
    return status;
}
public List<UserBiometricInfo> retrieveSpecificUserBiometric(String id){
    
    List<UserBiometricInfo> specificUser = new ArrayList<>();
    for(int i=0; i<getUserBiometricInfoList().size(); i++){
        if(getUserBiometricInfoList().get(i).getId().equals(id)){
            specificUser.add(getUserBiometricInfoList().get(i));
        }
    }
    return specificUser;
}
public String deleteUserBiometricInfo(String id){
    
    String status = "failed";
    for(int i=0; i<getUserBiometricInfoList().size(); i++){
        if(getUserBiometricInfoList().get(i).getId().equals(id)){
            getUserBiometricInfoList().remove(i);
            status = "success";
        }
    }
    return status;
}
public String deleteAllUserBiometricInfo(){
    
    String status = "failed";
    for(int i=0; i<getUserBiometricInfoList().size(); i++){
            getUserBiometricInfoList().remove(i);
            status = "success";
    }
    return status;
}
}
