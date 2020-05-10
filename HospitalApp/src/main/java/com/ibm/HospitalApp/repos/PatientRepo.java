package com.ibm.HospitalApp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.HospitalApp.entities.Patient;

public interface PatientRepo extends JpaRepository<Patient, Integer>{

	public Patient findById(int id);
}
