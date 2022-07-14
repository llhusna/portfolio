/* import { About, Footer, Header, Skills, Work } from './container';
import { Confirm, Folder } from './pages'
import { Navbar } from './component';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Work />
        <Footer />
    </div>
  );
}

export default App;
 */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Confirm, Folder, AboutMe, Project, Design } from './pages'

const App = () => {
  return (
    
    <Routes> 
        <Route strict exact path="/" element={<Confirm />}/>
        <Route strict exact path="/Folder" element={<Folder/>} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Design" element={<Design />} />
    </Routes>
  );
}

export default App;
