import React from "react";
import Display from "../display/Display";

import FactorExtractor from "../factorExtractor/factorExtract";
import StepWrapper from '../Steps/stepsWrapper'
import MatrixDisplay from '../display/MatrixDisplay';











class InputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eq1: "1x-2y+3z=9",
      eq2: "-1x+3y-1z=-6",
      eq3: "2x-5y+5z=17",
      eq1Ex: [],
      eq2Ex: [],
      eq3Ex: [],
      equation: "",
      matrix: "",
      stringMatrix: "Introdueix les equacions.",
      array1: ["a", "b", "c", "d"],
      array2: ["e", "f", "g", "h"],
      array3: ["j", "k", "l", "i"],
      viewSteps: false,
      accepted: false,
      renderAccept: true,
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.settingToEx = this.settingToEx.bind(this);
    this.Calculate = this.Calculate.bind(this);
    this.CalculateButton = this.CalculateButton.bind(this);
    this.buttonRenderer = this.buttonRenderer.bind(this);
    this.acceptButtonRenderer = this.acceptButtonRenderer.bind(this);
    this.renderers = this.renderers.bind(this);
    
  }


  settingToEx() {
    
    this.setState(
      {
        stringMatrix: MatrixDisplay(
          this.state.eq1Ex,
          this.state.eq2Ex,
          this.state.eq3Ex
        ),
        accepted: true
      },
      () => {
      this.buttonRenderer() ;
      }
    );
  }
  handleChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }
  renderers(){
    this.Calculate()
    this.acceptButtonRenderer()
  }

  handleSubmit() {
    this.setState(
      {
        eq1Ex: FactorExtractor(this.state.eq1),
        eq2Ex: FactorExtractor(this.state.eq2),
        eq3Ex: FactorExtractor(this.state.eq3),
        
      },
      () => {
        this.settingToEx();
      }
    );
  }
  CalculateButton() {
    this.setState({ viewSteps: true, accepted: false, renderAccept: false }, ()=> {this.renderers()})
    
  }
  Calculate() {
    var array1 = this.state.eq1Ex;
    var array2 = this.state.eq2Ex;
    var array3 = this.state.eq3Ex;
    if (this.state.viewSteps === false) {
      return null;
    } else {
      
      return <div>{StepWrapper(array1, array2, array3)}</div>;
    }
    
  }
  buttonRenderer() {
    if (this.state.accepted ===  false) {return null}
    else if(this.state.accepted === true) {
      return ( <button className="btn btn-primary" onClick={this.CalculateButton}>
        Calcula!
      </button>)
      
    }
  }
  acceptButtonRenderer() {
    if(this.state.renderAccept === true) { return <button className="btn btn-success" onClick={this.handleSubmit}>Accepta</button>}
    else {return <div><h1 className="display-6">Solució</h1><hr></hr></div>}
  }

  

  render() {
    return (
      <div>
        <div className="container-fluid">
          
        </div>
        <br />


        <div className="row">
          <div className="col">
            <Display input={this.state.stringMatrix} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
          {this.acceptButtonRenderer()}
          <br></br>
          <br></br>
         
          {this.buttonRenderer()}
          </div>
        </div>
        <br></br>
        <div>{this.Calculate()}</div>
      </div>
    );
  }
}



export default InputView;
