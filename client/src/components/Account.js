import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import UserService from '../users/userService'

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
            <Card style={{ width: '18rem'}}>
                <Card.Title>{this.state.user.username}</Card.Title>
                <Card.Body>

                </Card.Body>
            </Card>
        )
    }
}