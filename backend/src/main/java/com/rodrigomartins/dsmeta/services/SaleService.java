package com.rodrigomartins.dsmeta.services;

import com.rodrigomartins.dsmeta.entities.Sale;
import com.rodrigomartins.dsmeta.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    public List<Sale> getSales() {
        return repository.findAll();
    }

    public Sale getById(Long id) {
        return repository.getReferenceById(id);
    }
}
