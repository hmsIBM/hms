package com.ibm.HospitalApp.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Patient {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String gender;
	private String disease;
	private String emailId;
	private long contactNumber;
	@OneToOne(cascade=CascadeType.ALL)
	private ImageModel image;
	
	public Patient() {
		super();
	}

	

	public Patient(int id, String name, String gender, String disease, String emailId, long contactNumber,
			ImageModel image) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.disease = disease;
		this.emailId = emailId;
		this.contactNumber = contactNumber;
		this.image = image;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}



	public ImageModel getImage() {
		return image;
	}



	public void setImage(ImageModel image) {
		this.image = image;
	}



	@Override
	public String toString() {
		return "Patient [id=" + id + ", name=" + name + ", gender=" + gender + ", disease=" + disease + ", emailId="
				+ emailId + ", contactNumber=" + contactNumber + ", image=" + image + "]";
	}


	
}
