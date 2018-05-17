package com.nabteb.centers;

public class Centers {
	private int id;
    private String ownerName;
    private String state;
    private String localGovernment;
    private String centerType;
    private String centerName;
    private String location;
    private String postalAddress;
    
    public Centers() {}
    
	public Centers(int id, String ownerName, String state, String localGovernment, String centerType, String centerName,
			String location, String postalAddress) {
		super();
		this.id = id;
		this.ownerName = ownerName;
		this.state = state;
		this.localGovernment = localGovernment;
		this.centerType = centerType;
		this.centerName = centerName;
		this.location = location;
		this.postalAddress = postalAddress;
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
