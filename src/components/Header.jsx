import { NavLink } from "react-router-dom";

export default function App() {
    let activeClassName = "underline";
    return (
        <header>
            <nav>   
                <h1><NavLink to="/"activeStyle><p className="logo">SEULGI</p></NavLink></h1>                                                        
                <ul>   
                    <li><NavLink to="/" activeStyle>Home</NavLink></li>
                    <li><NavLink to="/about" activeStyle>About</NavLink></li> 
                    <li><NavLink to="/projects" activeStyle>Projects</NavLink></li>
                    <li><NavLink to="/contact" activeStyle>Contact</NavLink></li>
                </ul>
            </nav>            
        </header>
    );
}