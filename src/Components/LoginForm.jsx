import React, { Component } from "react";
import Input from "./Common/Input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {
      // username: "username not found",
      // password: "you should inter password",
    },
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
    this.setState({ errors });
    if (errors) return;
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h2>login form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
