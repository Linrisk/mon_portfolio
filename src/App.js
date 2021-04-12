import './App.css';// eslint-disable-next-line
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch }
  from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import NavBar from './components/Navbar/Navbar';
import Particles from './components/Particles_Back';


const App =()=>{
return(

  
<div className="containerprincipal h-100 w-100 position-absolute">


  <div className="App_back"  style={{ position: 'relative', overflow: "hidden", width: "100%", height: "100%" }}>
  <div style={{ position: 'absolute', width: '100%', height: '100%'}}>
    <Particles height="100%" width="100%" />
  </div>

  
  
  <Router>
    
    <NavBar/>
    <main>
      <Switch>
        
      <Route path="/mon_portfolio/" exact>
        <Home />  
      </Route>
      <Route path="/mon_portfolio/about" exact>
        <About />
      </Route>
      <Route path="/mon_portfolio/contact" exact>
        <Contact />
      </Route>
      <Route path="/mon_portfolio/projects" exact>
        <Projects />
      </Route>
      <Route path="/mon_portfolio/services" exact>
        <Services />
      </Route>
      <Redirect to="/mon_portfolio/" />
      </Switch>
    </main>
  </Router>

  </div>
  </div>
);
}


export default App;
