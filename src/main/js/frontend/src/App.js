import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GroupList from './ProductList';
import GroupEdit from './ProductoEdit';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='/Productos/all' exact={true} element={<GroupList/>}/>
                <Route path='/Productos/:id' element={<GroupEdit/>}/>
            </Routes>
        </Router>
    )
}

export default App;