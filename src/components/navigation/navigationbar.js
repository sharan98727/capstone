import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import "./navigationbar.css";
import Search from "./searchbar";
import { connect } from "react-redux";
// import { isAuthenticated } from "../index";

class Navigation extends React.Component {
 
  // state = {
    
  //   isLogged:'',
  // };

  //      isAuthenticated(){
  //     if (typeof window == "undefined") {
  //       return false;
  //     }
  //     if (localStorage.getItem("jwt")) {
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //   }

  // componentDidMount() {
  //   this.setState({
  //     isLogged:this.props.tokenvalue,
  //   })
  //   console.log(this.state.isLogged);
  // }

  // handleclick = () => {
  //   this.setState ({
  //     isLogged:this.props.tokenvalue,
  //   })
  //   console.log(this.props.tokenvalue);
  // }

  

  render() {
    let message;
    if (this.props.tokenvalue) {
      message = (
        <Fragment>
          <Link className="navbar-brand ml-4" to="/Signout">
            Signout
          </Link>
          <Link className="navbar-brand ml-4" to="/Profile">
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
export default connect(mapStateToProps)(Navigation);
