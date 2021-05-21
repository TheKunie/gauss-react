import React from "react";
import Display from "../display/Display";
import PropTypes from "prop-types";
import FactorExtractor from "../factorExtractor/factorExtract";
import Operators from "../operators/Operators";

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
      stringMatrix: "Enter the equations and press accept.",
      array1: ["a", "b", "c", "d"],
      array2: ["e", "f", "g", "h"],
      array3: ["j", "k", "l", "i"],
      viewSteps: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.MatrixDisplay = this.MatrixDisplay.bind(this);
    this.settingToEx = this.settingToEx.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }

  MatrixDisplay(array1, array2, array3) {
    //    var array1 = this.state.array1;
    //    var array2 = this.state.array2;
    //    var array3 = this.state.array3;

    var a = array1[0];
    var b = array1[1];
    var c = array1[2];
    var d = array1[3];

    var e = array2[0];
    var f = array2[1];
    var g = array2[2];
    var h = array2[3];

    var i = array3[0];
    var j = array3[1];
    var k = array3[2];
    var l = array3[3];

    var matrix = `$\\begin{pmatrix}${a} & ${b} & ${c} & ${d}\\\\${e} & ${f} & ${g} & ${h}\\\\${i} & ${j} & ${k} & ${l}\\\\\\end{pmatrix}$`;

    return matrix;
  }
  settingToEx() {
    console.log("viewsteps" + this.state.viewSteps);
    this.setState(
      {
        stringMatrix: this.MatrixDisplay(
          this.state.eq1Ex,
          this.state.eq2Ex,
          this.state.eq3Ex
        )
      },
      () => {
        console.log("stringMatrix: " + this.state.stringMatrix);
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
        viewSteps: true
      },
      () => {
        this.settingToEx();
      }
    );
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

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <label className="form-label">Equation 1</label>
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
              <label className="form-label">Equation 2</label>
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
              <label className="form-label">Equation 3</label>
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
              Accept
            </button>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={this.Calculate}>
              Calculate
            </button>
          </div>
        </div>
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
