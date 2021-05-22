import "./assets/css/App.css";
import Navbar from "./components/navbar/Navbar.js";
import StepWrapper from './components/Steps/stepsWrapper'
import InputView from "./components/inputView/inputView";


import "./components/display/katex.min.css";
import HelpPage from './components/HelpPage/helpPage'
import React from "react";
import {
  Switch,
  Route
  
} from "react-router-dom";




function App() {
  
  return (
    
      <Switch>
      <Route exact path="/">
        <div className="App">
          <Navbar></Navbar>
          <br />
          <br />
          <h1 className="display-3" id="h1">
            Gauss
          </h1>
          <p className="lead">
            Ràpid utilitzant el mètode de <strong>Gauss</strong>. Visual mitjançant {" "}
            <strong>KaTeX</strong>.
          </p>
          <br />
          <InputView />
          <br/>
          
        </div>
      </Route>
      <Route path="/help">
        <HelpPage />

      </Route>
    </Switch>
  
  );
}

export default App;
