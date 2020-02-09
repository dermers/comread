import React, { Component } from 'react'
import './FeedbackList.css'

export default class FeedbackList extends Component {
    constructor(props) {
        super(props);
    }

    renderFeedbackItem(chunk) {
        return (
            <div key={chunk.id} user-id={chunk.user_id} className="row">
                <div className="date">{chunk.created_at}</div><div className="score">+5</div>
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