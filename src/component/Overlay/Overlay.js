import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { images } from '../../constants'
import { Loader } from '../../component'

function Overlay() {
     const navigate = useNavigate();

    const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])  
 
    return (
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
      
    )
}

export default Overlay