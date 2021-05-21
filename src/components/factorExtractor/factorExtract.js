import PropTypes from "prop-types";
import plusPopper from "./plusPopper";
import nan from "./nan";
import * as math from 'mathjs';
import fdec from '../formatters/fracDecider';






function FactorExtractor(string) {
  
  var str = string + "";
  var a = str.substring(0, str.lastIndexOf("x"));
  a = plusPopper(a);
  var b = str.substring(str.lastIndexOf("x") + 1, str.lastIndexOf("y"));
  b = plusPopper(b);
  var c = str.substring(str.lastIndexOf("y") + 1, str.lastIndexOf("z"));
  c = plusPopper(c);
  var d = str.substring(str.lastIndexOf("=") + 1, str.length);
  d = plusPopper(d);
  console.log("value: " + b);

  var vars = nan(str);
  console.log("vars: " + vars);
  if (vars[0] === true) {
    a = 0;
  }
  if (vars[1] === true) {
    b = 0;
  }
  if (vars[2] === true) {
    c = 0;
  }
  if (vars[3] === true) {
    d = 0;
  }

  if (a === "") {
    a = 1;
  }
  if (b === "") {
    b = 1;
  }
  if (c === "") {
    c = 1;
  }
  if (d === "") {
    d = 1;
  }


  var array = [a, b, c, d];

  array[0] = math.fraction(array[0])
  array[1] = math.fraction(array[1])
  array[2] = math.fraction(array[2])
  array[3] = math.fraction(array[3])

  
  console.log("-------------------------")

  array[0] = fdec(array[0])
  array[1] = fdec(array[1])
  array[2] = fdec(array[2])
  array[3] = fdec(array[3])

  console.log("asdasfas:  "+array[0])


  return array;
}

FactorExtractor.PropTypes = {
  string: PropTypes.string
};

FactorExtractor.defaultProps = {
  string: "Ax+By+Cz=D"
};

export default FactorExtractor;
