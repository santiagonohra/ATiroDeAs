package com.example.certificacionciclo4a;

import Model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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
                new Producto(null, "Wilson Master 332", "Raqueta", "Raqueta de tenis marca Wilson","https://cdnmedia.racquets4u.com/media/catalog/product/cache/6e8e24cc73e2eff11526e72b5f24c033/w/i/wilson-ultra-100-ul-v3-tennis-racquet-260-g-unstrung_1.jpg", 250000, 10, true),
                new Producto(null, "Nike FoamRunners", "Tenis", "Sneakers de Nike","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d77c8f9a-c6e8-40a5-8332-910312bc86a5/blazer-mid-77-big-kids-shoes-4VfSTd.png", 340000, 16, true),
                new Producto(null, "Head Headband", "Misc", "Diadema absorbedora marca Head","http://www.mauricerobinsonsports.com/images/pics/head_headband.jpg", 17000, 100, true)
        ));

    }
}
