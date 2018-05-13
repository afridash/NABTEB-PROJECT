package com.nabteb.registered;

public class Registered {
	private int id;
	private String series;
	private String registrationDate;
	private String fullName;
	private String examType;
	public Registered () {}
	public Registered(int id, String series, String registrationDate, String fullName, String examType) {
		super();
		this.id = id;
		this.series = series;
		this.registrationDate = registrationDate;
		this.fullName = fullName;
		this.examType = examType;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSeries() {
		return series;
	}
	public void setSeries(String series) {
		this.series = series;
	}
	public String getRegistrationDate() {
		return registrationDate;
	}
	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getExamType() {
		return examType;
	}
	public void setExamType(String examType) {
		this.examType = examType;
	}
}
