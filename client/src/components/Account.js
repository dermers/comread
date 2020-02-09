import React, { Component } from 'react'
import UserService from '../users/userService'
import { Jumbotron, Card, Button } from 'react-bootstrap';
import './Account.css'

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            profileLoaded: false
        }

        this.toggleReadyStatus = this.toggleReadyStatus.bind(this)
    }

    componentDidMount() {
        this.loadUserProfile();
    }

    loadUserProfile() {
        UserService.getUserData(JSON.parse(localStorage.getItem("userInfo"))).then(res => {
            this.setState({ user: res.data, profileLoaded: true });
        });
    }

    toggleReadyStatus() {
        console.log("in da method")
        if(this.state.user.ready) {
            UserService.changeUserData(JSON.parse(localStorage.getItem("userInfo")), { ready : false});
        }
        else {
            UserService.changeUserData(JSON.parse(localStorage.getItem("userInfo")), { ready : true});
        }
    }

    renderUserReady() {
        if(this.state.user.ready) {
            return (
                <Card border="success">
                <Card.Body>
                <Card.Title>Done for the day?</Card.Title>
                <Card.Text>
                    Don't forget to change your status before logging off.
                </Card.Text>
                <Button variant="secondary" onClick={this.toggleReadyStatus}>I'm done editing</Button>
                </Card.Body>
                 </Card>
            )} 
            else {
                return (
                <Card bg="dark" text="white">
                <Card.Body>
                    <Card.Title>Wanna help a comrade out?</Card.Title>
                    <Card.Text>
                        Earn more credits by opting in to edit their work.
                    </Card.Text>
                    <Button variant="success" onClick={this.toggleReadyStatus}>I'm ready to edit</Button>
                </Card.Body>
                </Card>
                )}
    }

    render() {
        return (
            this.state.profileLoaded &&
            <div className="grid-container">
                <div className="user-info">
                    <Jumbotron>
                        <h1>Hi, {this.state.user.username}!</h1>
                        <h3>Account Balance: {this.state.user.score} credits</h3>
                    </Jumbotron>
                </div>
                <div className="user-ready">
                        {this.renderUserReady()}
                </div>
                <div className="user-essay">
                    <h2>essay status card</h2>
                </div>
                <div className="user-queue">
                    <h3>Provide Feedback</h3>
                    <hr className="break"/>
                </div>
            </div>
        )
    }
}