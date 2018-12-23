import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Component {
  state = {
    data: { username: "", password: "", email: "" },
    errors: {}
  };

  schema = {
    password: Joi.string()
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

  render() {
    return "ds a";
  }
}

export default LoginForm;
