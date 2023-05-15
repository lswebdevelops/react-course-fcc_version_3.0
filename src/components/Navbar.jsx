import React from "react";
import '../styles/Navbar.css';
import logo_fcc  from '../images/logo192.png'
import ToggleDark from './ToggleDark';

function Navbar(){
    return(
        <div className="container-navbar">
           <div className="container-navbar-left">
           <img className="img-logo-navbar"
            src={logo_fcc} 
            alt="logo fcc"/>
            <h1 className="h1-logo-img-navbar">ReactFacts</h1>

           </div>
           <div className="dark-ligh-button-container">            
           <h1 className="h1-logo-light-navbar">Light</h1>
            <ToggleDark />
            <h1 className="h1-logo-navbar"> Dark </h1>
           </div>
        </div>
    )
}

export default Navbar;
