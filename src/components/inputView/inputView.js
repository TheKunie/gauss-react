import React from "react";
import Display from "../display/Display";
import PropTypes from "prop-types";
import FactorExtractor from "../factorExtractor/factorExtract";
import Operators from "../operators/Operators";
import MatrixDisplay from '../display/MatrixDisplay'

class InputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eq1: "x+y+z=2",
      eq2: "6x-4y+5z=31",
      eq3: "5x+2y+2z=13",
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
      accepted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.settingToEx = this.settingToEx.bind(this);
    this.Calculate = this.Calculate.bind(this);
    this.CalculateButton = this.CalculateButton.bind(this);
    this.buttonRenderer = this.buttonRenderer.bind(this)
  }


  settingToEx() {
    console.log("viewsteps" + this.state.viewSteps);
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
    this.setState({ viewSteps: true })
    
  }
  Calculate() {
    var array1 = this.state.eq1Ex;
    var array2 = this.state.eq2Ex;
    var array3 = this.state.eq3Ex;
    if (this.state.viewSteps === false) {
      return null;
    } else {
      return <div>{Operators(array1, array2, array3)}</div>;
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

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <label className="form-label">Equació 1</label>
              <input
                id="input-1"
                type="text"
                className="form-control"
                placeholder="Ax + By + Cz = D"
                value={this.state.eq1}
                onChange={this.handleChange}
                name="eq1"
              ></input>
            </div>
            <div className="col">
              <label className="form-label">Equació 2</label>
              <input
                id="input-2"
                type="text"
                className="form-control"
                placeholder="Ax + By + Cz = D"
                value={this.state.eq2}
                onChange={this.handleChange}
                name="eq2"
              ></input>
            </div>
            <div className="col">
              <label className="form-label">Equació 3</label>
              <input
                id="input-3"
                type="text"
                className="form-control"
                placeholder="Ax + By + Cz = D"
                value={this.state.eq3}
                onChange={this.handleChange}
                name="eq3"
              ></input>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col">
            <Display input={"$" + this.state.eq1 + "$"} />
          </div>
          <div className="col">
            <Display input={"$" + this.state.eq2 + "$"} />
          </div>
          <div className="col">
            <Display input={"$" + this.state.eq3 + "$"} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Display input={this.state.stringMatrix} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <button className="btn btn-success" onClick={this.handleSubmit}>
              Accepta
            </button>
          </div>
          <div className="col">
          {this.buttonRenderer()}
          </div>
        </div>
        <br></br>
        <div>{this.Calculate()}</div>
      </div>
    );
  }
}

//  5x+2y+1z=3

InputView.propTypes = {
  eq1: PropTypes.string,
  eq2: PropTypes.string,
  eq3: PropTypes.string,
  eq1Ex: PropTypes.string,
  eq2Ex: PropTypes.string,
  eq3Ex: PropTypes.string,
  equation: PropTypes.string,
  matrix: PropTypes.string,
  stringMatrix: PropTypes.string,
  array1: PropTypes.array,
  array2: PropTypes.array,
  array3: PropTypes.array
};

export default InputView;
