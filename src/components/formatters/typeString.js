import * as math from 'mathjs'


function typeStart(a) {
    if(a === 0) {return 0}
    else if(math.isInteger(a) === true){return math.number(a)}
    else if(math.typeOf(a) === 'Fraction'){return math.format(a, { fraction: 'ratio' }) }
    else if (math.isInteger(a) === false) {
        a = math.fraction(a)
        return math.format(a, { fraction: 'ratio' })
    }
    
    else{return a}
}



const StringFactor = (a) => {
    a = math.fraction(a); 
    
    
    if (math.isZero(a)) {
      if(true){return "+0"}
      return 0;
    } else if (math.isInteger(a)) {
      if (math.smaller(a, 0)) {
          a = a.toString()
          a = a.substr(1)
          a = "+"+a
        
        return a;
      } else {
        
        a = "-" + a
        return a;
      }
    } else{
      if (a.s===-1) {
        a = a.n+"/"+a.d 
        a = "+"+math.parse(a).toTex()
        return a;
      } 
      else if(a.s===1){
        a = a.n+"/"+a.d 
        a = "-"+math.parse(a).toTex()
        return a;
      }
    }
  }








  
function typeString(array1) {
    array1[0] = typeStart(array1[0]);
    array1[1] = typeStart(array1[1]);
    array1[2] = typeStart(array1[2]);
    array1[3] = typeStart(array1[3]);
  
    return array1
  
}

export {typeStart};
export {StringFactor};
export default typeString;