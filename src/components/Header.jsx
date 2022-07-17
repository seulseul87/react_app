import { Link } from "react-router-dom";

export default function App() {
    return (
        <header>
            <h1><Link to="/">Seulgi Kang</Link></h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li> 
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}