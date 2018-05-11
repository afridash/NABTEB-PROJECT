package com.nabteb.exam;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gbarane-Davd
 */
@Service
public class UserExamService {
  
List<UserExamInfo> userExamInfoList = new ArrayList<>();

public List<UserExamInfo> getUserExamInfoList(){
   return userExamInfoList;
}
public void saveUserExamDetails(UserExamInfo object){
    getUserExamInfoList().add(object);
}
public String updateUserInfo(UserExamInfo object){
    
    String status = "failed";
    for(int i=0; i<getUserExamInfoList().size(); i++){
        if(getUserExamInfoList().get(i).getId().equals(object.getId())){
            getUserExamInfoList().remove(i);
            getUserExamInfoList().add(object);
            status = "success";
        }
    }
    return status;
}
public List<UserExamInfo> retrieveSpecificUser(String id){
    
    List<UserExamInfo> specificUser = new ArrayList<>();
    for(int i=0; i<getUserExamInfoList().size(); i++){
        if(getUserExamInfoList().get(i).getId().equals(id)){
            specificUser.add(getUserExamInfoList().get(i));
        }
    }
    return specificUser;
}
public String deleteUserInfo(String id){
    
    String status = "failed";
    for(int i=0; i<getUserExamInfoList().size(); i++){
        if(getUserExamInfoList().get(i).getId().equals(id)){
            getUserExamInfoList().remove(i);
            status = "success";
        }
    }
    return status;
}
public String deleteAllUserInfo(){
    
    String status = "failed";
    for(int i=0; i<getUserExamInfoList().size(); i++){
            getUserExamInfoList().remove(i);
            status = "success";
    }
    return status;
}
}
