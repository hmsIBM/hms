package com.ibm.hospitalmanagementsystem.entities;

import javax.persistence.Entity;
import javax.persistence.ForeignKey;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//
//import org.hibernate.annotations.OnDelete;
//import org.hibernate.annotations.OnDeleteAction;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;

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
	private String docName;
	
//	@ManyToOne(fetch = FetchType.LAZY,optional=false)
//	@JoinColumn(name="doctor_id",nullable=false)
//	@OnDelete(action = OnDeleteAction.CASCADE)
//	@JsonIgnore
//	private Doctor doctor;

//	@OneToOne
//	@JoinColumn(foreignKey=@ForeignKey(name="doctor_id"))
//	private Doctor doctor;

	public Patient() {
		super();
	}

//public Patient(int id, String name, String gender, String disease, String emailId, long contactNumber, String docName) {
//	super();
//	this.id = id;
//	this.name = name;
//	this.gender = gender;
//	this.disease = disease;
//	this.emailId = emailId;
//	this.contactNumber = contactNumber;
//	this.docName = docName;
//}



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

public String getDocName() {
	return docName;
}

public void setDocName(String docName) {
	this.docName = docName;
}

@Override
public String toString() {
	return "Patient [id=" + id + ", name=" + name + ", gender=" + gender + ", disease=" + disease + ", emailId="
			+ emailId + ", contactNumber=" + contactNumber + ", docName=" + docName + "]";
}



//public Doctor getDoctor() {
//	return doctor;
//}
//
//public void setDoctor(Doctor doctor) {
//	this.doctor = doctor;
//}
//
//@Override
//public String toString() {
//	return "Patient [id=" + id + ", name=" + name + ", gender=" + gender + ", disease=" + disease + ", emailId="
//			+ emailId + ", contactNumber=" + contactNumber + ", docName=" + docName + ", doctor=" + doctor + "]";
//}

//@Override
//public String toString() {
//	return "Patient [id=" + id + ", name=" + name + ", gender=" + gender + ", disease=" + disease + ", emailId="
//			+ emailId + ", contactNumber=" + contactNumber + ", docName=" + docName + "]";
//}

	
	
}
