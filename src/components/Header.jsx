import React from "react";
import { NavLink } from "react-router-dom";

export default function App() {
    return (
        <header>
            <nav>   
                <h1><NavLink to="/" className="logo">SEULGI</NavLink></h1>                                                        
                <ul>   
                    <li>
                        <NavLink to="/" className="menu-list" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="menu-list" activeClassName="active">
                            About
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to="/projects" className="menu-list" activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="menu-list" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>            
        </header>
    );
}