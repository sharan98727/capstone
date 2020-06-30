import React from "react";
//import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigationbar";
import Signin from "./components/Signin/signin";
import Login from "./components/login/login";
import Home from "./components/Home/home";
//import Appliance from "./components/appliances/appliances";
import Appcontainer from "./components/appliances/appliancecontainer";
import Housemaid from "./components/housemaids/housemaid";
import Cart from "./components/cart/cart"
//import Search from "./components/navigation/searchbar";
import Searchshow from "./components/searchshow/searchshow"

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
          <Appcontainer />
        </Route>
        <Route path="/housemaid">
          <Housemaid />
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/search">
          <Searchshow/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

