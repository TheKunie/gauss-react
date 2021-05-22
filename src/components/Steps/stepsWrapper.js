import StepOne from './stepOne';
import StepFour from './stepFour';



function StepWrapper(array1, array2, array3) {

    return(
        
        <div>
            <div className="row">
                <div className="col">
                {StepOne(array1, array2, array3)}
                </div>
                
            </div>
            <br></br>    
            {StepFour(array1, array2, array3)}
        </div>

    )
}

export default StepWrapper;