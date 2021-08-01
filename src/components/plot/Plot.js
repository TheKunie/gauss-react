
/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import * as math from 'mathjs'
import createPlotlyComponent from 'react-plotly.js/factory';

import  {useStoreState} from 'easy-peasy';

/* -------------------------------------------------------------------------- */
/*                                    Logic                                   */
/* -------------------------------------------------------------------------- */


 const Plotter = ()=>{
    const Plotly = window.Plotly;
    const Plot = createPlotlyComponent(Plotly);


    var eq = {
        a: '',
        b: '',
        c: ''
    };
    const array1 = useStoreState((store)=>store.array1);
    const array2 = useStoreState((store)=>store.array2);
    const array3 = useStoreState((store)=>store.array3);
    const bool = useStoreState((store)=>store.calculate)

    if(bool){
        if(math.equal(array1[2], 0)&&math.equal(array2[2], 0)&&math.equal(array3[2], 0)){return null}
    }

    
    if(bool){
            if (!math.isZero(array1[2])){
                eq.a = `(${array1[0]}x+${array1[1]}y-${array1[3]})/-${array1[2]}`
                
            }
            if (!math.isZero(array2[2])){
                eq.b = `(${array2[0]}x+${array2[1]}y-${array2[3]})/-${array2[2]}`
                
            }
            if (!math.isZero(array3[2])){
                eq.c = `(${array3[0]}x+${array3[1]}y-${array3[3]})/-${array3[2]}`
                
            }

            var z1 = [];
            var z2 = [];
            var z3 = [];

            var lowerbound = -51
            var upperbound = 51







            //* -------------------------------------------------------------------------- 

            for (let i = lowerbound; i < upperbound; i++) {
                let z_row = [];
                for (let j = lowerbound; j < upperbound; j++) {
                    let scope = { x: i, y: j };
                    z_row.push(math.parse(eq.a).compile().evaluate(scope));
                }
                z1.push(z_row);
            }

            for (let i = lowerbound; i < upperbound; i++) {
                let z_row = [];
                for (let j = lowerbound; j < upperbound; j++) {
                    let scope = { x: i, y: j };
                    z_row.push(math.parse(eq.b).compile().evaluate(scope));
                }
                z2.push(z_row);
            }
            
            for (let i = lowerbound; i < upperbound; i++) {
                let z_row = [];
                for (let j = lowerbound; j < upperbound; j++) {
                    let scope = { x: i, y: j };
                    z_row.push(math.parse(eq.c).compile().evaluate(scope));
                }
                z3.push(z_row);
            }}


    /* -------------------------------------------------------------------------- */
    /*                                   Render                                   */
    /* -------------------------------------------------------------------------- */



    
        
           if(bool){ 
               return (      
                   <>
                   <div className="row"><div className="col"><h2>Representació gràfica</h2></div></div>
                   <div className="row">
                       
                       <div className="col">
               
               <Plot
                        data={[
                            {
                                z: z1,
                                type: "surface",
                                showscale: false,
                                opacity: 1,
                                colorscale: 'Greens'
                            },
                            {
                                z: z2,
                                type: "surface",
                                showscale: false,
                                opacity: 1,
                                colorscale: 'Reds'
                            },
                            {
                                z: z3,
                                type: "surface",
                                showscale: false,
                                opacity: 1,
                                colorscale: 'Blues'
                            }

                        ]}
                />
                </div>
                </div>
                </>
           )}
                    else{return null}

        
    

} 

 export default Plotter 