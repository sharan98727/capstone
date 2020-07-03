import React from "react";
import { Link } from "react-router-dom";
import "./navigationbar.css";
import Search from "./searchbar";

class Navigation extends React.Component {
  
  render() {
    return (
    <div>
      <div className="navbar-expand-sm bg-dark navbar-dark text-white">
        <div className="form-inline">
         <h3><span className="badge mx-2 badge-warning"><b>COMPANY</b></span></h3> 
         <Link className="navbar-brand ml-2" to="/">
           Home
         </Link>
        
         <Search />
        
          <Link className="navbar-brand ml-2" to="/housemaid">
           House-Maid
          </Link>
          <Link className="navbar-brand ml-2" to="/appliances">
           Appliances
          </Link>
          <Link className="navbar-brand ml-2" to="/SignIn">
           SignIn
          </Link>
         <Link className="navbar-brand ml-2" to="/Signup">
           Signup
          </Link>
         

         
        </div>
      </div>
    </div>
    );
  }
}

export default Navigation;
