import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const ProductoEdit = () => {
    const initialFormState = {
        nombre:'',
        categoria: '',
        descripcion: '',
        precio: '',
        cantidadStock: '',
        disponibilidad: ''
    };

    const [producto, setProducto] = useState(initialFormState);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if(id !== 'new'){
            fetch(`/api/Productos/${id}`)
                .then(response => response.json())
                .then(data => setProducto(data));
        }
    }, [id, setProducto]);

    const handleChange = (event) => {
        const {name, value} = event.target
        setProducto({...producto, [name]: value})
    }

    const isClickable = () => {
        return (producto.nombre.length === 0 || producto.categoria.length === 0 ||
            producto.descripcion.length === 0 || producto.disponibilidad.length === 0 ||
            producto.precio.length === 0 || producto.cantidadStock.length === 0);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        producto.disponibilidad = producto.disponibilidad === 'No' ? 'false' : 'true';
        await fetch('/api/Productos' + (producto.id ? '/' + producto.id : '/save'), {
            method: (producto.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });
        setProducto(initialFormState);
        navigate('/Productos/all');
    }

    const title = <h2>{producto.id ? 'Editar Producto' : 'Agregar Producto'}</h2>;

    return (<div>
        <AppNavbar/>
        <Container>
            {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="nombre">Nombre</Label>
                    <Input type="text" name="nombre" id="nombre" defaultValue={producto.nombre || ''} onChange={handleChange} autoComplete="nombre" placeholder="Wilson..."/>
                </FormGroup>
                <FormGroup>
                    <Label for="categoria">Categoria</Label>
                    <Input type="text" name="categoria" id="categoria" defaultValue={producto.categoria || ''} onChange={handleChange} autoComplete="categoria" placeholder="Raqueta..."/>
                </FormGroup>
                <FormGroup>
                    <Label for="descripcion">Descripcion</Label>
                    <Input type="text" name="descripcion" id="descripcion" defaultValue={producto.descripcion || ''} onChange={handleChange} autoComplete="descripcion" placeholder="Raqueta wilson de 220 gramos..."/>
                </FormGroup>
                <FormGroup>
                    <Label for="disponibilidad">Disponible</Label><br></br>
                    <Input class="form-check-input" type="radio" value="Si" name="disponibilidad" id="disponibilidad" onChange={handleChange} /> Sí &ensp; &ensp;
                    <Input class="form-check-input" type="radio" value="No" name="disponibilidad" id="disponibilidad" onChange={handleChange} /> No &ensp; &ensp;
                </FormGroup>
                <FormGroup>
                    <Label for="precio">Precio</Label>
                    <Input type="number" name="precio" id="precio" defaultValue={producto.precio || ''} onChange={handleChange} autoComplete="precio" placeholder="120000..."/>
                </FormGroup>
                <FormGroup>
                    <Label for="cantidadStock">Cantidad En Stock</Label>
                    <Input type="number" name="cantidadStock" id="cantidadStock" defaultValue={producto.cantidadStock || ''} onChange={handleChange} autoComplete="cantidadStock" placeholder="10..."/>
                </FormGroup>
                <FormGroup>
                    <Label for="url">URL de la Imágen</Label>
                    <Input type="text" name="url" id="url" defaultValue={producto.url || ''} placeholder="url.com/a/b/c.jpeg" onChange={handleChange} autoComplete="url"/>
                </FormGroup>
                <FormGroup>
                    <h2></h2>
                    <Button color="primary" type="submit" disabled={isClickable()} >Guardar</Button>{'  '}
                    <Button color="secondary" tag={Link} to="/Productos/all">Cancelar</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>);
};

export default ProductoEdit;
