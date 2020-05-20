package com.ibm.HospitalApp.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Department {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;

	private String departmentName;
	@OneToOne(cascade=CascadeType.ALL)
	private ImageModel image;

	@OneToMany(cascade = CascadeType.ALL)
	List<Doctor> doctor;

	@OneToMany(cascade = CascadeType.ALL)
	List<Patient> patient;
	

	public Department() {
		super();
	}

	

	



	
	public Department(int id, String departmentName, List<Doctor> doctor, List<Patient> patient, ImageModel image) {
		super();
		this.id = id;
		this.departmentName = departmentName;
		this.doctor = doctor;
		this.patient = patient;
		this.image = image;
	}







	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
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



	public ImageModel getImage() {
		return image;
	}



	public void setImage(ImageModel image) {
		this.image = image;
	}












	@Override
	public String toString() {
		return "Department [id=" + id + ", departmentName=" + departmentName + ", image=" + image + ", doctor=" + doctor
				+ ", patient=" + patient + "]";
		
	}



	

}
