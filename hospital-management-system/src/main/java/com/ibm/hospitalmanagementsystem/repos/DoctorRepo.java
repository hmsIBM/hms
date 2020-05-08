package com.ibm.hospitalmanagementsystem.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.hospitalmanagementsystem.entities.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor, Integer> {

//	public List<Doctor> findByDepartmentName(String department);
}
