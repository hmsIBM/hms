package com.ibm.HospitalApp.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String emailId;
	
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    @NotNull
    private Date appointmentDate;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="HH:mm:ss")
    @Temporal(TemporalType.TIME)
    @NotNull
    private Date appointmentTime;
    private long contactNumber;
    private String departmentName;
    private String doctorName;
    private String disease;
	
    public Appointment() {
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

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Date getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public Date getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(Date appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public Appointment(int id, String name, String emailId, @NotNull Date appointmentDate,
			@NotNull Date appointmentTime, long contactNumber, String departmentName, String doctorName,
			String disease) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.appointmentDate = appointmentDate;
		this.appointmentTime = appointmentTime;
		this.contactNumber = contactNumber;
		this.departmentName = departmentName;
		this.doctorName = doctorName;
		this.disease = disease;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", name=" + name + ", emailId=" + emailId + ", appointmentDate="
				+ appointmentDate + ", appointmentTime=" + appointmentTime + ", contactNumber=" + contactNumber
				+ ", departmentName=" + departmentName + ", DoctorName=" + doctorName + ", disease=" + disease + "]";
	}
    
	
	
	
}