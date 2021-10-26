import React from 'react' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Error from "./Error"
import Navbar from "./Navbar"
import Home from "./Home"
import People from "./People"
import Person from "./Person"
import About from "./About"


const index = () => {
  return (
   <main>
<Router>
  <Navbar/>
  <Switch>
    <Route exact path="/">
      <Home/>

    </Route>
    <Route  path="/about">
      <About/>
    </Route>
    <Route path="/people">
      <People/>
    </Route>
    <Route path='/:id' children={<Person/>}></Route>
    <Route path="*">
      <Error/>
    </Route>
    
  </Switch>
</Router>


   </main>)
}

export default index
