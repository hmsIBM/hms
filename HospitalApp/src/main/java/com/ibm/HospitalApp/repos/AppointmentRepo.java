package com.ibm.HospitalApp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.HospitalApp.entities.Appointment;


public interface AppointmentRepo extends JpaRepository<Appointment, Integer>{
	public Appointment findByName(String Name);
}
