import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './style.css';

const App = () => (
  <>
    <Header />
    <Footer />
  </>
);

render(<App />, document.querySelector('#app'));
