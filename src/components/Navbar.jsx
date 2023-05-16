import React from "react";
import '../styles/Navbar.css';
import logo_fcc  from '../images/logo192.png'

function Navbar(props){
    return(
        <div className={props.darkMode ? "container-navbar": "container-navbar-light"}>
           <div className="container-navbar-left">
           <img className="img-logo-navbar"
            src={logo_fcc} 
            alt="logo fcc"/>
            <h1 className="h1-logo-img-navbar">ReactFacts</h1>

           </div>
            <div  className="h1-logo-navbar">
                <p>Light</p>
                <div
                   className={`toggler--slider ${props.darkMode ? "toggled" : ""}`}
                    onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p>Dark</p>

            </div>
        </div>
    )
}

export default Navbar;

