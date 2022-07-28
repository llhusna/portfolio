import React from 'react';
import { Navbar } from '../component';
import { About, Skills } from '../container';

//this one must use ../ if like below, cannot detect
// import { About, Footer, Header, Skills, Work } from './container';
// import { Navbar } from './component';

function AboutMe() {
  return (
    <div class="text-white">
        <Navbar />
        <About />
    </div>
  )
}

export default AboutMe