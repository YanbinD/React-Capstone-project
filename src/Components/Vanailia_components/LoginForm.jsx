import React, { Component } from "react";
import Input from "../common/Input";

class LoginForm extends Component {
  // error is an object that holds all the
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    const errors = {};
    if (this.state.account.username.trim() === "") {
      errors.username = "username is required";
    }
    if (this.state.account.password.trim() === "") {
      errors.password = "password is required";
    }
    // Object.keys(errors) will return all the keys of the error object
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // of erros is not an empty object, return, else return an empty object for error
    // can not just set state to errors because its being pass into the <Input /> as a props, an undefined prop will cause error
    if (errors) return;
  };

  /*
    validProperty will valid individual input, if input change from valid to invalid, it will update the error state
  */
  validProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") {
        return "Username is required.";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "Password is requird.";
      }
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validProperty(input);

    if (errorMessage) {
      console.log(errorMessage);
      errors[input.name] = errorMessage;
    } else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary">login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// react should not work with document object, because it suppose to provide an abstraction
