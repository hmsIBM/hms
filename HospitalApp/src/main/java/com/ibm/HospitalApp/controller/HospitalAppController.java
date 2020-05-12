package com.ibm.HospitalApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.HospitalApp.entities.Appointment;
import com.ibm.HospitalApp.entities.Department;
import com.ibm.HospitalApp.entities.Doctor;
import com.ibm.HospitalApp.entities.Hospital;
import com.ibm.HospitalApp.entities.Patient;
import com.ibm.HospitalApp.entities.RelationBetweenDoctorAndPatient;
import com.ibm.HospitalApp.service.HospitalAppService;
//@CrossOrigin
@RestController
@CrossOrigin("*")
@RequestMapping("/api")

public class HospitalAppController {

	@Autowired
	HospitalAppService hospitalAppService;
	
	@GetMapping("/appointment")
	public List<Appointment> findAllAppointments() {
		return hospitalAppService.findAllAppointment();
	}

	@PostMapping("/appointment")
	public ResponseEntity<Void> addAppointments(@RequestBody Appointment app) {
		hospitalAppService.addAppointment(app);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;
	}
	
	@PutMapping("/appointment/{name}")
	public ResponseEntity<Void> addupdateAppointment(@PathVariable("name") String name,
			@RequestBody Appointment app) {
		hospitalAppService.addupdateAppointment(name, app);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		return re;
	}
	@GetMapping("/hospital")
	public List<Hospital> findAllHospital() {
		return hospitalAppService.findAllHospital();
	}

	@PostMapping("/hospital")
	public ResponseEntity<Void> addHospital(@RequestBody Hospital hospital) {
		hospitalAppService.addHospital(hospital);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;
	}

	@GetMapping("/hospital/{hospital_name}")
	public Hospital findHospitalByName(@PathVariable("hospital_name") String hospital_name) {
		return hospitalAppService.findHospitalByName(hospital_name);
	}

	@GetMapping("/hospital/{hospital_name}/department")
	public List<Department> findDepartmentInAHospital(@PathVariable("hospital_name") String hospital_name) {
		return hospitalAppService.findDepartmentInAHospital(hospital_name);
	}

	@PutMapping("/hospital/{hospital_name}/department")
	public ResponseEntity<Void> addDepartmentInAHospital(@PathVariable("hospital_name") String hospital_name,
			@RequestBody Department department) {
		hospitalAppService.addDepartmentInAHospital(hospital_name, department);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		return re;
	}

	@GetMapping("/hospital/{hospital_name}/department/{department_name}/doctor")
	public List<Doctor> findDoctorInADepartment(@PathVariable("hospital_name") String hospital_name,
			@PathVariable("department_name") String department_name) {
		return hospitalAppService.findDoctorInADepartment(hospital_name, department_name);
	}

	@PutMapping("/hospital/{hospital_name}/department/{department_name}/doctor")
	public ResponseEntity<Void> addDoctorInADepartment(@PathVariable("hospital_name") String hospital_name,
			@PathVariable("department_name") String department_name, @RequestBody Doctor doctor) {
		hospitalAppService.addDoctorInADepartment(hospital_name, department_name, doctor);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		return re;
	}
	
	@GetMapping("/hospital/{hospital_name}/department/{department_name}/patient")
	public List<Patient> findPatientInADepartment(@PathVariable("hospital_name") String hospital_name,
			@PathVariable("department_name") String department_name){
		return hospitalAppService.findPatientInADepartment(hospital_name, department_name);
	}
	
	@PutMapping("/hospital/{hospital_name}/department/{department_name}/patient")
	public ResponseEntity<Void> addPatientInADepartment(@PathVariable("hospital_name") String hospital_name,
			@PathVariable("department_name") String department_name, @RequestBody Patient patient) {
		hospitalAppService.addPatientInADepartment(hospital_name, department_name, patient);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		return re;
	}
	
	@GetMapping("/hospital/RelationBetweenDoctorAndPatient")
	public List<RelationBetweenDoctorAndPatient> findRelationBetweenDoctorAndPatient() {
		return hospitalAppService.findRelationBetweenDoctorAndPatient();
	}
	
	@PostMapping("/hospital/RelationBetweenDoctorAndPatient")
	public ResponseEntity<Void> addRelationBetweenDoctorAndPatient(@RequestBody RelationBetweenDoctorAndPatient
			relationBetweenDoctorAndPatient){
		 hospitalAppService.addRelationBetweenDoctorAndPatient(relationBetweenDoctorAndPatient);
		 ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
			return re;
	}
	
	@GetMapping("/hospital/RelationBetweenDoctorAndPatient/doc_id/{doc_id}")
	public List<Patient> findAllPatientOfADoctor(@PathVariable("doc_id") int doc_id){
		return hospitalAppService.findAllPatientOfADoctor(doc_id);
	}
	
	@DeleteMapping("/hospital/patient/{id}")
	public ResponseEntity<Void> deletePatient(@PathVariable("id") int id){
		hospitalAppService.deletePatient(id);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.OK);
		return re;
	}
	
	@DeleteMapping("/hospital/doctor/{id}")
	public ResponseEntity<Void> deleteDoctor(@PathVariable("id") int id){
		hospitalAppService.deleteDoctor(id);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.OK);
		return re;
	}
	
	@DeleteMapping("/hospital/department/{id}")
	public ResponseEntity<Void> deleteDepartment(@PathVariable("id") int id){
		hospitalAppService.deleteDepartment(id);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.OK);
		return re;
	}
	
	@DeleteMapping("/hospital/{id}")
	public ResponseEntity<Void> deleteHospital(@PathVariable("id") int id){
		hospitalAppService.deleteHospital(id);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.OK);
		return re;
	}

}
