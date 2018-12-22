import React, { Component } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";

class LoginForm extends Component {
  // error is an object that holds all the
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  // define a schema for Joy
  // label contains the name of the field in the warning 
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  validate = () => {
    //(object to be validated, schema used, options)
    // By default, joy does abort-early to true, which return when find the first error
    const joiOption = {abortEarly : false};
    const result = Joi.validate(this.state.account, this.schema, joiOption);

    if (!result.error) return null
    const errors = {}
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // of erros is not an empty object, return, else return an empty object for error
    // can not just set state to errors because its being pass into the <Input /> as a props, an undefined prop will cause error
    if (errors) return;
  };
  // validProperty will valid individual input, if input change from valid to invalid, it will update the error state
  
  validProperty = ({ name, value }) => {
    const obj = { [name]: value} ; //dynamically set the key to be the name of the currentTarget
    // when validating the field, we use subschema 
    // get value from schema object (set at runtime)
    const schema = {[name]: this.schema[name]};
    const {error} = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
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

          <button 
            disabled={this.validate()}  //diable the button with the validate function
            className="btn btn-primary">login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// react should not work with document object, because it suppose to provide an abstraction
