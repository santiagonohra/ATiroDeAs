import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';
import App from "./App";

class ProductList extends Component{
    constructor(props) {
        super(props);
        this.state = {products: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/Productos/all')
            .then(response => response.json())
            .then(data => this.setState({products: data}));
    }

    async remove(id){
        await fetch(`/api/Productos/delete?id=${id}`,{
            method: 'DELETE',
        }).then(() =>{
            let updatedProducts=[...this.state.products].filter(i => i.id !== id);
            this.setState({products: updatedProducts});
        });
    }

    render(){
        const {products, isLoading} = this.state;

        if(isLoading){
            return <p>Cargando...</p>;
        }

        const productList = products.map(product =>{
            return <tr key={product.id}>
                <td style={{whiteSpace: 'nowrap'}}>{product.nombre}</td>
                <td>{product.precio}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/api/Productos/?id="+product.id}>Editar</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(product.id)}>Eliminar</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return(
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/api/Productos/save">Agregar Producto</Button>
                    </div>
                    <h3>Productos</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Nombre</th>
                            <th width="30%">Precio</th>
                            <th width="40%">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

export default ProductList;