package com.cyfrifpro.restcontroller;

import com.cyfrifpro.exception.DuplicateEntryException;
import com.cyfrifpro.exception.ResourceNotFoundException;
import com.cyfrifpro.model.ContactUs;
import com.cyfrifpro.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contact-us")
public class ContactUsController {

    @Autowired
    private ContactUsService contactUsService;

    @PostMapping("/save")
    public ResponseEntity<?> saveContact(@RequestBody ContactUs contactUs) {
        try {
            ContactUs savedContact = contactUsService.saveContactUs(contactUs);
            return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
        } catch (DuplicateEntryException ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", ex.getMessage()));
        }
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<ContactUs>> getAllContacts() {
        List<ContactUs> contacts = contactUsService.getAllContacts();
        return ResponseEntity.ok(contacts);
    }
   
    @GetMapping("/email/{email}")
    public ResponseEntity<?> getContactUsByEmail(@PathVariable String email) {
        try {
            ContactUs contact = contactUsService.getContactUsByEmail(email);
            return ResponseEntity.ok(contact);
        } catch (ResourceNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", ex.getMessage()));
        }
    }
}
