package com.ibm.feedback.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Feedback {

	@Id
	String id;
	String name;
	String email;
	String feedback;
	
	public Feedback() {
		super();
	}
	
	public Feedback(String id, String name, String email, String feedback) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.feedback = feedback;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	@Override
	public String toString() {
		return "Feedback [id=" + id + ", name=" + name + ", email=" + email + ", feedback=" + feedback + "]";
	}
	
	
}
