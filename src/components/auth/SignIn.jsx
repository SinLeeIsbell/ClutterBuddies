import React, { Component } from "react";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //we have two fields that can change so we target the id and then that value to change

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit} className="inForm">
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="username"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Login With These Credentials</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
