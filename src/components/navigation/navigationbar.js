import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import "./navigationbar.css";
import Search from "./searchbar";
import { connect } from "react-redux";
// import { isAuthenticated } from "../index";
import {signout} from "../signout/signout"
import { Passtoken } from "../reducers/actions";

class Navigation extends React.Component { 
  
  render() {
    let message;
    if (this.props.tokenvalue) {
      message = (
        <Fragment>
          <span className="navbar-brand ml-4" onClick={() => {
              signout(() => {
              console.log("Signout");
              });
              this.props.passtoken(localStorage.removeItem("jwt"));
              this.props.history.push('/SignIn')
            }}>
            Signout
          </span>
          <Link className="navbar-brand ml-4" to="/cart">
            Profile
          </Link>
        </Fragment>
      );
    } else {
      message = (
        <Fragment>
          <Link className="navbar-brand ml-4" to="/SignIn">
            SignIn
          </Link>
          <Link className="navbar-brand ml-4" to="/Signup">
            Signup
          </Link>
        </Fragment>
      );
    }
    return (
      <div>
        <div className="navbar-expand-sm bg-dark navbar-dark text-white">
          <div className="form-inline">
            <h3>
              <span className="badge mx-4 badge-warning">
                <b>COMPANY</b>
              </span>
            </h3>
            <Link className="navbar-brand ml-4" to="/">
              Home
            </Link>
            <Search />
            <Link className="navbar-brand ml-4" to="/housemaid">
              House-Maid
            </Link>
            <Link className="navbar-brand ml-4" to="/appliances">
              Appliances
            </Link>
            {message} 
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.token.token);
  return {
    tokenvalue:state.token.token,
  }
}

const mapDispatchToProps = dispatch => {
  return{
      passtoken: () => {
        dispatch(Passtoken(""));
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Navigation));
