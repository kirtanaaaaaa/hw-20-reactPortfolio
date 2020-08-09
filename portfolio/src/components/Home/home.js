import React from "react";
import "./home.css";
import sun from "./sun.png";

function home(){
    return(
        <div>
            <h1 className="title">A full stack web developer!</h1>
            <img className = "img" src={sun.png} alt="me"></img>
        </div>
    )
}

export default home;