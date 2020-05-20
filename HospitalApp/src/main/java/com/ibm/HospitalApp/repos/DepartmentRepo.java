package com.ibm.HospitalApp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.HospitalApp.entities.Department;

public interface DepartmentRepo extends JpaRepository<Department, Integer>{

	

}
