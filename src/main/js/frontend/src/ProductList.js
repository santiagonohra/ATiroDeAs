import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);

        fetch('/api/Productos/all')
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`/api/Productos/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedProducts = [...productos].filter(i => i.id !== id);
            setProductos(updatedProducts);
        });
    }

    if(loading){
        return <p>Cargando...</p>
    }

    const productList = productos.map(product =>{
        return <tr key={product.id}>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/Productos/"+product.id}>Editar</Button>
                </ButtonGroup>
            </td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="danger" onClick={() => remove(product.id)}>Eliminar</Button>
                </ButtonGroup>
            </td>
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

                <h2></h2>
                <h2>Listado de Productos</h2>
                <div className="float-end">
                    <Button color="success"  tag={Link} to="/Productos/new">Agregar Producto</Button>
                </div>
                <Button color="link"><Link to="/">Regresar</Link></Button>
                <Table className="table table-bordered mt-4">
                    <thead>
                    <tr>
                        <th className="text-center" width="2%">Editar</th>
                        <th className="text-center" width="2%">Eliminar</th>
                        <th className="text-center" width="8%">Nombre</th>
                        <th className="text-center" width="8%">Categoría</th>
                        <th className="text-center" width="22%">Descripción</th>
                        <th className="text-center" width="3%">Disponible</th>
                        <th className="text-center" width="5%">Precio</th>
                        <th className="text-center" width="5%">Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );

};

export default ProductList;

/*
class ProductList1 extends Component{
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

*/