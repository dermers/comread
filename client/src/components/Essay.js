import React, { Component } from 'react'
import EssayService from '../essays/essayService'
import { Card, Button } from 'react-bootstrap'
import './Essay.css'

export default class Essay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            essay: null,
            essaySubmitted: false
        }
    }

    submitEssay() {
        EssayService.createEssay(JSON.parse(localStorage.getItem("userInfo")), this.state.essay).then(res => {
            this.setState({ essay: res.data, essaySubmitted: true });
        });
    }

    render() {
        return (
            <Card className="essay-center">
                <h3 id="header">Paste your essay below, and click Submit to submit.</h3>
                <textarea value={this.state.essay} type="text" className="essaybox"></textarea>
                <Button variant="secondary" size="lg" onClick={this.submitEssay()}>Submit</Button>
            </Card>
        )
    }
}