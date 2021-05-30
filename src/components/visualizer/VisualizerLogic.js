import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PlaneGeometry } from 'three'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead

  

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <planeGeometry args={props.args} />
      <meshStandardMaterial color={'cyan'} />
    </mesh>
  )
}

export default function VisualizerLogic() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[5, 0, 0]} args={[1, 1, 1]}/>
      <Box position={[0, 0, 0]} args={[2, 2, 2]}/>
    </Canvas>
  )
}