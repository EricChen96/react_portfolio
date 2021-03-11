

import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact to="/" className="navbar-brand" activeClassName="active">
                Eric Chen
            </NavLink>
            {/* <a class="navbar-brand" href="../index.html">Eric Chen</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <header className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li class="nav-item">
                        <NavLink exact to="/about" className="nav-link" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact to="/contact" className="nav-link" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </header>
        </nav>
    )
}

export default NavTabs;