
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
  
const string = (a, opt) => {
  a = math.fraction(a); 
  
  
  if (math.isZero(a)) {
    if(opt){return "+0"}
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
  






function StepFour(array1, array2, array3) {



    //TODO: FIX STRING()







    
    // step One
    var factor1 = math.divide(array3[0], array1[0]);
    array3 = math.subtract(array3, math.multiply(factor1, array1));

    // step Two
    var factor2 = math.divide(array2[0], array1[0]);
    array2 = math.subtract(array2, math.multiply(factor2, array1));

    // step Three
    var factor3 = math.divide(array3[1], array2[1]);
    array3 = math.subtract(array3, math.multiply(factor3, array2));


    var z = array3[3]/array3[2]

  

    var tex1 = `$${string(array3[2])}z=${string(array3[3])}; z=${string(z)}$`


    



    
    
    

    var temp1 = math.multiply(z, array2[2])
    var temp2 = math.subtract(array2[3], temp1)
    var y = math.subtract(array2[3], temp1)/array2[1]


    
    




    var tex2 = `$${string(array2[1])}y${string(array2[2], true)}\\cdot (${string(z)})=${string(array2[3])};${string(array2[1])}y=${string(temp2)};y=${string(y)}$`


    

    temp1 = math.add(math.multiply(array1[1], y), math.multiply(array1[2], z))
    temp2 = math.subtract(array1[3], temp1)
    var x = math.divide(temp2, array1[0])






    var tex3 = `$ ${string(array1[0])}x ${string(array1[1], true)}\\cdot (${string(y)})${string(array1[2], true)}\\cdot (${string(z)})=
    ${string(array1[3])};\\\\${string(array1[0])}x${string(temp1, true)}=${string(array1[3])};
    \\\\${string(array1[0])}x=${string(temp2)}; x=${string(x)}$`


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




export default StepFour;