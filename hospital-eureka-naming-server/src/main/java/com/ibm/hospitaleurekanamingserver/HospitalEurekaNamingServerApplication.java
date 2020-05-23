package com.ibm.hospitaleurekanamingserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class HospitalEurekaNamingServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(HospitalEurekaNamingServerApplication.class, args);
	}

}
