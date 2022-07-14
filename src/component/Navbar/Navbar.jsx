import React from 'react'
import { useNavigate } from "react-router-dom";

import './Navbar.scss'

/* 
function changeWhite(e) {
    e.target.style.background = 'black';
    e.target.style.padding = '0px 8px';
    e.target.style.borderRadius = '6px'
  }
  
  function changeBlack(e) {
    e.target.style.background = '';
  } */
  

function Navbar() {
    const navigate = useNavigate();

  return (
      <nav>
          <div class="wrap text-white cursor-pointer">
              <div onClick={() => navigate('/Folder')}>Portfolio</div>
              <a href="https://docs.google.com/document/d/1LJ1JbmaFBD6ksK76XFSNhh2ACZHrNpjo/edit?usp=sharing&ouid=115258755856131343936&rtpof=true&sd=true"><div>Resume</div></a>
              <div onClick={() => navigate('/Project')}>Frontend</div>
              <div onClick={() => navigate('/Design')}>Design</div>
          </div>
      </nav>
  )
}

export default Navbar