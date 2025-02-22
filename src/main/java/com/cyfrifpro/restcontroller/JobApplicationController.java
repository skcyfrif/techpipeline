package com.cyfrifpro.restcontroller;

import com.cyfrifpro.exception.DuplicateEntryException;
import com.cyfrifpro.exception.ResourceNotFoundException;
import com.cyfrifpro.model.JobApplication;
import com.cyfrifpro.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping("/upload")
    public ResponseEntity<?> submitJobApplication(
            @RequestParam String fullName,
            @RequestParam String email,
            @RequestParam Long phone,
            @RequestParam String message,
            @RequestParam MultipartFile cv) {
        try {
            JobApplication jobApplication = new JobApplication();
            jobApplication.setFullName(fullName);
            jobApplication.setEmail(email);
            jobApplication.setPhone(phone);
            jobApplication.setMessage(message);

            // Convert file to byte array and save
            jobApplication.setCv(cv.getBytes());

            JobApplication savedApplication = jobApplicationService.saveJobApplication(jobApplication);

            return ResponseEntity.status(HttpStatus.CREATED).body(savedApplication);
        } catch (DuplicateEntryException ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", ex.getMessage()));
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", ex.getMessage()));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("message", "An unexpected error occurred."));
        }
    }

    // Fetch all job applications
    @GetMapping("/all")
    public ResponseEntity<List<JobApplication>> getAllJobApplications() {
        List<JobApplication> applications = jobApplicationService.getAllJobApplications();
        return ResponseEntity.ok(applications);
    }

    // Fetch job application by email
    @GetMapping("/email/{email}")
    public ResponseEntity<?> getJobApplicationByEmail(@PathVariable String email) {
        try {
            JobApplication application = jobApplicationService.getJobApplicationByEmail(email);
            return ResponseEntity.ok(application);
        } catch (ResourceNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", ex.getMessage()));
        }
    }
}
