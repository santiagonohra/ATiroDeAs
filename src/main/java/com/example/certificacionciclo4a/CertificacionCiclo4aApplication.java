package com.example.certificacionciclo4a;

import Model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;

@SpringBootApplication(scanBasePackages = {"Controller", "Model", "Services"})
@EnableMongoRepositories
public class CertificacionCiclo4aApplication implements CommandLineRunner {
    @Autowired
    ProductoRepository productoRepository;

    public static void main(String[] args) {
        SpringApplication.run(CertificacionCiclo4aApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        productoRepository.deleteAll();
        productoRepository.saveAll(List.of(
                new Producto(null, "Wilson Master 332", "Raqueta", "Raqueta de tenis marca Wilson", 250000, 10, true),
                new Producto(null, "Nike FoamRunners", "Tenis", "Sneakers de Nike", 340000, 16, true),
                new Producto(null, "Head Headband", "Misc", "Diadema absorbedora marca Head", 17000, 100, true)
        ));

    }
}
