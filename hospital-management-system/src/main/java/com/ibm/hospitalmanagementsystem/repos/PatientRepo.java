package com.ibm.hospitalmanagementsystem.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.hospitalmanagementsystem.entities.Patient;

public interface PatientRepo extends JpaRepository<Patient, Integer> {

}
