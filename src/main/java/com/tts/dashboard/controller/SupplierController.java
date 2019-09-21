package com.tts.dashboard.controller;

import com.tts.dashboard.model.Supplier;
import com.tts.dashboard.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SupplierController {

    @Autowired
    SupplierService supplierService;

    @GetMapping(value="/suppliers")
    public List<Supplier> getSuppliers() {
        return supplierService.findAll();
    }
}
