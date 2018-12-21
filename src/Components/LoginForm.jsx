import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username:"", password: "" }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = ({currentTarget : input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({account});
  };
  
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              autoFocus
              onChange={this.handleChange}
              value={account.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={this.handleChange}
              value={account.password}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// react should not work with document object, because it suppose to provide an abstraction
