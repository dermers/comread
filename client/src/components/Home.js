import React, { Component } from 'react'
import { Card, ListGroup, Button } from "react-bootstrap";
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Card className="homecard">
                    <Card.Body className="homecardbody">
                        <h1><span className="ul">Welcome to comread</span></h1>
                        <h2>The ultimate online crowdsourced copy editing tool</h2>
                        <ListGroup horizontal className="homelistgroup">
                            <ListGroup.Item className="homelistitem"><i>Get user submitted feedback from as many people as possible</i></ListGroup.Item>
                            <ListGroup.Item className="homelistitem"><i>Jump in and earn points for providing your own feedback to bite size "chunks"</i></ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <div className = "homebuttons">
                <Button variant="outline-secondary" href="https://github.com/dermers/comread" size="lg" className="homebutton"> 
                    GitHub
                </Button>
                <Button variant="secondary" href="/register" size="lg" className="homebutton"> 
                    Register
                </Button>
                </div>

            </div>
        )
    }
}