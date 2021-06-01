import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import Login from "./components/auth/Login";
import UserPage from "../pages/UserPage";
import Register from "../components/auth/Register";
// import Customers from "./components/customers/Customers";
import NavBar from "../components/layout/navBar/NavBar";
import AuthContext from "../context/AuthContext";
import HomePage from "../pages/Home";
import { PrivateRoute, AuthRoute } from "../routing/PrivateRoute";

const Router = () => {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  {
    loggedIn && console.log("Router loggedIn: ", loggedIn);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <AuthRoute path="/register" component={Register} auth={loggedIn} />
        <PrivateRoute path="/user" component={UserPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
