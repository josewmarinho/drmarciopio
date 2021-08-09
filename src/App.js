import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './components/pages/Inicio';
import Sobre from './components/pages/Sobre';
import Procedures from './components/pages/Procedures';
import Clinica from './components/pages/Clinica';
import Contato from './components/pages/Contato';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/procedimentos' component={Procedures} />
        <Route path='/clinica' component={Clinica} />
        <Route path='/contato' component={Contato} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
