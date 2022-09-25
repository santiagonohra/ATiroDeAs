import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './ProductList';
import ClientEdit from "./ProductoEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/api/Productos/all' exact={true} component={ClientList}/>
            <Route path='/api/Productos/?id=:id' component={ClientEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;