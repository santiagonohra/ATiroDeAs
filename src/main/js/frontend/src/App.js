import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from './ProductList';
import ProductEdit from './ProductoEdit';
import ProductCatalog from './ProductCatalog';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='/Productos/all' exact={true} element={<ProductList/>}/>
                <Route path='/Productos/:id' element={<ProductEdit/>}/>
                <Route path='/Productos/catalog' element={<ProductCatalog/>}/>
            </Routes>
        </Router>
    )
}

export default App;