import StepOne from './stepOne';
import StepInconsistent from './stepInconsistent';
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

    var firstRender = false;

    





    

    const localArray1 = useStoreState(state=>state.array1)
    const localArray2 = useStoreState(state=>state.array2)
    const localArray3 = useStoreState(state=>state.array3)
    const calcBool = useStoreState(state=>state.calculate)

    let array1Det = useStoreState((store)=>store.detArray1)
    let array2Det = useStoreState((store)=>store.detArray2)
    let array3Det = useStoreState((store)=>store.detArray3)
    let vectorB = useStoreState((store) =>store.vectorB)

    


    const EqType = () => {
        let arrayA = [array1Det, array2Det, array3Det]
        let determinant = math.det(arrayA);
        let obj = {
          consistent: false,
          inconsistent: {bool: false, rowIndex: []},
          dependent: { bool: false, rowIndex: [] }
        };
      
        
      
        if (determinant !== 0) {
          obj.consistent = true;
          return obj
        }
      
        for (let i = 0; i < 3; i++) {
            if (
            math.deepEqual(
              math.dotMultiply(vectorB[i], arrayA[(i + 1) % 3]),
              math.dotMultiply(vectorB[(i + 1) % 3], arrayA[i]))
            ) {
            obj.dependent.bool = true;
            obj.dependent.rowIndex = math.sort([i%3, (i+1)%3]);
            
          }
        }
      
        for(let i = 0; i<3; i++){
            if(
                math.deepEqual(math.cross(arrayA[i%3], arrayA[(i+1)%3]),[0, 0, 0])){

              if(!math.deepEqual(vectorB[i%3], vectorB[(i+1)%3])){
                  
                  obj.dependent.bool = false;
                  obj.dependent.rowIndex = [];
                  obj.inconsistent.bool = true;
                  obj.inconsistent.rowIndex = (i+1)%3
                
              }
            }
          }

        return obj
      }
      

    

    const selectiveRender = (array1, array2, array3, condObj) => {
        
        if( condObj.consistent === true){
            return (
            <div>
              <hr/>
                <div className="row">
                  
                    <div className="col">
                        <h1>Consistent</h1>
                    </div>
                    
                </div>
                <br/>
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
        else if (condObj.inconsistent.bool){

            return(
                <>
                <h1>Inconsistent</h1>
                <br/>
                {StepInconsistent(array1, array2, array3, condObj)}


                </>
        )}
        else if(condObj.dependent.bool){
            return(
                <>
                <h1>Dependent</h1>
                </>
    )}
    }

    if(!calcBool){return null}
    else if(calcBool){
        let obj = EqType()
        
        return selectiveRender(localArray1, localArray2, localArray3, obj)
        
    }




}

export default StepWrapper;