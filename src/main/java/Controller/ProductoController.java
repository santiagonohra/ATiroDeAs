package Controller;

import Model.Producto;
import Services.ProductoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Productos")
public class ProductoController {
    @Autowired
    ProductoServices productoServices;

    @GetMapping("/all")
    public List<Producto> getProductos(){
        return productoServices.getProductos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductoById(@PathVariable String id){
        return productoServices.getProductoById(id);
    }

    @GetMapping("/ltPrice/{precio}")
    public ResponseEntity<?> getProductosMenorPrecio(@PathVariable int precio) {
        return productoServices.getProductosMenorPrecio(precio);
    }

    @GetMapping("/category/{categoria}")
    public ResponseEntity<?> getProductoCategoria(@PathVariable String categoria){
        return productoServices.getProductoCategoria(categoria);
    }

    @GetMapping("/search/{nombre}")
    public ResponseEntity<?> getProductosConNombre(@PathVariable String nombre){
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

    @PutMapping("/{id}")
    public Producto updateProducto(@RequestBody Producto producto){
        return productoServices.updateProducto(producto);
    }

    @DeleteMapping("/{id}")
    public void deleteProducto(@PathVariable String id){
        productoServices.deleteProducto(id);
    }
}
