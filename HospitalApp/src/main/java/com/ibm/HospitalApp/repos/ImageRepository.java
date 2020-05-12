package com.ibm.HospitalApp.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.HospitalApp.entities.ImageModel;



public interface ImageRepository extends JpaRepository<ImageModel, Long> {
	Optional<ImageModel> findByName(String name);
	public ImageModel findById(int id);
}
