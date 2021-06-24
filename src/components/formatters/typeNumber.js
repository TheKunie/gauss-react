import * as math from 'mathjs'
import fdec from './fracDecider'



/* const num = (a) => {
    a = math.fraction(a);
    if (math.isZero(a)) {
      return 0;
    } 
    else if (math.isInteger(a)) {
      return math.number(a);
    } 
    else {
      return a;
    }
}; */

function typeNumber(array1) {
    array1[0] = math.fraction(array1[0]);
    array1[1] = math.fraction(array1[1]);
    array1[2] = math.fraction(array1[2]);
    array1[3] = math.fraction(array1[3]);
  
    array1[0] = fdec(array1[0]);
    array1[1] = fdec(array1[1]);
    array1[2] = fdec(array1[2]);
    array1[3] = fdec(array1[3]);
  
  
    return array1
  
}

function typeSingular(a) {
    a = math.fraction(a);
    a = fdec(a);
}

export {typeSingular};

export default typeNumber;