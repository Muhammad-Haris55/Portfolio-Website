// import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar" 
import Project from './Project';
import Hero from "./Hero"
import About from './About';
// import Footer from './Footer';

// import Footer from './Footer';

import { Route,Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


function App() {
    return(
    <>
    
    
    <Navbar/>
    <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/Home" element={<Hero/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Project/>} />
        <Route path="/contact" element={<About/>} />
        <Route path="/contacts" element={<About/>} />
    </Routes>
   
    </>
    )
}

export default App;
