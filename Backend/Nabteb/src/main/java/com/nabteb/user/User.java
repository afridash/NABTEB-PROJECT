package com.nabteb.user;

public class User {
	private int id;
	private String firstName;
	private String middleName;
	private String lastName;
	private String phoneNumber;
	private String gender;
	private String dob;
	private String address;
	private String kinFullName;
	private String kinAddress;
	private String kinPhoneNumber;
	private String passport;
	private String state;
	private String lga;

	public User() {
		
	}
	public User(int id, String firstName, String middleName, String lastName, String phoneNumber, String gender,
			String dob, String address, String kinFullName, String kinAddress, String kinPhoneNumber, String passport, String state, String lga) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.gender = gender;
		this.dob = dob;
		this.address = address;
		this.kinFullName = kinFullName;
		this.kinAddress = kinAddress;
		this.kinPhoneNumber = kinPhoneNumber;
		this.lga = lga;
		this.state = state;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getLga() {
		return lga;
	}
	public void setLga(String lga) {
		this.lga = lga;
	}
	public String getPassport() {
		return passport;
	}
	public void setPassport(String passport) {
		this.passport = passport;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getKinFullName() {
		return kinFullName;
	}
	public void setKinFullName(String kinFullName) {
		this.kinFullName = kinFullName;
	}
	public String getKinAddress() {
		return kinAddress;
	}
	public void setKinAddress(String kinAddress) {
		this.kinAddress = kinAddress;
	}
	public String getKinPhoneNumber() {
		return kinPhoneNumber;
	}
	public void setKinPhoneNumber(String kinPhoneNumber) {
		this.kinPhoneNumber = kinPhoneNumber;
	}
	
	
}
