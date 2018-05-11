package com.nabteb.exam;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gbarane-David
 */
@Service
public class UserExamService {
  
private List<UserExamInfo> userExamInfoList = new ArrayList<>();

public List<UserExamInfo> getUserExamInfoList(){
   return userExamInfoList;
}
public UserExamInfo saveUserExamDetails(UserExamInfo object){
    userExamInfoList.add(object);
    return object;
}
public String updateUserInfo(UserExamInfo object){
    String status = "failed";
    for(int i=0; i<getUserExamInfoList().size(); i++){
        if(getUserExamInfoList().get(i).getId() == (object.getId())){
            getUserExamInfoList().remove(i);
            getUserExamInfoList().add(object);
            status = "success";
        }
    }
    return status;
}

public UserExamInfo retrieveSpecificUser(int id){
    return userExamInfoList.stream().filter(u->u.getId() == id).findFirst().get();
}

}
