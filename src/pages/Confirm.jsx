import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function changeWhite(e) {
  e.target.style.background = 'red';
}

function changeBlack(e) {
  e.target.style.background = 'black';
}


function Confirm() { 
  
  
    return (
        <div class="flex bg-black min-h-screen">
            <div class="container relative my-auto border-confirm">
                <div class="border-4 border-white static " style={{ padding:"50px"}}>
                    <div class="text-white text-confirm">
                        Hello I'm Husna, a frontend developer specialized in UI<br/>development....
                    </div>
                    <Link to="/Folder">
                        <button 
                          onMouseOver={changeWhite} 
                          onMouseLeave={changeBlack}
                          type="button" 
                          class="text-white border-2 border-white static py-1 px-5 mt-10">
                          Start
                        </button>
                    </Link>
                </div>
            </div>
            <div class="text-white absolute bottom-5 right-4">Loading...</div>
        </div>
    )
}

export default Confirm

/* import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Canvas, useFrame } from '@react-three/fiber'
import { Overlay } from '../component';

import { Ground } from '../component';

import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

function TryPortfolio() {
  return(
  <>
      <OrbitControls 
        target={[0, 0.70, 0]} 
        maxPolarAngle={1.45}
      />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]}
      />

      <color args={[0, 0, 0]} attach="background" 
      />
      

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />

    </>
  )
}

function Confirm() {
    return (
        <>
        <Canvas
        camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#f0f0f0']} />
          <mesh>
          
          </mesh>
            
            <TryPortfolio />
        </Canvas>
        <Overlay />
        </>
    )
}

export default Confirm */