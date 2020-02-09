import React, { Component } from 'react'
import './FeedbackList.css'
var moment = require('moment');

export default class FeedbackList extends Component {

    renderFeedbackItem(chunk) {
        var timestamp = moment(chunk.created_at, 'YYYY-MM-DD');
        chunk.created_at = timestamp.fromNow()
        return (
            <div key={chunk.id} user-id={chunk.user_id} className="row">
                <div className="date">{chunk.created_at}</div>
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