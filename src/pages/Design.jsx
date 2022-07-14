import React from 'react'
import { Navbar } from '../component';

import { images } from './../constants'


function Design() {
  return (
    <div class="grid bg-image transparent">
      <Navbar />
   {/*  <div class="text-center pt-20">Design</div> */}
{/*    <div class="flex flex-wrap justify-center">
    <img src={images.design} alt="frame" class="design"></img>
    </div> */}
    <div class="flex flex-wrap gap-x-8 justify-center pb-20 box-1">
          <img src={images.design1} alt="frame" class="design1 p-1 bg-white"></img>
          <img src={images.design3} alt="frame" class="design2 p-1 bg-white"></img>
          <img src={images.design5} alt="frame" class="design3 p-1 bg-white"></img>
      </div>
      <div class="flex flex-wrap gap-x-10 justify-center text-center py-20 mx-20">
          <img src={images.design2} alt="frame" class="design4 p-1 bg-white"></img>
          <img src={images.design4} alt="frame" class="design5 p-1 bg-white"></img>
          <img src={images.design6} alt="frame" class="design6 p-1 bg-white"></img>
          <img src={images.design7} alt="frame" class="design7 p-1 bg-white"></img>
        
      </div>
      <div class="grid justify-center gap-10 pt-20">
          <div class="flex justify-between text-center">
              <img src={images.design8} alt="frame" class="design8 p-1 bg-white"></img>
              <img src={images.design9} alt="frame" class="design9 p-1 bg-white"></img>
        </div>
        <div class="flex justify-between text-center">
              <img src={images.design10} alt="frame" class="design10 p-1 bg-white"></img>
              <img src={images.design11} alt="frame" class="design11 p-1 bg-white"></img>
        </div>
    </div>
    </div>
  )
}

export default Design