package com.tts.dashboard.controller;

import com.tts.dashboard.model.Supplier;
import com.tts.dashboard.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SupplierController {

    @Autowired
    SupplierService supplierService;

    @GetMapping(value="/suppliers")
    public Page<Supplier> getSuppliers(
            @RequestParam int page,
            @RequestParam String direction,
            @RequestParam String sortBy
    ) {
        return supplierService.findAll(page, 10, direction, sortBy);
    }
}
