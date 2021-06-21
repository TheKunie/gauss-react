import * as math from 'mathjs';


// fraction prettifier

function frac(a) {

    if (math.isInteger(a) === false) {
        
        return math.format(a, { fraction: 'ratio' })
    }

    else {return math.number(a)}
    


}
export default frac;