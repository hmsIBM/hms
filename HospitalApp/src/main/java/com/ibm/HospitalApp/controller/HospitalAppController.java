package com.ibm.HospitalApp.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ibm.HospitalApp.entities.Appointment;
import com.ibm.HospitalApp.entities.Department;
import com.ibm.HospitalApp.entities.Doctor;
import com.ibm.HospitalApp.entities.Hospital;
import com.ibm.HospitalApp.entities.ImageModel;
import com.ibm.HospitalApp.entities.Patient;
import com.ibm.HospitalApp.entities.RelationBetweenDoctorAndPatient;
import com.ibm.HospitalApp.service.HospitalAppService;



@CrossOrigin("*")
@RestController

@RequestMapping("/api")

public class HospitalAppController {

	@Autowired
	HospitalAppService hospitalAppService;
	
	@GetMapping("/hospital/{hospital_name}/appointment")
	public List<Appointment> findAllAppointmentsInAHospital(@PathVariable("hospital_name") String hospitalName) {
		System.out.println("inside controller");
		return hospitalAppService.findAllAppointmentsInAHospital(hospitalName);
	}

	@PostMapping("/hospital/{hospital_name}/appointment")
	public ResponseEntity<Void> addAppointmentToAHospital(@PathVariable("hospital_name") String hospitalName,@RequestBody Appointment app) {
		hospitalAppService.addAppointmentInAHospital(hospitalName,app);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;
	}
	
	@PutMapping("/hospital/{hospital_name}/appointment/{id}")
	public ResponseEntity<Void> addupdateAppointment(@PathVariable("id") int id,@RequestBody Appointment app) {
		hospitalAppService.addupdateAppointment(id, app);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.ACCEPTED);
		return re;
	}
	@DeleteMapping("/hospital/{hospital_name}/appointment/{id}")
	public ResponseEntity<Void> deleteAppointment(@PathVariable("id") int id){
		hospitalAppService.deleteAppntment(id);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.OK);
		return re;
	}
	
	
	@PutMapping("/test/patient/{id}")
	public void testPatient(@PathVariable("id") int id,@RequestParam("imageFile") MultipartFile file )throws IOException {
//		int id=39;
		System.out.println("inside test");
		ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
				compressBytes(file.getBytes()));
		hospitalAppService.testPatient(id,img);
	}
	
	


	
	
	@PutMapping("/test/doctor/{id}")
	public void testDoctor(@PathVariable("id") int id,@RequestParam("imageFile") MultipartFile file )throws IOException {
//		int id=39;
		System.out.println("inside test");
		ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
				compressBytes(file.getBytes()));
		hospitalAppService.testDoctor(id,img);
	}
	
	@PutMapping("/test/department/{id}")
	public void testDepartment(@PathVariable("id") int id,@RequestParam("imageFile") MultipartFile file )throws IOException {
//		int id=39;
		System.out.println("inside test");
		ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
				compressBytes(file.getBytes()));
		hospitalAppService.testDoctor(id,img);
	}
	
	@PutMapping("/test/hospital/{id}")
	public void testHospital(@PathVariable("id") int id,@RequestParam("imageFile") MultipartFile file )throws IOException {
//		int id=39;
		System.out.println("inside test");
		ImageModel img = new ImageModel(file.getOriginalFilename(), file.getContentType(),
				compressBytes(file.getBytes()));
		hospitalAppService.testDoctor(id,img);
	}
	
	
	@GetMapping("/hospital/{hospital_name}/count")
	public List<Integer> findCountInAHospital(@PathVariable("hospital_name") String hospital_name) {
		return hospitalAppService.findCountInAHospital(hospital_name);
	}
	
	
	
	
	
	// compress the image bytes before storing it in the database
		public static byte[] compressBytes(byte[] data) {
			Deflater deflater = new Deflater();
			deflater.setInput(data);
			deflater.finish();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
			byte[] buffer = new byte[1024];
			while (!deflater.finished()) {
				int count = deflater.deflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			try {
				outputStream.close();
			} catch (IOException e) {
			}
			System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);

			return outputStream.toByteArray();
		}

		// uncompress the image bytes before returning it to the angular application
		public static byte[] decompressBytes(byte[] data) {
			Inflater inflater = new Inflater();
			inflater.setInput(data);
			ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
			byte[] buffer = new byte[1024];
			try {
				while (!inflater.finished()) {
					int count = inflater.inflate(buffer);
					outputStream.write(buffer, 0, count);
				}
				outputStream.close();
			} catch (IOException ioe) {
			} catch (DataFormatException e) {
			}
			return outputStream.toByteArray();
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
