import React, { Component } from 'react'
import UserService from '../users/userService'
import ChunkService from '../chunks/chunkService'
import { Jumbotron, Card, Button, Nav } from 'react-bootstrap';
import FeedbackList from './FeedbackList.js'
import './Account.css'

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            profileLoaded: false
        }

        this.toggleReadyStatus = this.toggleReadyStatus.bind(this)
        this.sendToEssaySubmit = this.sendToEssaySubmit.bind(this)
    }

    componentDidMount() {
        this.loadUserProfile();
        this.loadFeedbackChunks();
    }


    loadUserProfile() {
        UserService.getUserData(JSON.parse(localStorage.getItem("userInfo"))).then(res => {
            this.setState({ user: res.data, profileLoaded: true });
        });
    }

    loadFeedbackChunks() {
        ChunkService.getChunksToReview(JSON.parse(localStorage.getItem("userInfo"))).then(res => {
            if (res.status === 200) {
                this.setState({ feedbackChunks: res.data.chunks });
            }
        });
    }

    toggleReadyStatus() {
        if(this.state.user.ready) {
            UserService.changeUserData(JSON.parse(localStorage.getItem("userInfo")), { ready : false});
        }
        else {
            UserService.changeUserData(JSON.parse(localStorage.getItem("userInfo")), { ready : true});
        }
        // TODO: Make React act normal and change this
        window.location.reload(false);
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

    sendToEssaySubmit() {
        this.props.history.push('/essay')
    }

    renderUserEssay() {
        if(this.state.user.submitted) {
            
        }
        else {
            // TODO: Yes, technically this will be wrong if the user has 49 points. 
            if(this.state.user.score < 50) {
                return (
                    <Card bg="light">
                        <Card.Body>
                            <Card.Title>Need feedback?</Card.Title>
                            <Card.Text>
                                Earn {50 - this.state.user.score} more points to submit your essay for review. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
            else {
                return (
                    <Card bg="light">
                        <Card.Body>
                            <Card.Title>Need feedback?</Card.Title>
                            <Card.Text>
                                You have enough points to submit an essay! 
                                <Nav.Link variant="pills" onClick={this.sendToEssaySubmit} 
                                href="/essay">Submit an essay</Nav.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
            
        }
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
                    {this.renderUserEssay()}
                </div>
                <div className="user-queue">
                    <h3>Provide Feedback</h3>
                    <hr className="break"/>
                    <FeedbackList chunks={this.state.feedbackChunks} />
                </div>
            </div>
        )
    }
}