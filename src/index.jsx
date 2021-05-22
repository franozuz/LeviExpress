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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/reservation">
          <Header />
          <Reservation />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
