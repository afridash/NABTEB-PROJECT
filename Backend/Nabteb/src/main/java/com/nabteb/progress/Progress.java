package com.nabteb.progress;

public class Progress {
	private int id;
	private boolean finishedPersonal;
	private boolean finishedExaminationsDetails;
	private boolean finishedBiometrics;
	private boolean finishedPayements;
	private boolean submitted;
	
	public Progress() {
		
	}
	public Progress(int id, boolean finishedPersonal, boolean finishedExaminationsDetails, boolean finishedBiometrics,
			boolean finishedPayements, boolean submitted) {
		super();
		this.id = id;
		this.finishedPersonal = finishedPersonal;
		this.finishedExaminationsDetails = finishedExaminationsDetails;
		this.finishedBiometrics = finishedBiometrics;
		this.finishedPayements = finishedPayements;
		this.submitted = submitted;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isFinishedPersonal() {
		return finishedPersonal;
	}
	public void setFinishedPersonal(boolean finishedPersonal) {
		this.finishedPersonal = finishedPersonal;
	}
	public boolean isFinishedExaminationsDetails() {
		return finishedExaminationsDetails;
	}
	public void setFinishedExaminationsDetails(boolean finishedExaminationsDetails) {
		this.finishedExaminationsDetails = finishedExaminationsDetails;
	}
	public boolean isFinishedBiometrics() {
		return finishedBiometrics;
	}
	public void setFinishedBiometrics(boolean finishedBiometrics) {
		this.finishedBiometrics = finishedBiometrics;
	}
	public boolean isFinishedPayements() {
		return finishedPayements;
	}
	public void setFinishedPayements(boolean finishedPayements) {
		this.finishedPayements = finishedPayements;
	}
	public boolean isSubmitted() {
		return submitted;
	}
	public void setSubmitted(boolean submitted) {
		this.submitted = submitted;
	}
	
}
