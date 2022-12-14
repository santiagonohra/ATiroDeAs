package Services;

import Model.Producto;
import Repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoServices {
    @Autowired
    ProductoRepository productoRepository;

    public List<Producto> getProductos(){
        return productoRepository.findAll();
    }

    public ResponseEntity<?> getProductoById(String id){
        Optional<Producto> producto = productoRepository.findById(id);
        return producto.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<?> getProductosMenorPrecio(double precio){
        Optional<List<Producto>> lista = productoRepository.consultarPorMenorPrecio(precio);
        return lista.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<?> getProductoCategoria(String categoria){
        Optional<List<Producto>> lista = productoRepository.findByCategoria(categoria);
        return lista.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    public ResponseEntity<?> getProductosConNombre(String nombre){
        Optional<List<Producto>> lista = productoRepository.findByNombre(nombre);
        return lista.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public List<Producto> getProductosDisponibles(){
        return productoRepository.consultarPorDisponibilidad();
    }

    public Producto saveProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public Producto updateProducto(Producto producto){
        if(productoRepository.existsById(producto.getId())){
            return productoRepository.save(producto);
        }
        return null;
    }

    public void deleteProducto(String id){
        productoRepository.deleteById(id);
    }
}
