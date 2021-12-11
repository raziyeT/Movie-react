import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  username = React.createRef();

  componentDidMount() {
    this.username.current.focus(); //this current refrences to ref in input tag//
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const uername = this.username.current.value;
    // call the server but here for example we use log
    console.log("sssubmit");
  };

  handleChange = (e) => {
 

    console.log("e.currentTarget.name", e.currentTarget.name);
    console.log("e.currentTarget.value", e.currentTarget.value);
    console.log("e.currentTarget", e.currentTarget);
    
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
          <div className="form-group">
            <label htmlFor="UserName">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              ref={this.username}
              id="UserName"
              name="username"
              type="text"
              className="form-control"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="PassWord">Password</label>
            <input
              autoFocus
              value={account.password}
              onChange={this.handleChange}
              id="PassWord"
              name="password"
              type="text"
              className="form-control"
            ></input>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
