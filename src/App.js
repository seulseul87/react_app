import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/css/style.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />                
            </Switch>
        </BrowserRouter>
    );
}