import "./assets/css/App.css";
import Navbar from "./components/navbar/Navbar.js";
import Input from './components/inputView/input'
import "./components/display/katex.min.css";
import HelpPage from './components/HelpPage/helpPage'
import React from "react";
import {
  Switch,
  Route
  
} from "react-router-dom";
import StepWrapper from "./components/Steps/stepsWrapper";
import Plotter from "./components/plot/Plot";
import Footer from './components/footer/footer.js'




function App() {
  
  

  

  return (
    
      <Switch>
      
      <Route exact path="/">
        <div className="App">
          
          
          <Navbar></Navbar>
          <br />
          <br />
          <h1 className="display-3" id="h1">
            Mètode de Gauss
          </h1>
          <p className="lead">
            Introdueix les equacions en forma implícita, prem el botó i obtendràs la solució.
          </p>
          
          <br />
          <Input/>
          <br/>
          <StepWrapper/>
          <br/>
           <Plotter/> 
        </div>
        <Footer/>
        </Route>
      <Route exact path="/help">
        <Navbar/>
        <HelpPage />

      </Route>
      <Route exact path="/visualize">
        

      </Route>
    </Switch>
  
  );
}

export default App;
