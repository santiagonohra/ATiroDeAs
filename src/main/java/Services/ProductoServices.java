package Services;

import Model.Producto;
import com.example.certificacionciclo4a.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class ProductoServices {
    @Autowired
    ProductoRepository productoRepository;

    public List<Producto> getProductos(){
        return productoRepository.findAll();
    }

    public List<Producto> getProductosMenorPrecio(int precio){
        return productoRepository.consultarPorMenorPrecio(precio);
    }

    public List<Producto> getProductoCategoria(String categoria){
        return productoRepository.findByCategoria(categoria);
    }
    public List<Producto> getProductosConNombre(String nombre){
        return productoRepository.findByNombre(nombre).get();
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

    public void deleteProducto(@RequestParam String id){
        productoRepository.deleteById(id);
    }
}
