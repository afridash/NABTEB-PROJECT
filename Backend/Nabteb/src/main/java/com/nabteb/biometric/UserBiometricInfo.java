package com.nabteb.biometric;

/**
 *
 * @author Gbarane-Davd
 */
public class UserBiometricInfo {
 
    private String id;
    private String leftThumbPrint;
    private String rightThumbPrint;
    private String rightIndexFinger;
    private String leftIndexFinger;
    private String userPhoto;
    private String examCenter;
    private String registrationCenter;
    private String registrationDate;
    
public UserBiometricInfo(){

}
public void setId(String id){
    this.id=id;
}
public String getId(){
    return id;
}
public void setLeftThumbPrint(String leftThumbPrint){
    this.leftThumbPrint=leftThumbPrint;
}
public String getLeftThumbPrint(){
    return leftThumbPrint;
}
public void setRightThumbPrint(String rightThumbPrint){
    this.rightThumbPrint=rightThumbPrint;
}
public String getRightThumbPrint(){
    return rightThumbPrint;
}
public void setRightIndexFinger(String rightIndexFinger){
    this.rightIndexFinger=rightIndexFinger;
}
public String getRightIndexFinger(){
    return rightIndexFinger;
}
public void setLeftIndexFinger(String leftIndexFinger){ 
    this.leftIndexFinger=leftIndexFinger;
}
public String getLeftIndexFinger(){
    return leftIndexFinger;
}
public void setUserPhoto(String userPhoto){
    this.userPhoto=userPhoto;
}
public String getUserPhoto(){
    return userPhoto;
}
public void setExamCenter(String examCenter){
    this.examCenter=examCenter;
}
public String getExamCenter(){
    return examCenter;
}
public void setRegistrationCenter(String registrationCenter){
    this.registrationCenter=registrationCenter;
}
public String getRegistrationCenter(){
    return registrationCenter;
}
public void setRegistrationDate(String registrationDate){
    this.registrationDate=registrationDate;
}
public String getRegistrationDate(){
    return registrationDate;
}
}
