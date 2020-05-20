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
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;

	private String name;

	private String email;

	private int contactNo;
	
	@OneToOne(cascade=CascadeType.ALL)
	private ImageModel image;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Department> department;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Appointment> appointments;
	

	public Hospital(int id, String name, String email, int contactNo, ImageModel image, List<Department> department,
			List<Appointment> appointments) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.contactNo = contactNo;
		this.image = image;
		this.department = department;
		this.appointments = appointments;
	}


	public Hospital() {
		super();
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

	public List<Department> getDepartment() {
		return department;
	}

	public void setDepartment(List<Department> department) {
		this.department = department;
	}

	public ImageModel getImage() {
		return image;
	}

	public void setImage(ImageModel image) {
		this.image = image;
	}

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

	@Override
	public String toString() {
		return "Hospital [id=" + id + ", name=" + name + ", email=" + email + ", contactNo=" + contactNo + ", image="
				+ image + ", department=" + department + ", appointments=" + appointments + "]";
	}




	
	
	
}
