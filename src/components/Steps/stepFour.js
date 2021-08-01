
import * as math from 'mathjs'
import Display from "../display/Display";


 const num = (a) => {
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
}; 
  
const string = (a, opt, opt2) => {
  if (math.isNaN(a)){return "NAN"}
  a = math.fraction(a);
/*   a = math.format(a, {precision: 5})
  a = math.fraction(a)  */
  
  
  if (math.isZero(a)) {
    if(opt2){return "\\,"}
    else if(opt){return "+0"}
    return 0;
  } else if (math.isInteger(a)) {
    if (math.smaller(a, 0)) {
      
      return a;
    } else {
      
      if(opt){a = "+" + a};
      return a;
    }
  } else{
    if (a.s===-1) {
      a = a.n+"/"+a.d 
      a = "-"+math.parse(a).toTex()
      return a;
    } 
    else if(a.s===1){
      a = a.n+"/"+a.d 
      a = math.parse(a).toTex()
      if(opt){a="+"+a}
      return a;
    }
  }
}

  
  
 const numArr = (array) => {
    array[0] = num(array[0]);
    array[1] = num(array[1]);
    array[2] = num(array[2]);
    array[3] = num(array[3]);
    return array;
}; 
  
const Zero =(a)=>{
  let b = math.number("5e-10")
  if(math.smaller(a, 0)){b = math.number("-5e-10")}

  let temp = math.divide(a, b)
  if(math.smaller(temp, 1)){a=0}
  
  return a
}





function StepFour(array1, array2, array3) {

      if (!math.isZero(array3[0])){
        // step One
        var factor1 = math.divide(array3[0], array1[0]);
        array3 = math.subtract(array3, math.multiply(factor1, array1));
      }

      if(!math.isZero(array2[0])){
        // step Two
        var factor2 = math.divide(array2[0], array1[0]);
        array2 = math.subtract(array2, math.multiply(factor2, array1));
      }

      if(!math.deepEqual(array2, math.zeros(4))){
        if(!math.isZero(array3[1])){
        // step Three
        var factor3 = math.divide(array3[1], array2[1]);
        array3 = math.subtract(array3, math.multiply(factor3, array2));
        }
      }


      if(math.deepEqual(array2, math.zeros(4)) && math.deepEqual(array3, math.zeros(4))){

        //! Two rows all zero


        return null
      }






      if(math.isZero(Zero(array3[2])) && !math.isZero(Zero(array3[3]))){
        

        let tex1 = `\\text{Contradicció}: 0z \\not = ${string(array3[3])}`

        let texInc = tex1
  
        return(
          <>
            <div className="row">
              <div className="col">
                <Display input={texInc}/>
  
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Aquest sistema no té solució.</h3>
              </div>
            </div>
  
  
  
          </>
        )
      }

      if(math.isZero(Zero(array2[2])) && !math.isZero(Zero(array2[3]))){
        

        let tex1 = `\\text{Contradicció}: 0z \\not = ${string(array2[3])}`

        let texInc = tex1
  
        return(
          <>
            <div className="row">
              <div className="col">
                <Display input={texInc}/>
  
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Aquest sistema no té solució.</h3>
              </div>
            </div>
  
  
  
          </>
        )
      }

      else if(math.deepEqual(array2, math.zeros(4))){

        console.log(array1)
        console.log(array2)
        console.log(array3)


        let temp1;
        let temp2;
        let temp3;
        let temp4;
        let temp5;
        let temp6;
        let temp7;
        let temp8;
        let temp9;

        temp1 = math.multiply(array3[2], -1);
        temp7 = math.divide(math.add(temp1, array3[3]), array3[1])

        let tex1 = ` z=\\lambda `;

        let tex2 = `  ${string(array3[1])}y ${string(array3[2], true)}\\lambda = ${string(array3[3])};
                      ${string(array3[1])}y = ${string(temp1, false, true)}\\lambda ${string(array3[3], true, true)};\\\\
                      y = \\cfrac{${string(temp1)} ${string(array3[3], true, true)}}{${string(array3[1])}}\\lambda = ${string(temp7)}\\lambda
                    `;

        temp2 = math.multiply(array1[1], -1);
        temp3 = math.multiply(array1[2], -1);
        temp4 = math.multiply(temp2, temp1);
        temp5 = math.multiply(temp2, array3[3]);
        temp6 = math.multiply(array1[0], array3[1]);
        temp8 = math.multiply(temp7, temp2)
        temp9 = math.add(temp8, temp3)

        let tex3 = ` ${string(array1[0])}x ${string(array1[1], true)}(${string(temp7)}\\lambda)
                      ${string(array1[2], true)}\\lambda = ${string(array1[3], false)}; 
                      ${string(array1[0])}x = ${string(temp2)}(${string(temp7)}\\lambda) ${string(temp3, true)}\\lambda;\\\\
                      ${string(array1[0])}x = ${string(temp8)}\\lambda ${string(temp3, true)}\\lambda;
                      ${string(array1[0])}x = ${string(temp9)}\\lambda;
                      x = ${string(math.divide(temp9, array1[0]))}\\lambda
                    `;


        return (
          <>
            <h2>Dependent</h2>
            <div className="row">
              <div className="col">
                <Display input={tex1}/>
              </div>
              <div className="col">
                <Display input={tex2}/>
              </div>
              <div className="col">
                <Display input={tex3}/>
              </div>
            </div>
        
          </>)
      }

      else if(math.deepEqual(array3, math.zeros(4))){


        if(math.deepEqual(array3, math.zeros(4))){

          console.log(array1)
          console.log(array2)
          console.log(array3)
      
      
          let temp1;
          let temp2;
          let temp3;
          let temp4;
          let temp5;
          let temp6;
          let temp7;
          let temp8;
          let temp9;
      
          temp1 = math.multiply(array2[2], -1);
          temp7 = math.divide(math.add(temp1, array2[3]), array2[1])
      
          let tex1 = ` z=\\lambda `;
      
          let tex2 = `  ${string(array2[1])}y ${string(array2[2], true)}\\lambda = ${string(array2[3])};
                        ${string(array2[1])}y = ${string(temp1, false, true)}\\lambda ${string(array2[3], true, true)};\\\\
                        y = \\cfrac{${string(temp1)} ${string(array2[3], true, true)}}{${string(array2[1])}}\\lambda = ${string(temp7)}\\lambda
                      `;
      
          temp2 = math.multiply(array1[1], -1);
          temp3 = math.multiply(array1[2], -1);
          temp4 = math.multiply(temp2, temp1);
          temp5 = math.multiply(temp2, array2[3]);
          temp6 = math.multiply(array1[0], array2[1]);
          temp8 = math.multiply(temp7, temp2)
          temp9 = math.add(temp8, temp3)
      
          let tex3 = ` ${string(array1[0])}x ${string(array1[1], true)}(${string(temp7)}\\lambda)
                        ${string(array1[2], true)}\\lambda = ${string(array1[3], false)}; 
                        ${string(array1[0])}x = ${string(temp2)}(${string(temp7)}\\lambda) ${string(temp3, true)}\\lambda;\\\\
                        ${string(array1[0])}x = ${string(temp8)}\\lambda ${string(temp3, true)}\\lambda;
                        ${string(array1[0])}x = ${string(temp9)}\\lambda;
                        x = ${string(math.divide(temp9, array1[0]))}\\lambda
                      `;
      
      
          return (
            <>
              <h2>Dependent</h2>
              <div className="row">
                <div className="col">
                  <Display input={tex1}/>
                </div>
                <div className="col">
                  <Display input={tex2}/>
                </div>
                <div className="col">
                  <Display input={tex3}/>
                </div>
              </div>
          
            </>)
        }
        
      }
        
      


      else{


      var z = array3[3]/array3[2]

      var tex1 = `${string(array3[2])}z=${string(array3[3])};\\bold z=${string(z)}`

      var temp1 = math.multiply(z, array2[2])
      var temp2 = math.subtract(array2[3], temp1)
      var y = math.subtract(array2[3], temp1)/array2[1]

      var tex2 = `${string(array2[1])}y${string(array2[2], true)}\\cdot (${string(z)})=${string(array2[3])};${string(array2[1])}y=${string(temp2)};\\bold y=${string(y)}`

      temp1 = math.add(math.multiply(array1[1], y), math.multiply(array1[2], z))
      temp2 = math.subtract(array1[3], temp1)
      var x = math.divide(temp2, array1[0])

      var tex3 = ` ${string(array1[0])}x ${string(array1[1], true)}\\cdot (${string(y)})${string(array1[2], true)}\\cdot (${string(z)})=
      ${string(array1[3])};\\\\${string(array1[0])}x${string(temp1, true)}=${string(array1[3])};
      \\\\${string(array1[0])}x=${string(temp2)};\\bold x=${string(x)}`


      return(
          <div className="row">
          <div className="col">
          <Display input={tex1}/>
          </div>
          <div className="col">
          <Display input={tex2}/>
          </div>
          <div className="col">
          <Display input={tex3}/>
          </div>
          </div>
      )
      }



}




export default StepFour;