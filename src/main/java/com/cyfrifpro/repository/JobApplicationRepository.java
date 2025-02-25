package com.cyfrifpro.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cyfrifpro.model.JobApplication;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long>{
	
	boolean existsByEmail(String email);

	boolean existsByPhone(Long phone);
	
	Optional<JobApplication> findByEmail(String email);
}
