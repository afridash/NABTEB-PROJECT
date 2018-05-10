package com.nabteb.auth;
/*
 * @Author Richard Igbiriki
 * TO DO
 * Convert to Entity for MySQL
 */
public class AuthUser {
	private int id;
	private String email;
	private String password;
	private String user_type;
	private String created_at;
	private boolean verified;
	private String pin;
	public AuthUser() {
	}
	
	public AuthUser(int id, String email, String password, String user_type, String created_at, boolean verified, String pin) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.user_type = user_type;
		this.created_at = created_at;
		this.verified = verified;
		this.pin = pin;
	}
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUser_type() {
		return user_type;
	}
	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}
	public String getCreated_at() {
		return created_at;
	}
	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}
	public boolean isVerified() {
		return verified;
	}
	public void setVerified(boolean verified) {
		this.verified = verified;
	}
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	
}
