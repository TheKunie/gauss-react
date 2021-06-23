import StepOne from './stepOne';

import StepFour from './stepFour';

import  {useStoreState} from 'easy-peasy';









function StepWrapper(array1, array2, array3) {




    // TODO: Fix signs in steps.
    // TODO: Implement Inconsistent/Dependent logic.

    

    





    

    const localArray1 = useStoreState(state=>state.array1)
    const localArray2 = useStoreState(state=>state.array2)
    const localArray3 = useStoreState(state=>state.array3)
    const calcBool = useStoreState(state=>state.calculate)





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