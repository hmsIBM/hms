package com.ibm.HospitalApp.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Department {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;

	private String department;

	@OneToMany(cascade = CascadeType.ALL)
	List<Doctor> doctor;

	@OneToMany(cascade = CascadeType.ALL)
	List<Patient> patient;

	public Department() {
		super();
	}

	public Department(int id, String department, List<Doctor> doctor, List<Patient> patient) {
		super();
		this.id = id;
		this.department = department;
		this.doctor = doctor;
		this.patient = patient;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public List<Doctor> getDoctor() {
		return doctor;
	}

	public void setDoctor(List<Doctor> doctor) {
		this.doctor = doctor;
	}

	public List<Patient> getPatient() {
		return patient;
	}

	public void setPatient(List<Patient> patient) {
		this.patient = patient;
	}

	@Override
	public String toString() {
		return "Department [id=" + id + ", department=" + department + ", doctor=" + doctor + ", patient=" + patient
				+ "]";
	}

}
