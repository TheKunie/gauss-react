import * as math from 'mathjs'



const det = (array) => {
    let det =
      array[0][0] * (array[1][1] * array[2][2] - array[1][2] * array[2][1]) -
      array[0][1] * (array[1][0] * array[2][2] - array[2][0] * array[1][2]) +
      array[0][2] * (array[1][0] * array[2][1] - array[1][1] * array[2][0]);
    return det;
};

function EqType(array1, array2, array3){


  let a1 = array1;
  let a2 = array2;
  let a3 = array3;

  let obj = {consistent: false, dependent: false, inconsistent: false}
  let arrayA = [a1, a2, a3];

  a1.pop()
  a2.pop()
  a3.pop()


  console.log("arrays eqtype popped: ")
  console.log(a1)
  console.log(a2)
  console.log(a3)

  console.log("popped array: ")
  console.log(arrayA)
  console.log("determinant: "+math.det(arrayA))





  if(math.det(arrayA)===0){obj.dependent = true; obj.inconsistent = true; return obj}
  else{obj.consistent = true;console.log("eqtype determinant not 0"); return obj} 





}

export default EqType;