import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from '@react-three/fiber'

import { images } from './../constants'
import { Loader } from '../component'
import { Ground } from '../component';

import {
    PerspectiveCamera, ScrollControls, Scroll
  } from "@react-three/drei";

import './Page.scss'

function Box() {
    const mesh = useRef()
    
    useFrame(() => {
        mesh.current.rotation.y += 0.01
      })

    return (
      <mesh position={[4.5, 1, 1]} rotation={[1,3,1]} ref={mesh}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="white" />
      </mesh>
    );
  }

function TryPortfolio() {
    return(
    <>
  
        <PerspectiveCamera makeDefault fov={50} position={[3, 1, 5]} />
  
        <color args={[0, 0, 0]} attach="background" />

        <Box />
  
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
function Folder() {
 const navigate = useNavigate();

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])  
  
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas height="100" width="100">
        <ScrollControls damping={1} pages={1}>
        <Scroll html style={{ width: '100%', color:'white' }}>
        <div>
        {loading === false ? (
        <div class="flex min-h-screen">
            <div class="container relative text-file">
                <div class="flex gap-14">
                    <div>
                        <img src={images.file} alt="frame" class="object-scale-down cursor-pointer" onClick={() => navigate('/About')}/>
                        About Me
                    </div>
                    <div>
                        <a href="https://docs.google.com/document/d/1LJ1JbmaFBD6ksK76XFSNhh2ACZHrNpjo/edit?usp=sharing&ouid=115258755856131343936&rtpof=true&sd=true"><img src={images.file} alt="frame" class="object-scale-down cursor-pointer"/></a>
                        Full Resume
                    </div>
                </div>
                <div class="flex gap-14 pt-10">
                     <div>
                        <img src={images.file} alt="frame" class="object-scale-down cursor-pointer" onClick={() => navigate('/Project')}/>
                        Frontend <br/>Project
                    </div>
                    <div>
                        <img src={images.file} alt="frame" class="object-scale-down cursor-pointer" onClick={() => navigate('/Design')}/>
                        Design <br/>Portfolio
                    </div>
                </div>
            </div>
        
        </div>
        ) : (
            <Loader />
          )}
          </div>
            
            
      </Scroll>
      
      </ScrollControls>
        <TryPortfolio />
        </Canvas>
        </div>
    )
}


export default Folder