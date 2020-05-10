package com.ibm.HospitalApp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.HospitalApp.entities.Hospital;

public interface HospitalRepo extends JpaRepository<Hospital, Integer> {

	public Hospital findByName(String Name);
	
}
