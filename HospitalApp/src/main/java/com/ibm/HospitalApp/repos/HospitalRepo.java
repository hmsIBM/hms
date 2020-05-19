package com.ibm.HospitalApp.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.HospitalApp.entities.Department;
import com.ibm.HospitalApp.entities.Hospital;

public interface HospitalRepo extends JpaRepository<Hospital, Integer> {

	public Hospital findByName(String Name);
	
	
}
