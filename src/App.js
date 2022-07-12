import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/css/style.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Invoices from "./pages/Invoices";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/expenses" component={Expenses} />
                <Route path="/invoices" component={Invoices} />
            </Switch>
        </BrowserRouter>
    );
}