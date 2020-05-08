package com.ibm.hospitalmanagementsystem.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.hospitalmanagementsystem.entities.Department;

public interface DepartmentRepo extends JpaRepository<Department, Integer> {

//	public List<Department> findByDepartmentName(String department);
}
