import React from "react";
import '../styles/Main.css';



function Main(){
    return(
        <div className="main-container">
            <h1 className="h1-main">Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including<br/> <span className="spacing-span"></span>mobile apps</li>
            </ul>
        </div>
    )
}


export default Main;


