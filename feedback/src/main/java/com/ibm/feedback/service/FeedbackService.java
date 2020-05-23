package com.ibm.feedback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.feedback.entities.Feedback;
import com.ibm.feedback.repository.FeedbackRepo;

@Service
public class FeedbackService {

	@Autowired
	FeedbackRepo feedbackRepo;
	
	public void add(Feedback feed) {
		feedbackRepo.save(feed);
	}

	public List<Feedback> getAllFeedback() {
		return feedbackRepo.findAll();
	}
	
	

}
