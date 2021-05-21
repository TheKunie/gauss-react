import * as math from "mathjs";
import Display from "../display/Display";
import stepTwo from './stepTwo';
import typeString from '../formatters/typeString'
import typeNumber from '../formatters/typeNumber'


function stepOne(array1, array2, array3) {


  var factor1 = math.divide(array3[0], array1[0]);

  array1 = typeString(array1)
  array2 = typeString(array2)
  array3 = typeString(array3)

 
  
  

  var tex1 = `$\\begin{pmatrix}
  ${array1[0]} & ${array1[1]} & ${array1[2]} & ${array1[3]}\\\\
  ${array2[0]} & ${array2[1]} & ${array2[2]} & ${array2[3]}\\\\
  ${array3[0]} & ${array3[1]} & ${array3[2]} & ${array3[3]}\\end{pmatrix}`;

  array1 = typeNumber(array1)
  array2 = typeNumber(array2)
  array3 = typeNumber(array3)

  array3 = math.subtract(array3, math.multiply(factor1, array1));


  var tex2 = `\\Large\\xRightarrow{R_{3}-${factor1}R_{1}}\\normalsize`;

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

  
  var tex = tex1 + tex2 + tex3;

  return (
    <div className="row">
      
      <div className="col">
      <Display input={tex + stepTwo(array1, array2, array3)} /> 
      </div>
    </div>
  );
}

export default stepOne;