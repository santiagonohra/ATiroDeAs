package com.example.certificacionciclo4a;

import Model.Producto;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProductoRepository extends MongoRepository<Producto, String> {

    //public List<Producto> consultarMenorPrecio(int precio);

    public List<Producto> findByCategoria(String categoria);

    @Query("{'nombre':  {$regex: /?0/}}")
    public Optional<List<Producto>> findByNombre(String nombre);

    @Query("{precio:  {$lte:  ?0}}")
    public List<Producto> consultarPorMenorPrecio(int precio);

    @Query("{disponibilidad: true}")
    public List<Producto> consultarPorDisponibilidad();

}
