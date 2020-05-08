package com.ibm.hospitalmanagementsystem.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.hospitalmanagementsystem.entities.TransactionalClass;

public interface TransactionalRepo extends JpaRepository<TransactionalClass, Integer>{

}
