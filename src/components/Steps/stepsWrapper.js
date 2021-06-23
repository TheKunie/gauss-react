import StepOne from './stepOne';

import StepFour from './stepFour';
import * as math from 'mathjs';
import  {useStoreState} from 'easy-peasy';


const det = (array) => {
    let det =
      array[0][0] * (array[1][1] * array[2][2] - array[1][2] * array[2][1]) -
      array[0][1] * (array[1][0] * array[2][2] - array[2][0] * array[1][2]) +
      array[0][2] * (array[1][0] * array[2][1] - array[1][1] * array[2][0]);
    return det;
};






function StepWrapper(array1, array2, array3) {




    // TODO: Fix signs in steps.
    // TODO: Implement Inconsistent/Dependent logic.

    

    





    

    const localArray1 = useStoreState(state=>state.array1)
    const localArray2 = useStoreState(state=>state.array2)
    const localArray3 = useStoreState(state=>state.array3)
    const calcBool = useStoreState(state=>state.calculate)

    let array1Det = useStoreState((store)=>store.detArray1)
    let array2Det = useStoreState((store)=>store.detArray2)
    let array3Det = useStoreState((store)=>store.detArray3)
    let vectorB = useStoreState((store) =>store.vectorB)



    //* Return statement

    if(!calcBool){return null}
    else if(calcBool){
        
        
      return (
          <div>
            <hr/>
              <br/>
              <div className="row">
                  <div className="col">
                      {StepOne(localArray1, localArray2, localArray3)}
                  </div>
              
              </div>
              <br></br>    
              {StepFour(localArray1, localArray2, localArray3)}
          </div> 
          )
        
    }
    
    





}

export default StepWrapper;