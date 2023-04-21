import React from "react";
import '../styles/Navbar.css';
import logo_fcc  from '../images/logo192.png'

function Navbar(){
    return(
        <div className="container-navbar">
           <div className="container-navbar-left">
           <img className="img-logo-navbar"
            src={logo_fcc} 
            alt="logo fcc"/>
            <h1 className="h1-logo-img-navbar">ReactFacts</h1>

           </div>
            <h1  className="h1-logo-navbar">React Course - Project 1</h1>
        </div>
    )
}

export default Navbar;
