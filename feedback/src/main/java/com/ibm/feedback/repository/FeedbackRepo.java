package com.ibm.feedback.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ibm.feedback.entities.Feedback;

@Repository
public interface FeedbackRepo extends MongoRepository<Feedback, String>{

}
