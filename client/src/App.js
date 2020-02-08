import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar.js'
import Home from './Home.js'
import Login from './Login.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'

function App() {
  return (
    <Router>
      <div id="app">
        <NavBar/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
