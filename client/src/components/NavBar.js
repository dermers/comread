import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class NavBar extends Component {

    

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">comread</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className="float-right">
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/account">Account</Nav.Link>
                {(localStorage.getItem("userInfo") !== null) ?
                    <Nav.Link href="/logout">Logout</Nav.Link> :
                    <Nav.Link href="/login">Login</Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}