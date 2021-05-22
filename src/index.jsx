import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Reservation from './Reservation';
import './style.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/reservation">
        <Reservation />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));
