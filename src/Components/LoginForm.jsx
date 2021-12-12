import React, { Component } from "react";
import Input from "./Common/Input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  username = React.createRef();

  componentDidMount() {
    // this.username.current.focus();
  }
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // call the server but here for example we use log
    // const uername = this.username.current.value;
    const errors = this.validate();
    console.log("erroes", errors);
    this.setState({ errors: errors || {} }); //errors should never be null
    if (errors) return;
  };

  validateProperty = (input) => {
    if( input.name === "username"){
      if(input.value.trim() === "") return "username is required";
    }
      if( input.name === "password"){
      if (input.value.trim() === "") return "password is required"
    }
  
  };

  handleChange = ({ currentTarget : input}) => {
    //const{ currentTarget : input} = e

    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    console.log("valid", errorMessage);
    console.log("input name",errors[input.name]);
    if(errorMessage)  errors[input.name]= errorMessage ;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value; 
    this.setState({ account , errors});
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h2>login form</h2>
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
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
