import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function App() {
    
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
                    <Container fluid className="container mt-0">
                        <Navbar.Brand href="/" className="logo">SEULGI</Navbar.Brand>
                        <Nav className="mobile-nav">
                            <NavLink to="/" className="menu-list" activeClassName="active">Home</NavLink>
                            <NavLink to="/about" className="menu-list" activeClassName="active">About</NavLink>   
                            <NavLink to="/projects" className="menu-list" activeClassName="active">Projects</NavLink>   
                            <NavLink to="/contact" className="menu-list" activeClassName="active">Contact</NavLink>                  
                        </Nav> 
                        <Navbar.Toggle className="icon" aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="logo">
                                SEULGI
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="desktop-nav justify-content-end flex-grow-1 pe-3">
                                <NavLink to="/" className="menu-list" activeClassName="active">Home</NavLink>
                                <NavLink to="/about" className="menu-list" activeClassName="active">About</NavLink>   
                                <NavLink to="/projects" className="menu-list" activeClassName="active">Projects</NavLink>   
                                <NavLink to="/contact" className="menu-list" activeClassName="active">Contact</NavLink>                  
                            </Nav>                
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>    
    );
}