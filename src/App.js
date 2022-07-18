import React from "react";
// import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Transition, TransitionGroup } from 'react-transition-group';
// import { play, exit } from './timelines'

// css
import "./assets/css/style.css";
// components
import Header from "./components/Header";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <BrowserRouter>
            {/* <div className="app">
                <Header />
                <Route render={({ location }) => {
                    const { pathname, key } = location;

                    return (
                    <TransitionGroup component={null}>
                        <Transition 
                        key={key} appear={true} 
                        onEnter={(node, appears) => play(pathname, node, appears)}
                        onExit={(node, appears) => exit(node, appears)}
                        timeout={{enter: 750, exit: 150}}>
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/projects" component={Projects} />
                                <Route path="/contact" component={Contact} /> 
                            </Switch>
                        </Transition>
                    </TransitionGroup>
                    )
                }}/>
            </div> */}
            
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