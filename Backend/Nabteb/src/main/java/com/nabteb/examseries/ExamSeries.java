/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nabteb.examseries;

/**
 *
 * @author darlynton
 */
public class ExamSeries {
    private int id;
    private int userId;
    private String createdAt;
    private boolean isOpen;
    private String name;
    private String createdBy;
    
    
    public ExamSeries(){

    }
    
    public ExamSeries(int id, int userId, String createdAt, boolean isOpen, String name, String createdBy){
        super();
        
        this.id = id;
        this.userId = userId;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.isOpen = isOpen;
        this.name = name;
    }
    
    public int getId() {
	return id;
    }
    public void setId(int id) {
	this.id = id;
    }
    
    public int getUserId() {
	return userId;
    }
    public void setUserId(int userId) {
	this.userId = userId;
    }
    
    public String getCreatedBy() {
	return createdBy;
    }
    public void setCreatedBy(String createdBy) {
	this.createdBy = createdBy;
    }
    
    public String getCreatedAt() {
	return createdAt;
    }
    public void setCreatedAt(String createdAt) {
	this.createdAt = createdAt;
    }
    
    public boolean getIsOpen() {
	return isOpen;
    }
    public void setIsOpen(boolean isOpen) {
	this.isOpen = isOpen;
    }
    
    public String getName() {
	return name;
    }
    public void setName(String name) {
	this.name = name;
    }
}

