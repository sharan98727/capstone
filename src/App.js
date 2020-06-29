import React from "react";
//import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigationbar";
import Signin from "./components/Signin/signin";
import Login from "./components/login/login";
import Home from "./components/Home/home";
import Appliance from "./components/appliances/appliances";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/SignIn">
          <Signin />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/appliances">
          <Appliance />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

