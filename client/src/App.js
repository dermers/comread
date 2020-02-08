import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Account from './components/Account.js'
import Essay from './components/Essay.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'

function App() {
  return (
    <Router>
      <NavBar/>
      <div id="app">
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/essay' component={Essay} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
