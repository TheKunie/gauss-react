import stepOne from './stepOne';
import stepTwo from './stepTwo';

function stepWrapper(array1, array2, array3) {

    return(
        <div>
            {stepOne(array1, array2, array3)}
            
        </div>
    )
}

export default stepWrapper;