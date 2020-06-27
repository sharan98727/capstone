import React from "react";
import { Link } from "react-router-dom";
import "./navigationbar.css";
import Search from "./searchbar";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navitems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">
              <Search />
            </Link>
          </li>
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
