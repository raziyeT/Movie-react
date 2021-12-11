import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();
  
  componentDidMount(){
    this.username.current.focus();
  }
  
  
  handleSubmit = e =>{
        e.preventDefault();
        const uername= this.username.current.value ;

        // call the server
        console.log("sssubmit");
    }
  render() {
    return (
      <div>
        <h2>login form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="UserName">Username</label>
            <input ref={this.username} id="UserName" type="text" className="form-control"></input>
          </div>

          <div className="form-group">
            <label htmlFor="PassWord">Password</label>
            <input id="PassWord" type="text" className="form-control"></input>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
