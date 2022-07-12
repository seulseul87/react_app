import { Link } from "react-router-dom";

export default function App() {
    return (
        <header>
            <h1><Link to="/">My Site</Link></h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/expenses">Expenses</Link></li>
                    <li><Link to="/invoices">Invoices</Link></li>
                </ul>
            </nav>
        </header>
    );
}