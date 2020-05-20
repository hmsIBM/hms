package com.ibm.HospitalApp.repos;


import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.HospitalApp.entities.ImageModel;



public interface ImageRepository extends JpaRepository<ImageModel, Long> {
	public ImageModel findById(int id);
}
