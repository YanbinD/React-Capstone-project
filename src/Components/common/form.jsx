import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    //(object to be validated, schema used, options)
    // By default, joy does abort-early to true, which return when find the first error
    const joiOption = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, joiOption);

    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // of erros is not an empty object, return, else return an empty object for error
    // can not just set state to errors because its being pass into the <Input /> as a props, an undefined prop will cause error
    if (errors) return;
    this.doSubmit();
  };
  // validProperty will valid individual input, if input change from valid to invalid, it will update the error state

  validProperty = ({ name, value }) => {
    const obj = { [name]: value }; //dynamically set the key to be the name of the currentTarget
    // when validating the field, we use subschema
    // get value from schema object (set at runtime)
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validProperty(input);

    if (errorMessage) {
      console.log(errorMessage);
      errors[input.name] = errorMessage;
    } else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderButton(label) {
    return (
      <button
        disabled={this.validate()} //diable the button with the validate function
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }

  // no render method required
}

export default Form;
