import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { toast } from "react-toastify" 
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", email: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email Address"),
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/, 'password') 
  };

  doSubmit = () => {
    toast("submitted");
  };

  renderPasswordPrompt() {
    if (!this.state.errors.password) return null;
    const { password } = this.state.errors;
    if (password.includes("fails to match")) {
      return (
        <div className="alert alert-warning" role="alert">
          {" "}
          Password must be at least 4 characters, no more than 8 characters, and
          must include at least one upper case letter, one lower case letter,
          and one numeric digit.{" "}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Register for a new account</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email Address")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderPasswordPrompt()}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
