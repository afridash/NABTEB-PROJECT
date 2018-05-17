package com.nabteb.centers;

import java.util.List;

public class Centers {
	private int id;
	private int ownerId;
    private String ownerName;
    private String state;
    private String localGovernment;
    private String centerType;
    private String centerName;
    private String location;
    private String postalAddress;
    private String specialization;
    private List<Object>pictures;
    private String status;
	public Centers() {}

	public String getSpecialization() {
		return specialization;
	}
	
    public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}


	public List<Object> getPictures() {
		return pictures;
	}


	public void setPictures(List<Object> pictures) {
		this.pictures = pictures;
	}


	public int getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getLocalGovernment() {
		return localGovernment;
	}
	public void setLocalGovernment(String localGovernment) {
		this.localGovernment = localGovernment;
	}
	public String getCenterType() {
		return centerType;
	}
	public void setCenterType(String centerType) {
		this.centerType = centerType;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getPostalAddress() {
		return postalAddress;
	}
	public void setPostalAddress(String postalAddress) {
		this.postalAddress = postalAddress;
	}
    
    
}
