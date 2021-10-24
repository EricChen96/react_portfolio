import React from "react";
import "../css/NavBar.css";
import {
    Link,
} from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar sticky-top navbar-light bg-light navbar-expand-lg btn-group text-center" >
            <Link to="/home">
                <a className="nav-item nav-link" href="#home">Home</a>
            </Link>
            <Link to="/about">
                <a className="nav-item nav-link" href="#about">About Me</a>
            </Link>
            <Link to="/projects">
                <a className="nav-item nav-link" href="#projects">Projects</a>
            </Link>
            <a className="nav-item nav-link" href={process.env.PUBLIC_URL + "/resume.pdf"} download>
                Resume
            </a>
        </nav>
    )
}

export default Navbar;