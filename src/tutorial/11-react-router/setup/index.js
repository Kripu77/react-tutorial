import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    // 1st setup router and the route with path which will then wrap the component and display the component as the path selected.
    //when we set the path as * it selects all which introduces another bug so here we use Switch which will provide us the feasibilty to select the 1st component which matches the path

    //do not place the Navbar component inside the switch
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route exact="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );};

export default ReactRouterSetup;
