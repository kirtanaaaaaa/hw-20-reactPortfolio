import React from "react";
import "./header.css";

function Nav() {
  return (
    <nav className="navbar is-transparent">
        <span className= "navbar-brand mb-5 h1"> </span>
        <div className = "navbar-end end">
            <div className = "navbar-item">
                <a href='/home'><button className="btn btn-outline-info one">Home</button></a>
                <a href='/about'><button className="btn btn-outline-info one">About</button></a>
                <a href='/projects'><button className="btn btn-outline-info one">Projects</button></a>
                <a href='/contact'><button className="btn btn-outline-info one">Contact</button></a>
            
            </div>
        </div>
    </nav>
  )}
    

export default Nav;