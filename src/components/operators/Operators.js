import multi from "./multi";
import matrixTripleZero from "./matrixTripleZero";
import matrixReader from "./matrixReader";

function Operators(array1, array2, array3) {
  if (multi(array1, array2) !== false) {
    var i = multi(array1, array2);
  }
  multi(array1, array3);
}

export default Operators;
