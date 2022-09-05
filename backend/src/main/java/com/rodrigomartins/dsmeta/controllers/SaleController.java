package com.rodrigomartins.dsmeta.controllers;

import com.rodrigomartins.dsmeta.entities.Sale;
import com.rodrigomartins.dsmeta.services.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

    @Autowired
    private SaleService service;

    @GetMapping
    public List<Sale> findSales() {
        return service.getSales();
    }

    @GetMapping
    public Sale findSaleById() {
        return
    }
}
