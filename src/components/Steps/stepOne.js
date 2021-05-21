import * as math from "mathjs";
import Display from "../display/Display";

function stepOne(array1, array2, array3) {
  var factor1 = math.divide(array3[0], array1[0]);
  console.log(factor1);

  var tex1 = `$\\begin{pmatrix}
  ${array1[0]} & ${array1[1]} & ${array1[2]} & ${array1[3]}\\\\
  ${array2[0]} & ${array2[1]} & ${array2[2]} & ${array2[3]}\\\\
  ${array3[0]} & ${array3[1]} & ${array3[2]} & ${array3[3]}\\end{pmatrix}`;

  array3 = math.add(array3, -math.multiply(factor1, array1));
  console.log("modified array3:  " + array3);

  var tex2 = `\\xRightarrow{R_{3}-${factor1}R_{1}}`;

  var tex3 = `\\begin{pmatrix}
  ${array1[0]} & ${array1[1]} & ${array1[2]} & ${array1[3]}\\\\
  ${array2[0]} & ${array2[1]} & ${array2[2]} & ${array2[3]}\\\\
  ${array3[0]} & ${array3[1]} & ${array3[2]} & ${array3[3]}\\end{pmatrix}$`;

  return (
    <div>
      <Display input={tex1 + tex2 + tex3} /> 
    </div>
  );
}

export default stepOne;
