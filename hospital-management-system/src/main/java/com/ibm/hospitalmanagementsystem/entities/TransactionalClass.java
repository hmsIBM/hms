package com.ibm.hospitalmanagementsystem.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class TransactionalClass {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private int doctor_id;
	private int patient_id;
	
	// @Column(name="appointment_date")
	 @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	 @Temporal(TemporalType.DATE)
	 @NotNull
	 private Date appointmentDate;
	 
	 
	// @Column(name="appointment_time")
	 @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="HH:mm:ss")
	 @Temporal(TemporalType.TIME)
	 @NotNull
	 private Date appointmentTime;

	public TransactionalClass() {
		super();
	}

	public TransactionalClass(int id, int doctor_id, int patient_id, @NotNull Date appointmentDate,
			@NotNull Date appointmentTime) {
		super();
		this.id = id;
		this.doctor_id = doctor_id;
		this.patient_id = patient_id;
		this.appointmentDate = appointmentDate;
		this.appointmentTime = appointmentTime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(int doctor_id) {
		this.doctor_id = doctor_id;
	}

	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
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

	@Override
	public String toString() {
		return "TransactionalClass [id=" + id + ", doctor_id=" + doctor_id + ", patient_id=" + patient_id
				+ ", appointmentDate=" + appointmentDate + ", appointmentTime=" + appointmentTime + "]";
	}
	
	
	
	
}
