package com.nabteb.results;

public class Results {
	private int id;
	private String uploadedBy;
	private String uploadedOn;
	private String file;
	private String fileName;
	
	public Results () {}
	
	public Results(int id, String uploadedBy, String uploadedOn, String file, String fileName) {
		super();
		this.id = id;
		this.uploadedBy = uploadedBy;
		this.uploadedOn = uploadedOn;
		this.file = file;
		this.fileName = fileName;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUploadedBy() {
		return uploadedBy;
	}
	public void setUploadedBy(String uploadedBy) {
		this.uploadedBy = uploadedBy;
	}
	public String getUploadedOn() {
		return uploadedOn;
	}
	public void setUploadedOn(String uploadedOn) {
		this.uploadedOn = uploadedOn;
	}
	public String getFile() {
		return file;
	}
	public void setFile(String file) {
		this.file = file;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
}
