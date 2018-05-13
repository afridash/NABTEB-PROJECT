package com.nabteb.regfees;

public class RegistrationFees {
	private int id;
	private String orderId;
	private String transactionTime;
	private String referenceNumber;
	private String message;
	private String status;
	private int amount;
	
	public RegistrationFees(int id, String orderId, String transactionTime, String referenceNumber, String message, String status, int amount) {
		super();
		this.id = id;
		this.orderId = orderId;
		this.transactionTime = transactionTime;
		this.referenceNumber = referenceNumber;
		this.message = message;
		this.status = status;
		this.amount = amount;
	}
	public RegistrationFees() {
		
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getTransactionTime() {
		return transactionTime;
	}
	public void setTransactionTime(String transactionTime) {
		this.transactionTime = transactionTime;
	}
	public String getReferenceNumber() {
		return referenceNumber;
	}
	public void setReference(String referenceNumber) {
		this.referenceNumber = referenceNumber;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
