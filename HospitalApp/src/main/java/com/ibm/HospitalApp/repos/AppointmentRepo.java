package com.ibm.HospitalApp.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ibm.HospitalApp.entities.Appointment;
import com.ibm.HospitalApp.entities.Hospital;


public interface AppointmentRepo extends JpaRepository<Appointment, Integer>{
	public Appointment findByName(String Name);
	public Appointment findById(int id);
	public List<Appointment> findAll();
//	@Query("select u.* from Appointment u where u.ho = ?1")
//	public List<Appointment> findAllAppointmentsInAHospital(String hospitalName );
}
