import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import AuthService from '../auth/authService';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    localStorage.clear();
  }

  login = (e) => {
    e.preventDefault();
    const credentials = {email: this.state.email, password: this.state.password};
    AuthService.login(credentials).then(res => {
        if(res.status === 200){
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            this.props.history.push('/account');
        }else {
            //this.setState({message: res.data.message});
        }
    });
};

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="Login">
          <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} onClick={this.login}>
            Login
          </Button>

          <Button block bsSize="large" variant="success" onClick={() => this.props.history.push("/register")}>
            Register
          </Button>
        </form>
   
      </div>
    );
  }
}