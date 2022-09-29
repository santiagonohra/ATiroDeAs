package com.example.certificacionciclo4a;

import Model.Producto;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoRepository extends MongoRepository<Producto, String> {

    //public List<Producto> consultarMenorPrecio(int precio);

    public Optional<List<Producto>> findByCategoria(String categoria);

    @Query("{'nombre':  {$regex: /?0/i}}")
    public Optional<List<Producto>> findByNombre(String nombre);

    @Query("{precio:  {$lte:  ?0}}")
    public Optional<List<Producto>> consultarPorMenorPrecio(int precio);

    @Query("{disponibilidad: true}")
    public List<Producto> consultarPorDisponibilidad();

}
