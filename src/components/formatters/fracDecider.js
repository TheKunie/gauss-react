import * as math from 'mathjs';

// decides wether to return number or fraction 


function fdec(a){
    if (math.isInteger(a) === false) {return math.fraction(a)}
    else if(math.isZero(a) === true) {return 0}
    else {return math.number(a)}
}

export default fdec;