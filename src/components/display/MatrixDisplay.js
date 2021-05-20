import React from "react";
import Display from "./Display";
import PropTypes from "prop-types";

function MatrixDisplay(array1, array2, array3) {
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

  var matrix =
    "$" +
    "\\begin{bmatrix}" +
    a +
    " & " +
    b +
    " & " +
    c +
    " & " +
    d +
    "\\\\" +
    e +
    " & " +
    f +
    " & " +
    g +
    " & " +
    h +
    "\\\\" +
    i +
    " & " +
    j +
    " & " +
    k +
    " & " +
    l +
    "\\\\\\end{bmatrix}" +
    "$";

  return matrix;
}

MatrixDisplay.propTypes = {
  array1: PropTypes.array,
  array2: PropTypes.array,
  array3: PropTypes.array
};

export default MatrixDisplay;
