/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */


import { useState, useRef, useEffect } from "react";
import Display from "../display/Display";
import FactorExtractor from "../factorExtractor/factorExtract";
import MatrixDisplay from '../display/MatrixDisplay';
import {useStoreState, useStoreActions} from 'easy-peasy';
import * as math from 'mathjs';


/* ------------------------------ DECLARATIONS ------------------------------ */

const Input = () => {
  const [state, setState] = useState({
    eq1: "1x-3y+1z=4",
    eq2: "-1x+2y-5z=3",
    eq3: "5x-13y+13z=8",
    array1: [],
    array2: [],
    array3: [],
    array1Det: [],
    array2Det: [],
    array3Det: [],
    vectorB: [],
    matrixString: "",
    acceptButtonHit: false
  });

  const setArray1 = useStoreActions((store)=> store.setArray1);
  const setArray2 = useStoreActions((store)=> store.setArray2);
  const setArray3 = useStoreActions((store)=> store.setArray3);
  const setAcceptedButton = useStoreActions((store)=>store.setAcceptedButton);
  const setCalculate = useStoreActions((store)=>store.setCalculate)

  const setDetArray1 = useStoreActions((store)=>store.setDetArray1)
  const setDetArray2 = useStoreActions((store)=>store.setDetArray2)
  const setDetArray3 = useStoreActions((store)=>store.setDetArray3)

  const setVectorB = useStoreActions((store)=>store.setVectorB)


/* ---------------------------------- LOGIC --------------------------------- */


  const handleSubmit = () =>{                 //* Extracts arrays from inputs
    setState({...state,                           
        array1: FactorExtractor(state.eq1).A,     // Master array
        array2: FactorExtractor(state.eq2).A, 
        array3: FactorExtractor(state.eq3).A,
        array1Det: FactorExtractor(state.eq1).B,  // Master array without right-side (Determinant array)
        array2Det: FactorExtractor(state.eq2).B,
        array3Det: FactorExtractor(state.eq3).B,
        vectorB: [FactorExtractor(state.eq1).C, FactorExtractor(state.eq2).C, FactorExtractor(state.eq3).C], // Vector b. (Ax=b)
        acceptButtonHit: true,
    })

  }





  const ref = useRef(false)
  useEffect(() => {if(!ref.current){ref.current = true; return}

    // Set matrix display

    setState(state =>({...state, matrixString: MatrixDisplay(state.array1, state.array2, state.array3)}));

    // Set master arrays

    setArray1(state.array1);
    setArray2(state.array2);
    setArray3(state.array3);

    // Set determinant arrays

    setDetArray1(state.array1Det);
    setDetArray2(state.array2Det);
    setDetArray3(state.array3Det);

    // Set b-vector arrays

    setVectorB(state.vectorB)

    // Accept-button-clicked flag

    setAcceptedButton(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.array1, state.array2, state.array3, state.acceptButtonHit ])




  const CalculateButtonRender = () => {
      const bool = useStoreState(state => state.accepted)
      if(bool){return(
        <div className="col">
          <button className="btn btn-info" onClick={()=>setCalculate(true)}>Calcula!</button>
        </div>
      )}
  }






/* -------------------------------------------------------------------------- */
/*                                   RENDER                                   */
/* -------------------------------------------------------------------------- */


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <label className="form-label">Equació 1</label>
          <input
            id="input-1"
            type="text"
            className="form-control"
            placeholder="ax+by+cz=r"
            value={state.eq1}
            onChange={(e) => setState({ ...state, eq1: e.target.value })}
            name="eq1"
          ></input>
        </div>
        <div className="col">
          <label className="form-label">Equació 2</label>
          <input
            id="input-2"
            type="text"
            className="form-control"
            placeholder="ax+by+cz=r"
            value={state.eq2}
            onChange={(e) => setState({ ...state, eq2: e.target.value })}
            name="eq2"
          ></input>
        </div>
        <div className="col">
          <label className="form-label">Equació 3</label>
          <input
            id="input-3"
            type="text"
            className="form-control"
            placeholder="ax+by+cz=r"
            value={state.eq3}
            onChange={(e) => setState({ ...state, eq3: e.target.value })}
            name="eq3"
          ></input>
        </div>
      </div>

    {/*--------------------------------------------------------ROW 1--------------------------------------------------------------*/}


      <div className="row">
        <div className="col">
        <Display input={"$"+state.eq1+"$"}/>
          
        </div>
        <div className="col">
        <Display input={"$"+state.eq2+"$"}/>
          
        </div>
        <div className="col">
        <Display input={"$"+state.eq3+"$"}/>
        </div>
      </div>

    {/*--------------------------------------------------------ROW 2--------------------------------------------------------------*/}

    <div className="row">
        <div className="col">
            <Display input={state.matrixString}/>
        </div>
    </div>



    {/*--------------------------------------------------------ROW 3--------------------------------------------------------------*/}

    <br/>

    <div className="row">
        <div className="col">
            <button 
            className="btn btn-success"

            onClick={()=>handleSubmit()}

        >{state.acceptButtonHit ? "Corregir":"Acceptar"}</button>
        </div>
        
        {CalculateButtonRender()}
        
    </div>

    </div>
  );
};

export default Input;