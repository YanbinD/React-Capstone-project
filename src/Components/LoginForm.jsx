import React, { Component } from "react";
import Input from "./common/input"
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };

  handleChange = ({currentTarget : input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// react should not work with document object, because it suppose to provide an abstraction
