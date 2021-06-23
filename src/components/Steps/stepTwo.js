import * as math from "mathjs";
import typeString, {StringFactor} from '../formatters/typeString'
import typeNumber from '../formatters/typeNumber'
import StepThree from './stepThree'



function StepTwo(array1, array2, array3) {
  var factor1 = math.divide(array2[0], array1[0]);
  



  array2 = math.subtract(array2, math.multiply(factor1, array1));

  
  var factor1_string = StringFactor(factor1)

  var tex2 = `\\Large\\xRightarrow{R_{2}${factor1_string}R_{1}}\\normalsize`;

  array1 = typeString(array1)
  array2 = typeString(array2)
  array3 = typeString(array3)

  var tex3 = `\\begin{pmatrix}
  ${array1[0]} & ${array1[1]} & ${array1[2]} & ${array1[3]}\\\\
  ${array2[0]} & ${array2[1]} & ${array2[2]} & ${array2[3]}\\\\
  ${array3[0]} & ${array3[1]} & ${array3[2]} & ${array3[3]}\\end{pmatrix}`;

  array1 = typeNumber(array1)
  array2 = typeNumber(array2)
  array3 = typeNumber(array3)

  var tex = tex2 + tex3;

  return (tex + StepThree(array1, array2, array3));
}

export default StepTwo;
