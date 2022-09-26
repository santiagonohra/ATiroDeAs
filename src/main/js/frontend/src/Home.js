import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <ul>
                        <li>
                            <Button color="link"><Link to="/Productos/all">Listado de Productos</Link></Button>
                        </li>
                        <li>
                            <Button color="link"><Link to="/Productos/all">Catálogo de Productos</Link></Button>
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}
export default Home;