package com.ibm.hospitalmanagementsystem.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.hospitalmanagementsystem.entities.Hospital;

public interface HospitalRepo extends JpaRepository<Hospital, Integer>{

	public Hospital findByName(String name);
}
