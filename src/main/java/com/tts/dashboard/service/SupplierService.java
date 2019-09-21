package com.tts.dashboard.service;

import com.tts.dashboard.model.Supplier;
import com.tts.dashboard.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {

    @Autowired
    SupplierRepository supplierRepository;

    public List<Supplier> findAll() {
        return supplierRepository.findAll();
    }
}
