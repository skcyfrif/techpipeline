package com.cyfrifpro.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Data
@Entity
public class JobApplication {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String fullName;
	
	@Column(unique = true)
	private String email;
	
	@Column(unique = true)
	private Long phone;
	
	private String message;
	
	@Lob
	private byte[] cv;
	
}
