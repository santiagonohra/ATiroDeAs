import React, { useEffect, useState } from 'react';
import {Button, Container, InputGroup, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
    const [filterBy, setFilterBy] = useState('all');
    const [productos, setProductos] = useState([]);
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);


    const handleClick= () =>{
        setLoading(true);
        //consultar por precio menor

            fetch(`/api/Productos/${filterBy}/${data}`)
            //fetch(`/api/Productos/search/Wilson`)
                .then(response => response.json())
                .then(data => {
                    setProductos(data);
                    setLoading(false);
                })

    }

    if(loading){
        return <p>Cargando...</p>
    }

    const handleChangeFilter = (event) =>{
        const {name, value} = event.target;
        setFilterBy(value);
    }

    const handleChangeData = (event) => {
        const {name, value} = event.target;
        setData(value);
    }

    const productList = productos.map(product =>{
        return <tr key={product.id}>
            <td style={{whiteSpace: 'nowrap'}}>{product.nombre}</td>
            <td>{product.categoria}</td>
            <td>{product.descripcion}</td>
            <td>{product.disponibilidad ? 'Si' : 'No'}</td>
            <td>{product.precio}</td>
            <td>{product.cantidadStock}</td>
        </tr>
    });


    return (
        <div>
            <AppNavbar/>
            <Container fluid>


                <h2>Catálogo de Productos</h2>
                <Button color="link"><Link to="/">Regresar</Link></Button>
                <h4>Opciones</h4>

                    <input type="radio" value="ltPrice" name="choice" onChange={handleChangeFilter} /> Consultar por menor precio &ensp; &ensp;
                    <input type="radio" value="category" name="choice" onChange={handleChangeFilter} /> Consultar por categoría &ensp; &ensp;
                    <input type="radio" value="search" name="choice" onChange={handleChangeFilter} /> Consultar por nombre &ensp; &ensp; &ensp; &ensp;
                    <div className="float-end">
                    <input type="text" name="value" placeholder="Parámetro de búsqueda" onChange={handleChangeData}/>&ensp;
                    <Button color="primary" onClick={handleClick}>Aceptar</Button>
                    </div>

                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="10%">Nombre</th>
                        <th width="5%">Categoría</th>
                        <th width="20%">Descripción</th>
                        <th width="5%">Disponible</th>
                        <th width="5%">Precio</th>
                        <th width="5%">Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default ProductCatalog;