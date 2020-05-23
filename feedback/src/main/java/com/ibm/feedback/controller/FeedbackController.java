package com.ibm.feedback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.feedback.entities.Feedback;
import com.ibm.feedback.service.FeedbackService;

@RestController
@RequestMapping("/api")
public class FeedbackController {

	@Autowired
	FeedbackService feedbackService;
	
	@PostMapping("/feedback")
	public ResponseEntity<Void> addFeedback(@RequestBody Feedback feed){
		feedbackService.add(feed);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;
	}
	
	@GetMapping("/feedback")
	public List<Feedback> getAllFeedback(){
		return feedbackService.getAllFeedback();
	}
}
