import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Passtoken } from "../reducers/actions";

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
    role: "",
  };

  handlechange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });

    //   console.log(localStorage.getItem('jwt'));
  };

  authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      // console.log(localStorage.getItem('jwt'));

      next();
    }
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
        this.props.passtoken(data);

        if (data.Error) {
          console.log("Error");
          alert(data.Error);
        }
        if (data.user) {
          this.authenticate(data, () => {
            //          console.log("SignIn");
            this.props.history.push("/");
          });
        }
        if (data.seller) {
          this.authenticate(data, () => {
            //          console.log("SignIn");
            this.props.history.push("/seller");
          });
        }
        // else {
        //   const error = new Error(data.error);
        //   throw error;
        // }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };

  render() {
    return (
      <form
        className="demoForm"
        onSubmit={this.handlesubmit}
        style={{ margin: "auto", width: "500px" }}
      >
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
         </div>

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

          <div className="panel panel-default">
            <label htmlFor="password">Select the Role</label>
            <select
              type="role"
              required
              className="form-control"
              name="role"
              onChange={this.handlechange}
              value={this.state.role}
            >
            
              <option value="" disabled className="text-hide">
                Please select
              </option>
              <option value="0">User</option>
              <option value="1">Seller</option>
            </select>
          </div>
      
        <button type="submit" className="btn btn-primary mt-2">
          Sign In
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    passtoken: (data) => {
      dispatch(Passtoken(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Signin));
