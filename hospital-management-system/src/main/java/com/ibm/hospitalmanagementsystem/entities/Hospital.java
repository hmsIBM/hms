package com.ibm.hospitalmanagementsystem.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Hospital {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(columnDefinition = "varchar(255) default 'John Snow'")
	private String name = "John Snow";
	
	@Column(columnDefinition = "varchar(255) default 'JohnSnow@gmail.com'")
	private String email = "JohnSnow@gmail.com";
	
	@Column(columnDefinition = "integer default 947462777")
	private int contactNo=947462777;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Doctor> doctor;
	
//	@OneToMany(cascade=CascadeType.ALL)
//	private List<Patient> patient;

	public Hospital() {
		super();
	}

	public Hospital(int id, String name, String email, int contactNo, List<Doctor> doctor) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.contactNo = contactNo;
		this.doctor = doctor;
	}

//	
//	public Hospital(int id, String name, String email, int contactNo, List<Patient> patient) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.email = email;
//		this.contactNo = contactNo;
//		this.patient = patient;
//	}

//	public Hospital(int id, String name, String email, int contactNo, List<Doctor> doctor, List<Patient> patient) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.email = email;
//		this.contactNo = contactNo;
//		this.doctor = doctor;
//		this.patient = patient;
//	}

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getContactNo() {
		return contactNo;
	}

	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}

	public List<Doctor> getDoctor() {
		return doctor;
	}

	public void setDoctor(List<Doctor> doctor) {
		this.doctor = doctor;
	}

//	public List<Patient> getPatient() {
//		return patient;
//	}
//
//	public void setPatient(List<Patient> patient) {
//		this.patient = patient;
//	}

	@Override
	public String toString() {
		return "Hospital [id=" + id + ", name=" + name + ", email=" + email + ", contactNo=" + contactNo + ", doctor="
				+ doctor + "]";
	}

//	@Override
//	public String toString() {
//		return "Hospital [id=" + id + ", name=" + name + ", email=" + email + ", contactNo=" + contactNo + ", doctor="
//				+ doctor + ", patient=" + patient + "]";
//	}



}
