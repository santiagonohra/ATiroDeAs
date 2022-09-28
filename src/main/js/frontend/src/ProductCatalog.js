import React, { useEffect, useState } from 'react';
import {Button, Container, InputGroup, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import {click} from "@testing-library/user-event/dist/click";

const ProductCatalog = () => {
    const [filterBy, setFilterBy] = useState('');
    const [productos, setProductos] = useState([]);
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [paramType, setParamType] = useState('');

    const handleClick= () =>{

        setLoading(true);
        //consultar por precio menor

            fetch(`/api/Productos/${filterBy}/${data}`)
                .then(response => {
                    if(response.ok){
                        response.json().then(data => {
                            setProductos(data);
                            setLoading(false);
                        });
                    }else{
                        setProductos([]);
                        setLoading(false);
                    }

                });

        setData('');
        setFilterBy('');
    }

    if(loading){
        return <p>Cargando...</p>
    }


    const handleChangeFilter = (event) =>{
        const {name, value} = event.target;
        setFilterBy(value);
        setParamType(value === 'category' || value === 'search' ? 'text' : 'number');
    }

    const handleChangeData = (event) => {
        const {name, value} = event.target;
        setData(value);
    }

    const handleClickAll = () => {
        setLoading(true);
        //consultar por precio menor

        fetch(`/api/Productos/all`)
            //fetch(`/api/Productos/search/Wilson`)
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                setLoading(false);
            });
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

                    <input class="form-check-input" type="radio" value="ltPrice" name="choice" onChange={handleChangeFilter} /> Consultar por menor precio &ensp; &ensp;
                    <input class="form-check-input" type="radio" value="category" name="choice" onChange={handleChangeFilter} /> Consultar por categoría &ensp; &ensp;
                    <input class="form-check-input" type="radio" value="search" name="choice" onChange={handleChangeFilter} /> Consultar por nombre &ensp; &ensp; &ensp; &ensp;
                    <div className="float-end">
                    <input type={paramType} name="value" placeholder="Parámetro de búsqueda" onChange={handleChangeData}/>&ensp;
                    <Button color="primary" disabled={data.length == 0 || filterBy.length == 0} onClick={handleClick}>Aceptar</Button>&ensp;
                    <Button color="success" onClick={handleClickAll}>Mostrar Todo</Button>
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
