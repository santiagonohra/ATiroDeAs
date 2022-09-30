package com.example.certificacionciclo4a;

import Model.Producto;
import Repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;

@SpringBootApplication(scanBasePackages = {"Controller", "Model", "Services"})
@EnableMongoRepositories(basePackages = "Repository")
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
            new Producto(null, "Sneakers Nike Blazer Mid '77 Vintage", "Sneakers", "Sneakers Nike Blaze Mid '77 Vintage altos para hombres. Colorway blanco con negro. ","https://n.nordstrommedia.com/id/sr3/e8043db1-4cdd-4dd2-90e1-96f45b31e0c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838", 614000.0, 47, true),
            new Producto(null, "Pelotas de Tenis Wilson Prime All Court", "Tenis", "Las pelotas Wilson Prime tienen felpa duraweave que es ideal para todas las superficies.", "https://i5.walmartimages.com/asr/22056f44-4c9a-4a35-9db5-4d190e324bfb.b63d64b57bb9d6f52f1cf9221942ed11.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", 50000.0, 150, true),
            new Producto(null, "Sneakers Nike LeBron XVIII", "Sneakers", "Sneakers Nike LeBron XVIII para hombres. Colorway Home White/Amarillo-Black.", "https://m.media-amazon.com/images/I/6138l5XbTdS._AC_UX575_.jpg", 983000.0, 1, true),
            new Producto(null, "Pantaloneta Under Armour Tech Graphic", "Ropa Deportiva", "Pantaloneta suelta y liviana, ideal para mantenerse fresco con UA Tech.", "https://m.media-amazon.com/images/I/511dBXGmAtL._AC_UX569_.jpg", 67000.0, 33, true),
            new Producto(null, "Canasta de Pelotas de Tenis Wilson", "Tenis", "Canasta portable de acero laminado. Almacena hasta 75 pelotas. (Pelotas no incluidas).", "https://i.ebayimg.com/images/g/PcsAAOSwikViG3qt/s-l640.jpg", 148000.0, 8, true),
            new Producto(null, "Canilleras Adidas League Predator", "Fútbol", "Hecho en 85% poliester y 15% elastano", "https://m.media-amazon.com/images/I/815uSVvdsBL._AC_SL1500_.jpg", 119000.0, 21, true),
            new Producto(null, "Sneakers Nike Air Jordan 1 Mid", "Sneakers", "Sneakers Nike Air Jordan 1 Mid para hombres. Colorway Particle Grey Black.", "https://m.media-amazon.com/images/I/61PgWlTMEaL._AC_UY575_.jpg", 1432000.0, 2, true),
            new Producto(null, "Tornagrip Alien Pros", "Tenis", "Grip para raqueta de tenis fácil de instalar con compatibilidad universal. Color negro. 6 unidades.", "https://m.media-amazon.com/images/I/81QbiI+lKdL._AC_SL1500_.jpg", 34000.0, 270, true),
            new Producto(null, "Medias Under Armour Adult Resistor 3.0", "Ropa Deportiva", "Paquete de 3 pares de medias color negro, con tecnología AlwaysCool.", "https://m.media-amazon.com/images/I/81HaCUIevqL._AC_UX569_.jpg", 135000.0, 38, true),
            new Producto(null, "Sneakers Nike Kyrie 7 Copa", "Sneakers", "Sneakers de baloncesto Nike Kyrie 7 para hombres. Colorway 1 World 1 People.", "https://m.media-amazon.com/images/I/71CwlYIR7kL._AC_UY575_.jpg", 597000.0, 4, true),
            new Producto(null, "Balón de Fútbol Adidas Qatar 2022", "Fútbol", "Covertura 100% PTU. Sistema interno de butíl. No viene inflado.", "https://m.media-amazon.com/images/I/61yj7RpeK9L._AC_SL1000_.jpg", 371000.0, 12, true),
            new Producto(null, "Balón de Baloncesto Molten BG3800", "Baloncesto", "Cobertura sintética para uso interno y externo. Aprobado por FIBA. Tamaño 7.", "https://m.media-amazon.com/images/I/91v6Jz3OteL._AC_SL1500_.jpg", 283000.0, 16, true),
            new Producto(null, "Uniforme de Bugs Bunny Space Jam", "Ropa Deportiva", "Hecha en poliester, respirable y de secado rápido.", "https://m.media-amazon.com/images/I/61HG3rs+uqL._AC_UX569_.jpg", 219000.0, 3, true),
            new Producto(null, "Pelotas de Tenis Penn Championship", "Tenis", "Paquete de 2 latas (6 pelotas en total). Felpa ideal para canchas duras.", "https://m.media-amazon.com/images/I/71iJpHMLKBL._AC_SL1024_.jpg", 75000.0, 100, true),
            new Producto(null, "Canilleras Nike Mercurial Lite", "Fútbol", "Canilleras ultra livianas Nike Mercurial. Color blanco. Incluye 1 par.", "https://m.media-amazon.com/images/I/71oXWDUZheL._AC_SL1500_.jpg", 178000.0, 18, true),
            new Producto(null, "Gorra Adidas Femenina", "Ropa Deportiva", "Gorra mate de silueta tradicional. Absorción de humedad. Hecha en algodón.", "https://m.media-amazon.com/images/I/81fobZZxLES._AC_UX569_.jpg", 120000.0, 15, true),
            new Producto(null, "Aro de Baloncesto Ajustable para Niños Play 22", "Baloncesto", "Aro ajustable resistente al agua. Es 100% portable para sesiones on-the-go!", "https://m.media-amazon.com/images/I/81gV11uuTyL._AC_SL1500_.jpg", 398000.0, 4, true),
            new Producto(null, "Balón de Baloncesto Wilson Evolution", "Baloncesto", "El mejor balón de interiores en América. Tecnología Evo Feel. Alto grip y durabilidad.", "https://m.media-amazon.com/images/I/91vdgs5FY4L._AC_SL1500_.jpg", 467000.0, 29, true),
            new Producto(null, "Uniforme Black Mamba Kobe Bryant", "Ropa Deportiva", "Hecha en poliester, importado y de secado rápido.", "https://m.media-amazon.com/images/I/81GAJNz4JzL._AC_UX569_.jpg", 189000.0, 1, true),
            new Producto(null, "Sneakers Nike KD Trey 5 VIII", "Sneakers", "Sneakers de baloncesto Nike KD Trey 5 VIII talla 9.5 US. Colorway negro/Blanco. Suela de goma.", "https://m.media-amazon.com/images/I/61HDRXfGk1L._AC_UX575_.jpg", 417000.0, 5, true)
        ));

    }
}
