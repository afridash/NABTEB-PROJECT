package com.nabteb.exam;

/**
 *
 * @author Gbarane-Davd
 */

public class UserExamInfo {
    
    private int id;
    private String state;
    private String localGovernment;
    private String examCenter;
    private String examType;
    private String examTitle;
    
public UserExamInfo(){
    
}
public void setId(int id){
    this.id=id;
}
public int getId(){
    return id;
}
public void setState(String state){
    this.state=state;
}
public String getState(){
    return state;
}
public void setLocalGovernment(String localGovernment){
    this.localGovernment=localGovernment;
}
public String getLocalGovernment(){
    return localGovernment;
}
public void setExamCenter(String examCenter){
    this.examCenter=examCenter;
}
public String getExamCenter(){
    return examCenter;
}
public void setExamType(String examType){
    this.examType=examType;
}
public String getExamType(){
    return examType;
}
public void setExamTitle(String examTitle){
    this.examTitle=examTitle;
}
public String getExamTitle(){
    return examTitle;
}
}
