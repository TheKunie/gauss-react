import Navbar from '../navbar/Navbar'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import VisualizerLogic from './VisualizerLogic'



function Visualizer() {
    return( <div><VisualizerLogic></VisualizerLogic></div>
/*         <>
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <div className="row">
        <div className="col">
            <h1 className="display-3 text-center" id="h1">
                Visualize
            </h1>
        </div>
        </div>
        <div className="row">
            <div className="col">
                <VisualizerLogic />

            </div>
        </div>
        </> */
        )
}

export default Visualizer;