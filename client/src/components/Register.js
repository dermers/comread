import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import UserService from '../users/userService';
import AuthService from '../auth/authService'
import "./Register.css";

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        username: '',
        password: '',
    }
    this.register = this.register.bind(this);
  }

  componentDidMount() {
    localStorage.clear();
  }

  register = (e) => {
    e.preventDefault();
    const userInfo = {name: this.state.name, email: this.state.email, 
            username: this.state.username, password: this.state.password };
    UserService.register(userInfo).then(res => {
        if(res.status === 201) {
            const credentials = { email: this.state.email, password: this.state.password }
            AuthService.login(credentials).then(res => {
              if(res.status === 200) {
                localStorage.setItem("userInfo", JSON.stringify(res.data));
                this.props.history.push('/account');
              }else {
                //this.setState({message: res.data.message});
              }
            });
        }else {
            //this.setState({message: res.data.message});
        }
    });
};

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0
          && this.state.name.length > 0 && this.state.username.length > 0;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="Register">
          <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="name" bsSize="large">
          <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId="username" bsSize="large">
          <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="username"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} onClick={this.register}>
            Register
          </Button>
        </form>
   
      </div>
    );
  }
}