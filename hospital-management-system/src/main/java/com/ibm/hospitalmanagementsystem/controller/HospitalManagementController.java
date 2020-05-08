package com.ibm.hospitalmanagementsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.hospitalmanagementsystem.entities.Department;
import com.ibm.hospitalmanagementsystem.entities.Doctor;
import com.ibm.hospitalmanagementsystem.entities.Patient;
import com.ibm.hospitalmanagementsystem.entities.TransactionalClass;
import com.ibm.hospitalmanagementsystem.entities.Hospital;
import com.ibm.hospitalmanagementsystem.entities.Patient;
import com.ibm.hospitalmanagementsystem.repos.DoctorRepo;
import com.ibm.hospitalmanagementsystem.repos.PatientRepo;
import com.ibm.hospitalmanagementsystem.service.HospitalManagementService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class HospitalManagementController {

	@Autowired
	HospitalManagementService hospitalManagementService;
		
	@GetMapping("/hospital")
	public List<Hospital> findAllHospital(){
		return hospitalManagementService.findAllHospital();
	}
	
	@PostMapping("/hospital")
	public ResponseEntity<Void> addHospital(@RequestBody Hospital hospital) {
		hospitalManagementService.addHospital(hospital);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;

	}
	
	@GetMapping("/hospital/{name}")
	public Hospital findHospitalByName(@PathVariable("name")String name) {
		return hospitalManagementService.findHospitalByName(name);
	}
	
	@GetMapping("/hospital/patient")
	public List<Patient> findAllPatient(){
		return hospitalManagementService.findAllPatient();
	}
	
	@GetMapping("/hospital/{hospital_name}/doctor")
	public List<Doctor> findDoctor(@PathVariable("hospital_name") String hospital_name){
		return hospitalManagementService.findDoctor(hospital_name);
	}
	
	@PutMapping("/hospital/{hospital_name}/doctor")
	public ResponseEntity<Void> addDoctor(@PathVariable("hospital_name")String hospital_name,
			@RequestBody Doctor doctor){
		 hospitalManagementService.addDoctor(hospital_name,doctor);
		 ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		return re;
	}

	@PostMapping("/hospital/patient")
	public ResponseEntity<Void> addPatient(@RequestBody Patient patient) {
		hospitalManagementService.addPatient(patient);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;
	}
	
	@PostMapping("/hospital/department")
    public ResponseEntity<Void> addDept(@RequestBody Department department) {
        hospitalManagementService.addDepartment(department);
        ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
        return re;
    }
    
    @GetMapping("/hospital/department")
    public List<Department> findAllDepartment(){
        return hospitalManagementService.findAllDepartment();
    }
	
    
    @PostMapping("/hospital/transactional")
    public ResponseEntity<Void> addTransaction(@RequestBody TransactionalClass transactional){
    	 hospitalManagementService.addTransaction(transactional);
    	 ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
         return re;
    }
    
    @GetMapping("/hospital/transactional")
    public List<TransactionalClass> findAllTransaction(){
        return hospitalManagementService.findAllTransaction();
    }
//	@GetMapping("/hospital/department/{department}")
//	public List<Doctor> findByDepartment(@PathVariable("department") String department){
//		return hospitalManagementService.findByDepartment(department);
//	}

	
//	@GetMapping("/hospital/doctors")
//	public List<Doctor> findAllDoctor(){
//		return docRepo.findAll();
//	}
//	
//	@PostMapping("/hospital/doctors")
//	ResponseEntity<Void> addDoctor(@RequestBody Doctor doctor){
//		docRepo.save(doctor);
//		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
//		return re;
//	}
//
//	@GetMapping("/hospital/patient")
//	public List<Patient> findAllPatient(){
//		return patientRepo.findAll();
//	}
//	
//	@PostMapping("/hospital/patient")
//	ResponseEntity<Void> addPatient(@RequestBody Patient patient){
//		patientRepo.save(patient);
//		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
//		return re;
//	}
	
}
