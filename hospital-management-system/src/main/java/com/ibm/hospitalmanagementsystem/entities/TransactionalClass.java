package com.ibm.hospitalmanagementsystem.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TransactionalClass {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private int doctor_id;
	private int patient_id;


	public TransactionalClass() {
		super();
	}

	public TransactionalClass(int id, int doctor_id, int patient_id) {
		super();
		this.id = id;
		this.doctor_id = doctor_id;
		this.patient_id = patient_id;
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "TransactionalClass [id=" + id + ", doctor_id=" + doctor_id + ", patient_id=" + patient_id + "]";
	}

	
	
}
