import React, { Component } from 'react';
import Nav from "react-bootstrap/es/Nav";
import Navbar from 'react-bootstrap/Navbar'

class NavBar extends Component {
    render() {
        return (
            <div className={'NavBar'}>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Nav className={"regex"}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/history">History</Nav.Link>
                        <Nav.Link href="/syntax">Syntax</Nav.Link>
                        <Nav.Link href="/usage">Usage</Nav.Link>
                        <Nav.Link href="/custom">Custom</Nav.Link>
                    </Nav>
                </Navbar>
            </div> );

    }
}

export default NavBar;