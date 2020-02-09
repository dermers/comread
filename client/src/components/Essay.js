import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './Essay.css'

export default class Essay extends Component {
    render() {
        return (
            <div id="local">
            <Card className="essay-center">>
                <h1 id="submit-title">Submit an Essay</h1>
                <textarea type="text" className="essaybox"></textarea>
            </Card>
            </div>
        )
    }
}