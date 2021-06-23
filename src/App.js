import "./assets/css/App.css";
import Navbar from "./components/navbar/Navbar.js";
import InputView from "./components/inputView/inputView";
import Input from './components/inputView/input'
import "./components/display/katex.min.css";
import HelpPage from './components/HelpPage/helpPage'
import React from "react";
import {useState} from 'react';
import {
  Switch,
  Route
  
} from "react-router-dom";
import {useStoreState, useStoreActions} from 'easy-peasy'
import StepWrapper from "./components/Steps/stepsWrapper";






function App() {
  
  const title = useStoreState((store)=>store.title)
  const [titleInput, setTitleInput] = useState("")
  const setTitle = useStoreActions((store)=> store.setTitle)

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
            Les equacions han de ser en forma implícita.
          </p>
          <br />
          <Input/>
          <br/>
          <StepWrapper/>
        </div>
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