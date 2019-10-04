package com.tts.dashboard.controller;

import com.tts.dashboard.model.Supplier;
import com.tts.dashboard.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://jordanmor.github.io")
@RequestMapping("/suppliers")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @GetMapping
    public Page<Supplier> getSuppliers(
            @RequestParam int page,
            @RequestParam int pageSize,
            @RequestParam String direction,
            @RequestParam String sortBy
    ) {
        return supplierService.findAll(page, pageSize, direction, sortBy);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createSupplier(@RequestBody Supplier category) {
        return supplierService.createSupplier(category);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> updateSupplier(@RequestBody Supplier category, @PathVariable long id) {
        return supplierService.updateSupplier(category, id);
    }

    @DeleteMapping(value="{id}")
    public ResponseEntity<Supplier> deleteSupplierById(@PathVariable long id) {
        return supplierService.deleteSupplierById(id);
    }

    @GetMapping("{all}")
    public List<Supplier> findAllSuppliers() {
        return supplierService.findAllSuppliers();
    }

}
