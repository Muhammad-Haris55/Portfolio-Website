import React from 'react';
import { NavLink } from 'react-router-dom';

let btn=document.getElementById("nav-btn")
// btn.addEventListener("click",(e)=>{
//     if(e.target){
//         // console.log("btnpress")
//         btn.classList.toggle(".togleclass")
//     }
// })
console.log(btn)
// btn.classlist.toggle("togleclass")
// console.log(btn)
// btn.onclick(btn.classList.toggle".togleclass")

// function btnpres(){
//     btn.style.opacity="0"
// }



    function Navbar() {
    return (
        <>
          
          <nav className="navbar navbar-expand-lg">
                <div className="container col-md-10">
                    <NavLink
                                    id='title'
                                    activeclassName="active"
                                    className="nav-link"
                                    aria-current="page"
                                    to="/Home"
                                >
                                    Harris's Portfolio
                                </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    id="nav-btn"
                    aria-controls="navbarSupportedContent" 
                    // onClick={}
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    id='home'
                                    activeclassName="active"
                                    className="nav-link"
                                    aria-current="page"
                                    to="/Home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    id='home'
                                    activeclassName="active"
                                    className="nav-link"
                                    aria-current="page"
                                    to="/About"
                                   
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink
                                    id='home'
                                    activeclassName="active"
                                    className="nav-link"
                                    aria-current="page"
                                    to="/Projects"
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink
                                    id='home'
                                    activeclassName="active"
                                    className="nav-link"
                                    aria-current="page"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
</nav>
        </>
    )
}

export default Navbar