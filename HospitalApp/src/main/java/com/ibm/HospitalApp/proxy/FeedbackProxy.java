package com.ibm.HospitalApp.proxy;

import java.util.List;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.ibm.HospitalApp.entities.Feedback;

@FeignClient(name="Feedback")
@RibbonClient(name="Feedback")
public interface FeedbackProxy {

	@PostMapping("/api/feedback")
	public ResponseEntity<Void> addFeedback(Feedback feedback);
	
	@GetMapping("/api/feedback")
	public List<Feedback> getAllFeedback();
}
