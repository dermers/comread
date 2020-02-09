import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import './FeedbackList.css'
import ChunkService from '../chunks/chunkService'
var moment = require('moment');

export default class FeedbackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
            chunkId: 0,
            chunkUserId: 0
        };
        this.renderFeedbackItem = this.renderFeedbackItem.bind(this)
        this.myHandleSubmit = this.myHandleSubmit.bind(this);
    }
    
    myHandleSubmit(e) {
        console.log(this.textInput);
        console.log(this.chunkId);
        console.log(JSON.parse(localStorage.getItem("userInfo")));
        ChunkService.putFeedbackOnChunk(JSON.parse(localStorage.getItem("userInfo")), this.chunkId, this.textInput);
    }

    renderFeedbackItem(chunk) {
        var timestamp = moment(chunk.created_at, 'YYYY-MM-DD');
        var created_at = timestamp.fromNow()
        return (
            <div key={chunk.id} user-id={chunk.user_id} className="row">
                <div className="date">
                    {created_at}<br></br>
                    {chunk.body}
                </div>
                <div>
                <Form onSubmit={this.myHandleSubmit}>
                    <Form.Group controlId="response for {chunk.id}">
                        <Form.Control type="textarea" placeholder="Enter Feedback" onChange = {(t) => 
                            {this.textInput = t.currentTarget.value;
                             this.chunkId = chunk.id;
                             this.chunkUserId = chunk.user_id;
                            }}/>
                    </Form.Group>
                </Form>
                </div>
                <p id="score">+5</p>
            </div>
        )
    }

    render() {
        return (
            <div id="feedback-list">
            {this.props.chunks ?
            this.props.chunks.map(this.renderFeedbackItem) 
            : null}
            </div>
        )
    }
}