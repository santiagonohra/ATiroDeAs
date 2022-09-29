import React, { useEffect, useState } from 'react';
import {Button, Container, Input, Table, InputGroup} from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import {click} from "@testing-library/user-event/dist/click";

const ProductCatalog = () => {

    const [filterBy, setFilterBy] = useState('');
    const [productos, setProductos] = useState([]);
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [paramType, setParamType] = useState('');
    const [categorias1, setCategorias1] = useState([]);

    useEffect(() =>{
        setLoading(true);

        fetch(`/api/Productos/available`)
            //fetch(`/api/Productos/search/Wilson`)
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                setLoading(false);
            });
    }, []);

    const handleClick= () =>{

        setLoading(true);

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
        setParamType(value === 'search' ? 'text' : 'number');
    }

    const handleChangeData = (event) => {
        const {name, value} = event.target;
        setData(value);
    }

    const handleClickAll = () => {
        setLoading(true);
        //consultar por precio menor

        fetch(`/api/Productos/available`)
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                setLoading(false);
            });
    }

    const productList = productos.map(product =>{
        return <tr key={product.id}>
            <td style={{whiteSpace: 'nowrap'}} class="align-middle">{product.nombre}</td>
            <td class="align-middle">{product.categoria}</td>
            <td class="align-middle">{product.descripcion}</td>
            <td class="align-middle">{product.disponibilidad ? 'Si' : 'No'}</td>
            <td class="align-middle">{product.precio}</td>
            <td class="align-middle">{product.cantidadStock}</td>
            <td class="align-middle"><img src={product.url} width="80%" height="40%" ></img></td>
        </tr>
    });

    const searchParam = () => {

        let categorias = [];
        productos.map(producto => {
            categorias.push(producto.categoria);
        });
        let categoriasSet = [...new Set(categorias)];
        if (filterBy === 'category') {
            return (
                <select name="value" className="form-select" aria-label="Default select example"
                        onChange={handleChangeData}>
                    <option selected>Seleccionar categoría</option>
                    {categoriasSet.map(categoria => {
                        return <option value={categoria}>{categoria}</option>
                    })}
                </select>
            );
        } else {
            return (
                <Input type={paramType} name="value" placeholder="Parámetro de búsqueda" onChange={handleChangeData}/>
            );
        }
    }


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
                        <InputGroup>
                            {searchParam()}
                        <Button color="primary" disabled={data.length == 0 || filterBy.length == 0} onClick={handleClick}>Aceptar</Button>&ensp;
                        <Button color="success" onClick={handleClickAll}>Mostrar Todo</Button>
                        </InputGroup>
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
                        <th width="10%">Imágen</th>
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
