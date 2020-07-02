import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handlechange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    //fetch ki route em ivvali ? nenu evariki fetch cheyyali ?
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          console.log("Error");
          alert(data.error);
        }
        if (data.message) {
          console.log("SignIn");
          this.props.history.push('/SignIn');
        } else {
          const error = new Error(data.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };

  render() {
    return (
      <form className="demoForm" onSubmit={this.handlesubmit}>
        <h2>Signup Here</h2>
        <div className="panel panel-default mt-4"></div>

        <div className="panel panel-default">
          <label htmlFor="name">Enter your Username</label>
          <input
            type="name"
            required
            className="form-control"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handlechange}
          />
        </div>

        <div className="panel panel-default">
          <label htmlFor="email">Enter your Email</label>
          <input
            type="email"
            required
            className="form-control"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handlechange}
          />

          <div className="panel panel-default">
            <label htmlFor="password">Enter your Password</label>
            <input
              type="password"
              required
              className="form-control"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlechange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Sign In
        </button>
      </form>
    );
  }
}

export default withRouter(Signup);
