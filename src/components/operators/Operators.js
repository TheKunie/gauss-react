import multi from "./multi";
import math from "mathjs";
import TripleInformer from "../informers/tripleInformer";
import matrixReader from "./matrixReader";

function TripleZero(array1, array2, array3) {
  const tripleZero = [
    array1.every((val, i, arr) => val === arr[0]),
    array2.every((val, i, arr) => val === arr[0]),
    array3.every((val, i, arr) => val === arr[0])
  ];
  return tripleZero;
}

function Operators(array1, array2, array3) {
  var triples = TripleZero(array1, array2, array3);
  var tripInformer1;
  var tripInformer2;
  var tripInformer3;

  if (triples[0] === true) {
    var tripInformer = TripleInformer(array1, array2, array3, 1);
  }
  if (triples[1] === true) {
    var tripInformer = TripleInformer(array1, array2, array3, 2);
  }
  if (triples[2] === true) {
    var tripInformer = TripleInformer(array1, array2, array3, 3);
  }
  if (multi(array1, array2) !== false) {
    var i = multi(array1, array2);
    if (array1[0] > 0) {
      array1 = array1 - math.multiply(i, array2);
    }
    if (array1[0] < 0) {
      array1 = array1 + math.multiply(i, array2);
    }
  }
  multi(array1, array3);
}

export default Operators;
