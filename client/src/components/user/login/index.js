import React, { Component } from 'react';
import FieldError from '../error'

import './index.css';

class Login extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
      UserName : '',
      Password: '',
      error: {
        password : undefined,
        user: undefined,
      }
    };
  }
  formSubmit(event) {
    const UserName = this.user.value;
    const Password = this.password.value;
    const error = {};
    console.log( UserName, Password)
    if (!UserName) {
      error.user = "Username should not be empty";
    }
    if (!Password) {
      error.password = "Password should not be empty";
    }
    this.setState({
      error,
    })
    event.preventDefault();
    this.props.onLogin(UserName, Password);
  }
  render() {
    const error = this.state.error;
    return (
      <div>
        <form
          className="login-user"
          onSubmit={this.formSubmit} >
          <input
            ref={(user) => { this.user = user;}}
            type="text"
            name="username"
            id="username"
            className={`input ${error.user ? "err-input": ""}`}
            placeholder="User name" defaultValue="ali" />
            <FieldError error={error.user} ></FieldError>
          <input
            ref={(password) => { this.password = password;;}}
            type="password"
            name="password"
            id="password"
            className={`input ${error.user ? "err-input": ""}`}
            placeholder="Password"  defaultValue="password" />
            <FieldError error={error.password} ></FieldError>
          <button name="login" className="button" >Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
