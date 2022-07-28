

import { Canvas } from "@react-three/fiber";
import { Sky, Environment, ScrollControls, Scroll, PerspectiveCamera , Cloud} from '@react-three/drei'
import { useNavigate } from "react-router-dom";
import React from 'react';


function Try() {
  return(
  <>
      <PerspectiveCamera makeDefault fov={50} position={[3, 1, 5]} />
      
      <Cloud opacity={0.9}
      speed={0.4} // Rotation speed
      width={5} // Width of the full cloud
      depth={1.5} // Z-dir depth
      segments={10} // Number of particles
      color={[182, 182, 180]}
      />
      <Sky />
      <Environment preset="city" />
      
    </>
  )
}
/* 
function Sound({ url }) {
  const sound = useRef()
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)
  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setLoop(true)
    sound.current.play()
    camera.add(listener)
    return () => camera.remove(listener)
  }, [buffer, camera, listener])
  return <positionalAudio ref={sound} args={[listener]} />
}
 */



function Confirm() {
  const navigate = useNavigate();

  function changeWhite(e) {
    e.target.style.opacity = '0.1';
  }
  
  function changeBlack(e) {
    e.target.style.opacity = '1';
  }

  
  return (
    <div style={{ width: "100vw", height: "100vh" }}>

        <Canvas height="100" width="100">
 
       {/*  <Sound url="/zapsplat_musical_ice_cream_van_musical_chime_004_43592.mp3" />  */}
        <ScrollControls damping={1} pages={1}>
        <Scroll html style={{ width: '100%', color:'white' }}>
        <ambientLight intensity={2} />
          <pointLight position={[40, 40, 40]} />
          <div class="flex relative">
{/* 
          <div class="text-black absolute left-0 top-0 h-16 w-16">RH</div>
          <div class="text-black absolute top-0 right-0 h-16 w-16">HI</div> */}

          <div class="container relative my-auto border-confirm border-4 border-grey p-2">
                <div class="border-4 border-grey static " style={{ padding:"50px"}}>
                    <div class="text-confirm text-center">
                        Hello I'm Husna. <br /> A frontend developer. <br/>
                        Interested to get to know more ?
                    </div>
                    <div>
                        <button
                          onMouseOver={changeWhite} 
                          onMouseLeave={changeBlack}
                          onClick={() => navigate('/Folder')}
                          type="button" 
                          class="text-confirm1 border-4 border-grey static my-auto text-center">
                          Explore
                        </button>
                    </div>
                </div>
            </div>

            {/*     
            <div class="text-black absolute bottom-0 left-0 h-16 w-16">HI</div>
            <div class="text-black absolute bottom-0 right-0 h-16 w-16">HI</div> */}

          </div>
      
          </Scroll>
          </ScrollControls>
          <Try />
        </Canvas>
        </div>

  )
}

export default Confirm
