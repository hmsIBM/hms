package com.ibm.HospitalApp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.HospitalApp.entities.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor, Integer> {
	public Doctor findById(int id);
}
