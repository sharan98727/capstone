import React from "react";
import { Link } from "react-router-dom";
import "./navigationbar.css";
import Search from "./searchbar";

class Navigation extends React.Component {
  render() {
    return (
    <div>
      <nav className="navbar-expand-sm bg-dark navbar-dark text-white">
        <form className="form-inline">
         <h3><span className="badge mx-2 badge-warning"><b>COMPANY</b></span></h3> 
         <Link className="navbar-brand ml-2" to="/">
           Company
         </Link>
         <Link to="/about">
              <Search />
         </Link> 
          <Link className="navbar-brand ml-2" to="/housemaid">
           House-Maid
          </Link>
          <Link className="navbar-brand ml-2" to="/appliances">
           Appliances
          </Link>
          <Link className="navbar-brand ml-2" to="/SignIn">
           SignUp
          </Link>
         <Link className="navbar-brand ml-2" to="/Login">
           Login
          </Link>
         

         
        </form>
      </nav>
    </div>
    );
  }
}

export default Navigation;
