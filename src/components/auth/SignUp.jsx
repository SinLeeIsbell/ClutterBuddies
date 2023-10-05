import React, { Component } from "react";
import "./SignIn.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //we have two fields that can change so we target the id and then that value to change

  handleSubmit = (e) => {
    e.preventDefault(); 

    console.log("Form submit with data:", this.state
    )
  };

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit} className="inForm">
          <h5>Sign Up</h5>
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
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>I'm Ready to Sign Up!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
