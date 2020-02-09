import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
      }

    logout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">comread</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className="float-right">
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/account">Account</Nav.Link>
                {(localStorage.getItem("userInfo") !== null) ?
                    <Nav.Link onClick={this.logout} href="#">Logout</Nav.Link> :
                    <Nav.Link href="/login">Login</Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(NavBar)