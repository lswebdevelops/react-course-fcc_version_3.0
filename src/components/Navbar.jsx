import React from "react";
import '../styles/Navbar.css';
import logo_fcc  from '../images/logo192.png'

function Navbar(props){
    return(
        <div className={props.darkMode ? "container-navbar": ""}>
           <div className="container-navbar-left">
           <img className="img-logo-navbar"
            src={logo_fcc} 
            alt="logo fcc"/>
            <h1 className="h1-logo-img-navbar">ReactFacts</h1>

           </div>
            <div  className="h1-logo-navbar">
                <p className="toggler--light">Light</p>

                <div
                className="toggler--slider"
                onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>


                <p className="toggler--dark">Dark</p>

            </div>
        </div>
    )
}

export default Navbar;

