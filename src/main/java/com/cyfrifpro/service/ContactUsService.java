package com.cyfrifpro.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.cyfrifpro.exception.DuplicateEntryException;
import com.cyfrifpro.exception.ResourceNotFoundException;
import com.cyfrifpro.model.ContactUs;
import com.cyfrifpro.repository.ContactUsRepository;

@Service
public class ContactUsService {

    private final ContactUsRepository contactUsRepository;

    public ContactUsService(ContactUsRepository contactUsRepository) {
        this.contactUsRepository = contactUsRepository;
    }

    public ContactUs saveContactUs(ContactUs contactUs) {
        if (contactUsRepository.existsByEmail(contactUs.getEmail())) {
            throw new DuplicateEntryException("Email already exists.");
        }
        if (contactUsRepository.existsByPhone(contactUs.getPhone())) {
            throw new DuplicateEntryException("Phone number already exists.");
        }
        return contactUsRepository.save(contactUs);
    }

    public List<ContactUs> getAllContacts() {
        return contactUsRepository.findAll();
    }

    public ContactUs getContactUsByEmail(String email) {
        return contactUsRepository.findByEmail(email)
        		.orElseThrow(() -> new ResourceNotFoundException("Contact us found for email: " + email));
    }
}
