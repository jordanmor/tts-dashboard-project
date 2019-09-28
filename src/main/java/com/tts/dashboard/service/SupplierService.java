package com.tts.dashboard.service;

import com.tts.dashboard.model.Supplier;
import com.tts.dashboard.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@Service
public class SupplierService {

    @Autowired
    SupplierRepository supplierRepository;

    public List<Supplier> findAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Page<Supplier> findAll(int page, int size, String direction, String sortBy) {
        Pageable paginatedPages = PageRequest.of(page, size, Sort.Direction.fromString(direction), sortBy);
        return supplierRepository.findAll(paginatedPages);
    }

    public ResponseEntity<String> createSupplier(Supplier supplier) {
        Optional<Supplier> presentSupplier = supplierRepository.findByName(supplier.getName());
        if(presentSupplier.isPresent()) {
            return new ResponseEntity<String>("A supplier already exists with this name", HttpStatus.BAD_REQUEST);
        }
        Supplier savedSupplier = supplierRepository.save(supplier);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedSupplier.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    public ResponseEntity<Supplier> updateSupplier(Supplier category, long id) {
        Optional<Supplier> supplierOptional = supplierRepository.findById(id);
        if (!supplierOptional.isPresent()) {
            // Sends back a status of 404 Not Found
            return ResponseEntity.notFound().build();
        }
        category.setId(id);
        supplierRepository.save(category);
        // Sends back a status of 204 Not Content, which implies a successful request
        return ResponseEntity.noContent().build();
    }

    public ResponseEntity<Supplier> deleteSupplierById(long id) {
        Optional<Supplier> supplierOptional = supplierRepository.findById(id);
        if (!supplierOptional.isPresent()) {
            // Sends back a status of 404 Not Found
            return ResponseEntity.notFound().build();
        }
        supplierRepository.deleteById(id);
        // Sends back a status of 204 Not Content, which implies a successful request
        return ResponseEntity.noContent().build();
    }
}
