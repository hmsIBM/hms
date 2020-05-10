package com.ibm.HospitalApp.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ibm.HospitalApp.entities.Patient;
import com.ibm.HospitalApp.entities.RelationBetweenDoctorAndPatient;

public interface RelationBetweenDoctorAndPatientRepo extends JpaRepository<RelationBetweenDoctorAndPatient, Integer>{

	@Query("select u.patient_id from RelationBetweenDoctorAndPatient u where u.doctor_id = ?1")
	public List<Integer> findAllPatientOfADoctor(int doc_id);
}
