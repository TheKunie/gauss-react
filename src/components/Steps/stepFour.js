import * as math from 'mathjs'
import typeNumber, {typeSingular} from '../formatters/typeNumber'
import typeString2, {typeStart} from '../formatters/typeString2'
import Display from "../display/Display";


function StepFour(array1, array2, array3) {

    console.log(array1, array2, array3)
    // step One
    var factor1 = math.divide(array3[0], array1[0]);
    array3 = math.subtract(array3, math.multiply(factor1, array1));

    // step Two
    var factor2 = math.divide(array2[0], array1[0]);
    array2 = math.subtract(array2, math.multiply(factor2, array1));

    // step Three
    var factor3 = math.divide(array3[1], array2[1]);
    array3 = math.subtract(array3, math.multiply(factor3, array2));

    console.log(array1, array2, array3)





    var z = array3[3]/array3[2]

    
    array1 = typeString2(array1)
    array2 = typeString2(array2)
    array3 = typeString2(array3)
    

    console.log(array1, array2, array3)

    var tex1 = `$0x+0y+${array3[2]}z=${array3[3]}; z=${z}$`

    array1 = typeNumber(array1)
    array2 = typeNumber(array2)
    array3 = typeNumber(array3)
    
    

    var temp1 = math.multiply(z, array2[2])
    var temp2 = math.subtract(array2[3], temp1)
    var y = math.subtract(array2[3], temp1)/array2[1]

    array1 = typeString2(array1)
    array2 = typeString2(array2)
    array3 = typeString2(array3)
    temp1 = typeStart(temp1)
    temp2 = typeStart(temp2)




    var tex2 = `$0x${array2[1]}y${array2[2]}\\cdot (${z})=${array2[3]};${array2[1]}y=${temp2};y=${y}$`

    array1 = typeNumber(array1)
    array2 = typeNumber(array2)
    array3 = typeNumber(array3)
    

    temp1 = math.add(math.multiply(array1[1], y), math.multiply(array1[2], z))
    temp2 = math.subtract(array1[3], temp1)
    var x = math.divide(temp2, array1[0])

    array1 = typeString2(array1)
    array2 = typeString2(array2)
    array3 = typeString2(array3)





    var tex3 = `$ ${array1[0]}x ${array1[1]}\\cdot (${y})${array1[2]}\\cdot (${z})=${array1[3]};\\\\${array1[0]}x${temp1}=${array1[3]};
    \\\\${array1[0]}x=${temp2}; x=${x}$`

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