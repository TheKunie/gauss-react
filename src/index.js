import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap";
import {
  HashRouter as Router,
} from "react-router-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'



const initialState = {
  array1: [],
  array2: [],
  array3: [],
  stepLast: false
}



function reducer(state = initialState, action) {
  switch(action.type) {
    case "post/array1":
      return {...state, array1: action.payload}

    case "post/array2":
      return {...state, array2: action.payload}

    case "post/array3":
      return {...state, array3: action.payload} 

    case "post/stepLast":
      return {...state, stepLast: action.payload}
    default:
      return state
  }
  
}
  
const store = createStore(reducer)


console.log(store.getState())






ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
