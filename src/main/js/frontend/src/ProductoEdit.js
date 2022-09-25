import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

class ClientEdit extends Component {

    emptyItem = {
        nombre:'',
        categoria: '',
        descripcion: '',
        precio: '',
        cantidadStock: '',
        disponibilidad: ''

    }

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'save') {
            const producto = await (await fetch(`/api/Productos/?id=${this.props.match.params.id}`)).json();
            this.setState({item: producto});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/Productos' + (item.id ? '/update' : '/save'), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/Productos/all');
    }

    render(){
        const {item} = this.state;
        const title = <h2>{item.id ? 'Editar Producto': 'Agregar Producto'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Nombre</Label>
                        <Input type="text" name="name" id="name" value={item.nombre || ''} onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Categoria</Label>
                        <Input type="text" name="category" id="category" value={item.categoria || ''} onChange={this.handleChange} autoComplete="categoria"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Descripcion</Label>
                        <Input type="text" name="description" id="description" value={item.descripcion || ''} onChange={this.handleChange} autoComplete="description"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Prezio :3</Label>
                        <Input type="number" name="price" id="price" value={item.precio || ''} onChange={this.handleChange} autoComplete="price"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="stock">Cantidad En Stock</Label>
                        <Input type="number" name="stock" id="stock" value={item.cantidadStock || ''} onChange={this.handleChange} autoComplete="price"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="available">Disponibilidad</Label>
                        <Input type="text" name="available" id="available" value={item.disponibilidad || ''} onChange={this.handleChange} autoComplete="available"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Guardar</Button>{'  '}
                        <Button color="secondary" tag={Link} to="/api/Productos/all">Cancelar</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(ClientEdit);