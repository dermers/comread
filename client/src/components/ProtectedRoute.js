import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class ProtectedRoute extends Component {
    render() {
        const { component: Component, ...props } = this.props

        return (
            <Route
                {...props}
                render={props => (
                    (localStorage.getItem("userInfo") !== null) ?
                    <Component {...props} /> :
                    <Redirect to='/login' />
                )}
            />
        )
    }
}