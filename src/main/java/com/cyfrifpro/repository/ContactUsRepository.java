package com.cyfrifpro.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cyfrifpro.model.ContactUs;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Long>{

	boolean existsByEmail(String email);

	boolean existsByPhone(Long phone);

	Optional<ContactUs> findByEmail(String email);

}
