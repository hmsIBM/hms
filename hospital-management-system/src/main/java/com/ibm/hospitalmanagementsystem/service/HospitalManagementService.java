package com.ibm.hospitalmanagementsystem.service;

import java.util.ArrayList;
import java.util.List;

import javax.print.Doc;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ibm.hospitalmanagementsystem.entities.Department;
import com.ibm.hospitalmanagementsystem.entities.Doctor;
import com.ibm.hospitalmanagementsystem.entities.Hospital;
import com.ibm.hospitalmanagementsystem.entities.Patient;
import com.ibm.hospitalmanagementsystem.entities.TransactionalClass;
import com.ibm.hospitalmanagementsystem.repos.DepartmentRepo;
import com.ibm.hospitalmanagementsystem.repos.DoctorRepo;
import com.ibm.hospitalmanagementsystem.repos.HospitalRepo;
import com.ibm.hospitalmanagementsystem.repos.PatientRepo;
import com.ibm.hospitalmanagementsystem.repos.TransactionalRepo;

@Service
public class HospitalManagementService {

	@Autowired
	HospitalRepo hospitalRepo;

	@Autowired
	DoctorRepo doctorRepo;

	@Autowired
	PatientRepo patientRepo;

	@Autowired
	DepartmentRepo departmentRepo;

	@Autowired
	TransactionalRepo transaction;
	
	public List<Hospital> findAllHospital() {
		List<Hospital> hospitals = hospitalRepo.findAll();
		System.out.println(hospitals);
		return hospitals;
	}

	public Hospital addHospital(Hospital hospital) {
		return hospitalRepo.save(hospital);
	}

	public List<Patient> findAllPatient() {
		List<Patient> patient = patientRepo.findAll();
		System.out.println(patient);
		return patient;
	}

	public Patient addPatient(Patient patient) {
		return patientRepo.save(patient);
	}

	public List<Department> findAllDepartment() {
		List<Department> departments = departmentRepo.findAll();
		return departments;

	}

//	public List<Department> findByDepartment(String department) {
//		return departmentRepo.findByDepartmentName(department);
//	}

	public Department addDepartment(Department dept) {
		return departmentRepo.save(dept);

	}

	public TransactionalClass addTransaction(TransactionalClass transactional) {
		return transaction.save(transactional);
	}
	
	public List<TransactionalClass> findAllTransaction(){
		List<TransactionalClass> trans = transaction.findAll();
		return trans;
	}

	public Hospital findHospitalByName(String name) {
		return hospitalRepo.findByName(name);
	}

	public List<Doctor> findDoctor(String hospital_name) {
		Hospital hospital = hospitalRepo.findByName(hospital_name);
		List<Doctor> doc = hospital.getDoctor();
		return doc;
	}
	@Transactional
	public void addDoctor(String hospital_name, Doctor doctor) {
		Hospital hospital = hospitalRepo.findByName(hospital_name);
		//hospital.getDoctor().add(doctor);
		List<Doctor> doc ;
		doc = hospital.getDoctor();
		doc.add(doctor);
		hospital.setDoctor(doc);
	}
	
}
