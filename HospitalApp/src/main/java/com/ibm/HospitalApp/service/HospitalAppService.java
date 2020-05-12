package com.ibm.HospitalApp.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ibm.HospitalApp.entities.Appointment;
import com.ibm.HospitalApp.entities.Department;
import com.ibm.HospitalApp.entities.Doctor;
import com.ibm.HospitalApp.entities.Hospital;
import com.ibm.HospitalApp.entities.Patient;
import com.ibm.HospitalApp.entities.RelationBetweenDoctorAndPatient;
import com.ibm.HospitalApp.repos.AppointmentRepo;
import com.ibm.HospitalApp.repos.DepartmentRepo;
import com.ibm.HospitalApp.repos.DoctorRepo;
import com.ibm.HospitalApp.repos.HospitalRepo;
import com.ibm.HospitalApp.repos.PatientRepo;
import com.ibm.HospitalApp.repos.RelationBetweenDoctorAndPatientRepo;

@Service
public class HospitalAppService {

	@Autowired
	HospitalRepo hospitalRepo;

	@Autowired
	RelationBetweenDoctorAndPatientRepo relationBetweenDoctorAndPatientRepo;
	
	@Autowired
	PatientRepo patientRepo; 
	
	@Autowired
	DoctorRepo doctorRepo;
	
	@Autowired
	DepartmentRepo departmentRepo;
	
	@Autowired
	AppointmentRepo appointmentRepo;
	public List<Appointment> findAllAppointment() {
		return appointmentRepo.findAll();
	}
	public void addAppointment(Appointment appointment) {
		appointmentRepo.save(appointment);
	}
	
	@Transactional
	public void addupdateAppointment(String appointmentName,Appointment d) {
		Appointment app = appointmentRepo.findByName(appointmentName);
		
	           
	       
	            app.setName(d.getName());
	            app.setEmailId(d.getEmailId());
	            app.setAppointmentDate(d.getAppointmentDate());
	            app.setAppointmentTime(d.getAppointmentTime());
	            app.setContactNumber(d.getContactNumber());
	            app.setContactNumber(d.getContactNumber());
	            app.setDepartmentName(d.getDepartmentName());
	            app.setDoctorName(d.getDoctorName());
	            app.setDisease(d.getDisease());
	           
	            System.out.println(app);
	            
	             
	           
	         
	}
	public List<Hospital> findAllHospital() {
		return hospitalRepo.findAll();
	}

	public void addHospital(Hospital hospital) {
		hospitalRepo.save(hospital);
	}

	public Hospital findHospitalByName(String name) {
		return hospitalRepo.findByName(name);
	}

	public List<Department> findDepartmentInAHospital(String hospital_name) {
		Hospital hospital = hospitalRepo.findByName(hospital_name);
		List<Department> department = hospital.getDepartment();
		return department;
	}
	
	@Transactional
	public void addDepartmentInAHospital(String hospital_name,Department d) {
		Hospital hospital = hospitalRepo.findByName(hospital_name);
		List<Department> department = hospital.getDepartment();
		department.add(d);
		hospital.setDepartment(department);	
	}

	public List<Doctor> findDoctorInADepartment(String hospital_name,String department_name){
		Hospital hospital = hospitalRepo.findByName(hospital_name);
		List<Department> department = hospital.getDepartment();
		List<Doctor> doctor = new ArrayList<>();
		for(Department d:department) {
			if(d.getDepartment().equals(department_name)) {
				doctor.addAll(d.getDoctor());
			}
		}
		return doctor;
	}

	public List<Patient> findPatientInADepartment(String hospital_name,String department_name){
		Hospital hospital = hospitalRepo.findByName(hospital_name);
		List<Department> department = hospital.getDepartment();
		List<Patient> patient = new ArrayList<>();
		for(Department d:department) {
			if(d.getDepartment().equals(department_name)) {
				patient.addAll(d.getPatient());
			}
		}
		return patient;

	}

	@Transactional
	public void addDoctorInADepartment(String hospital_name,String department_name,Doctor doctor) {
		Hospital hospital = hospitalRepo.findByName(hospital_name);
		List<Department> department = hospital.getDepartment();
		List<Doctor> doc = new ArrayList<>();
		for(Department d:department) {
			if(d.getDepartment().equals(department_name)) {
				doc.addAll(d.getDoctor());
				doc.add(doctor);
				d.setDoctor(doc);
			}
			
		}
	}
	
	@Transactional
	public void addPatientInADepartment(String hospital_name,String department_name,Patient patient) {
		Hospital hospital = hospitalRepo.findByName(hospital_name);
		List<Department> department = hospital.getDepartment();
		List<Patient> pat = new ArrayList<>();
		for(Department d:department) {
			if(d.getDepartment().equals(department_name)) {
				pat.addAll(d.getPatient());
				pat.add(patient);
				d.setPatient(pat);
			}
			
		}

	}

	public List<RelationBetweenDoctorAndPatient> findRelationBetweenDoctorAndPatient() {
		List<RelationBetweenDoctorAndPatient> reletion =relationBetweenDoctorAndPatientRepo.findAll();
		return reletion;
	}

	public void addRelationBetweenDoctorAndPatient(
			RelationBetweenDoctorAndPatient relationBetweenDoctorAndPatient) {
		 relationBetweenDoctorAndPatientRepo.save(relationBetweenDoctorAndPatient);
	}
	
	public List<Patient> findAllPatientOfADoctor(int doc_id){
		List<Integer> p=relationBetweenDoctorAndPatientRepo.findAllPatientOfADoctor(doc_id);
		List<Patient>patients = new ArrayList<>();
		Patient patient;
		for(Integer i:p) {
			patient=patientRepo.findById(i.intValue());
		    patients.add(patient);
		}
		return patients;
	}
	
	public void deletePatient(int id) {
		patientRepo.deleteById(id);
	}
	
	public void deleteDoctor(int id) {
		doctorRepo.deleteById(id);
	}
	
	public void deleteDepartment(int id) {
		departmentRepo.deleteById(id);
	}
	
	public void deleteHospital(int id) {
		hospitalRepo.deleteById(id);
	}
}
