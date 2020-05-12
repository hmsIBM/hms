package com.ibm.HospitalApp.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Doctor {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String emailId;
	private long contactNumber;
	private String desig;
	@OneToOne(cascade=CascadeType.ALL)
	private ImageModel image;
	public Doctor() {
		super();
	}

	

	public Doctor(int id, String name, String emailId, long contactNumber, String desig, ImageModel image) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.contactNumber = contactNumber;
		this.desig = desig;
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

	public String getDesig() {
		return desig;
	}

	public void setDesig(String desig) {
		this.desig = desig;
	}



	public ImageModel getImage() {
		return image;
	}



	public void setImage(ImageModel image) {
		this.image = image;
	}



	@Override
	public String toString() {
		return "Doctor [id=" + id + ", name=" + name + ", emailId=" + emailId + ", contactNumber=" + contactNumber
				+ ", desig=" + desig + ", image=" + image + "]";
	}

	
	
	
}
