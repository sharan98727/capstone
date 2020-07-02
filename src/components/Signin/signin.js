
import React from "react";
import { withRouter } from "react-router";

class Signin extends React.Component {
  state = {
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
    fetch("/signin", {
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
          this.props.history.push('/');
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
      <form className="demoForm" onSubmit={this.handlesubmit} style={{margin:"auto",width:"500px"}}>
        <h2>Signin Here</h2>
        <div className="panel panel-default mt-4"></div>

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

export default withRouter(Signin);