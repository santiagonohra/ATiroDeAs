package Controller;

import Model.Producto;
import Services.ProductoServices;
import com.example.certificacionciclo4a.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Productos")
public class ProductoController {
    @Autowired
    ProductoServices productoServices;

    @GetMapping("/all")
    public List<Producto> getProductos(){
        return productoServices.getProductos();
    }

    @GetMapping("/ltPrice")
    public List<Producto> getProductosMenorPrecio(@RequestParam int precio){
        return productoServices.getProductosMenorPrecio(precio);
    }

    @GetMapping("/category")
    public List<Producto> getProductoCategoria(@RequestParam String categoria){
        return productoServices.getProductoCategoria(categoria);
    }

    @GetMapping("/search")
    public List<Producto> getProductosConNombre(@RequestParam String nombre){
        return productoServices.getProductosConNombre(nombre);
    }

    @GetMapping("/available")
    public List<Producto> getProductosDisponibles(){
        return productoServices.getProductosDisponibles();
    }

    @PostMapping("/save")
    public Producto saveProducto(@RequestBody Producto producto){
        return productoServices.saveProducto(producto);
    }

    @PutMapping("/update")
    public Producto updateProducto(@RequestBody Producto producto){
        return productoServices.updateProducto(producto);
    }

    @DeleteMapping("/delete")
    public void deleteProducto(@RequestParam String id){
        productoServices.deleteProducto(id);
    }
}
