import React, { Component } from 'react'
import UserService from '../users/userService'
import { Jumbotron } from 'react-bootstrap';
import './Account.css'

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            profileLoaded: false
        }
    }

    componentDidMount() {
        this.loadUserProfile();
    }

    loadUserProfile() {
        UserService.getUserData(JSON.parse(localStorage.getItem("userInfo"))).then(res => {
            this.setState({ user: res.data, profileLoaded: true });
        });
    }

    render() {
        return (
            this.state.profileLoaded &&
            <div class="grid-container">
                <div class="user-info">
                    <Jumbotron>
                        <h1>Hi, {this.state.user.username}!</h1>
                        <h3>Account Balance: {this.state.user.score} credits</h3>
                    </Jumbotron>
                </div>
                <div class="user-ready">
                    <h2>user stuff goes here</h2>
                </div>
                <div class="user-essay">
                    <h2>user stuff goes here</h2>
                </div>
                <div class="user-queue">
                    <h2>user stuff goes here</h2>
                </div>
            </div>
        )
    }
}