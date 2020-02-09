import React, { Component } from 'react'
import EssayService from '../essays/essayService'
import UserService from '../users/userService'
import { Card, Button } from 'react-bootstrap'
import './Essay.css'

export default class Essay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            essay: '',
            submissionFailed: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    submitEssay = () => {
        if (JSON.parse(localStorage.getItem("userInfo")).score >= 50) {
            EssayService.createEssay(JSON.parse(localStorage.getItem("userInfo")), this.state.essay).then(res => {
                console.log('DONE CREATING ESSAY')
                if (res.status == 201) {
                    UserService.spendCreditsOnEssay(JSON.parse(localStorage.getItem("userInfo"))).then(res => {
                        this.props.history.push('/account')
                    })
                }
                //this.setState({ essay: res.data, essaySubmitted: true });
            }).catch(error => {
                console.log(error)
                this.setState({submissionFailed: true})
            })
        }
    }

    handleChange(e) {
        this.setState({ essay: e.target.value })
    }

    render() {
        return (
            <Card className="essay-center">
                <h3 id="header">Paste your essay below, and click Submit to submit.</h3>
                <textarea value={this.state.essay} onChange={this.handleChange} type="text" className="essaybox"></textarea>
                {this.state.submissionFailed ? <div id="failMsg">Submission failed. You have already submitted an essay. Please wait for feedback.</div> : null}
                <Button variant="secondary" disabled={this.state.submissionFailed} size="lg" onClick={this.submitEssay}>Submit</Button>
            </Card>
        )
    }
}