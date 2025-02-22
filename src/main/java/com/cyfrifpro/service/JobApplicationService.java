package com.cyfrifpro.service;

import com.cyfrifpro.exception.DuplicateEntryException;
import com.cyfrifpro.exception.ResourceNotFoundException;
import com.cyfrifpro.model.JobApplication;
import com.cyfrifpro.repository.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    @Transactional
    public JobApplication saveJobApplication(JobApplication jobApplication) {
        if (jobApplicationRepository.existsByEmail(jobApplication.getEmail())) {
            throw new DuplicateEntryException("Email already exists.");
        }

        if (jobApplicationRepository.existsByPhone(jobApplication.getPhone())) {
            throw new DuplicateEntryException("Phone number already exists.");
        }

        return jobApplicationRepository.save(jobApplication);
    }

    // Fetch all job applications
    public List<JobApplication> getAllJobApplications() {
        return jobApplicationRepository.findAll();
    }

    // Fetch a job application by email
    public JobApplication getJobApplicationByEmail(String email) {
        return jobApplicationRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Job application not found for email: " + email));
    }
}
