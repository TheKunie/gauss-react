import * as math from 'mathjs'


function typeStart(a) {
    if(a === 0) {return "0"}
    else if(math.isInteger(a) === true && a>0){a ="+"+ math.number(a)}
    else if(math.isInteger(a) === true ){a = math.number(a)}
    else if(math.typeOf(a) === 'Fraction'){a = math.format(a, { fraction: 'ratio' }) }
    else if(math.typeOf(a) === 'Fraction' && a > 0){a = "+" + math.format(a, { fraction: 'ratio' }) }
    
    else if (math.isInteger(a) === false) {
        a = math.fraction(a)
        return math.format(a, { fraction: 'ratio' })
    }
    return a
}


  
function typeString2(array1) {
    array1[0] = typeStart(array1[0]);
    array1[1] = typeStart(array1[1]);
    array1[2] = typeStart(array1[2]);
    array1[3] = typeStart(array1[3]);
  
    return array1
  
}

export {typeStart}
export default typeString2;