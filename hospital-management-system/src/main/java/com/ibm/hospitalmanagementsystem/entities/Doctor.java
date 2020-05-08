package com.ibm.hospitalmanagementsystem.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Doctor {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String emailId;
	private long contactNumber;
	//private String departmentName;
	private String desig;
	
	@OneToOne()
	@JoinColumn(foreignKey=@ForeignKey(name="department_id"))
	private  Department department;
	
	public Doctor() {
		super();
	}
	
	
//	public Doctor(int id, String name, String emailId, long contactNumber, String departmentName, String desig,
//			Department department) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.emailId = emailId;
//		this.contactNumber = contactNumber;
//		this.departmentName = departmentName;
//		this.desig = desig;
//		this.department = department;
//	}
	

	public int getId() {
		return id;
	}

	public Doctor(int id, String name, String emailId, long contactNumber, String desig, Department department) {
	super();
	this.id = id;
	this.name = name;
	this.emailId = emailId;
	this.contactNumber = contactNumber;
	this.desig = desig;
	this.department = department;
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

//	public String getDepartmentName() {
//		return departmentName;
//	}
//
//	public void setDepartmentName(String departmentName) {
//		this.departmentName = departmentName;
//	}

	public String getDesig() {
		return desig;
	}

	public void setDesig(String desig) {
		this.desig = desig;
	}


	public Department getDepartment() {
		return department;
	}


	public void setDepartment(Department department) {
		this.department = department;
	}


	@Override
	public String toString() {
		return "Doctor [id=" + id + ", name=" + name + ", emailId=" + emailId + ", contactNumber=" + contactNumber
				+ ", desig=" + desig + ", department=" + department + "]";
	}


//	@Override
//	public String toString() {
//		return "Doctor [id=" + id + ", name=" + name + ", emailId=" + emailId + ", contactNumber=" + contactNumber
//				+ ", departmentName=" + departmentName + ", desig=" + desig + ", department=" + department + "]";
//	}
//
	

	
	
}
