import * as math from "mathjs";
import Display from "../display/Display";
import StepTwo from './stepTwo';
import typeString, {StringFactor} from '../formatters/typeString'
import typeNumber from '../formatters/typeNumber'


function StepOne(array1, array2, array3) {
  array1 = typeNumber(array1)
  array2 = typeNumber(array2)
  array3 = typeNumber(array3)

  var tex1 = "$"
  var tex2 = ""

    if(!math.isZero(array3[0])){
      var factor1 = math.divide(array3[0], array1[0]);

      array1 = typeString(array1)
      array2 = typeString(array2)
      array3 = typeString(array3)

    
      
      

      tex1 = `$
      \\begin{pmatrix}
      ${array1[0]} & ${array1[1]} & ${array1[2]} & ${array1[3]}\\\\
      ${array2[0]} & ${array2[1]} & ${array2[2]} & ${array2[3]}\\\\
      ${array3[0]} & ${array3[1]} & ${array3[2]} & ${array3[3]}\\end{pmatrix}`;

      

      array1 = typeNumber(array1)
      array2 = typeNumber(array2)
      array3 = typeNumber(array3)

      
      var factor1_string = StringFactor(factor1)

      array3 = math.subtract(array3, math.multiply(factor1, array1));


      array1 = typeString(array1)
      array2 = typeString(array2)
      array3 = typeString(array3)

      

      tex2 = `\\Large\\xRightarrow{R_{3}${factor1_string}R_{1}}\\normalsize`;


      array1 = typeNumber(array1)
      array2 = typeNumber(array2)
      array3 = typeNumber(array3)

      if(math.isZero(array3[0]) && math.isZero(array3[1]) && math.isZero(array3[2]) && math.isZero(array3[3])){
        return(
          
            <div className="row">
              <div className="col">
              <Display input={tex1+tex2+"$"} /> 
              </div>
            </div>
        )

        
      }
    
    }

    else{
      array1 = typeString(array1)
      array2 = typeString(array2)
      array3 = typeString(array3)
    }

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
      <Display input={tex + StepTwo(array1, array2, array3)} /> 
      </div>
    </div>
  );
}

export default StepOne;
