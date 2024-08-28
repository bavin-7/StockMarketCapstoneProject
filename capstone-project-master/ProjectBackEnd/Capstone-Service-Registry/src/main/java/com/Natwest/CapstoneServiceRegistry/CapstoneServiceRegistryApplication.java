package com.Natwest.CapstoneServiceRegistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class CapstoneServiceRegistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(CapstoneServiceRegistryApplication.class, args);
	}

}
