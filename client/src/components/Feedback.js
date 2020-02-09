import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ChunkService from '../chunks/chunkService'
import './Feedback.css'

class Feedback extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chunks: [],
            chunkElements: []
        }
    }

    componentDidMount() {
        this.getChunks();
    }

    getChunks() {
        ChunkService.getFeedbackChunks(JSON.parse(localStorage.getItem("userInfo"))).then(res => {
            this.setState({ chunks: res.data.chunks })
            this.setState({ chunkElements: res.data.chunks.map(this.renderChunk) })
        });
    }

    renderChunk(chunk) {
        return (
            <span title={chunk.feedback} onClick={function(e) {

            }} className="chunk">{chunk.body}</span>
        )
    }

    log() {
        console.log('yes')
    }

    render() {
        return (
            <div id="feedback">
                <p id="main-container">
                    {this.state.chunkElements}
                </p>
                <Button block bsSize="large" disabled={!this.validateForm()}>Complete Feedback Review</Button>
            </div>
        )
    }
}

export default withRouter(Feedback)