import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Jumbo() {
     const navigate = useNavigate();

    return (
         <div>
        <div class="flex min-h-screen">
            <div class="container relative text-file">
                <div class="flex gap-14 pt-10">
                    <div onClick={() => navigate('/Design')}/>
                        Design <br/>Portfolio
                    </div>
                </div>
            </div>
        
        </div>
      
    )
}

export default Jumbo