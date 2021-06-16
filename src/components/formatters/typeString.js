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

function StringFactor(a) {
    if(a === 0) {return 0}
    else if(math.isInteger(a) === true){
       if (a > 0){
           a = math.number(a)
           return "+"+a
        }
       
    }
    else if(math.typeOf(a) === 'Fraction'){
        if(a > 0){
            return "+"+math.format(a, { fraction: 'ratio' })
        }
        else{
            return math.format(a, { fraction: 'ratio' })
        }
         }
    else if (math.isInteger(a) === false) {
        a = math.fraction(a)
        StringFactor(a)
    }
    
    else{return a}
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