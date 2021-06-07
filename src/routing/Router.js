import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import Login from "./components/auth/Login";
import UserPage from "../components/layout/pages/UserPage";
import Register from "../components/auth/Register";
// import Customers from "./components/customers/Customers";
import NavBar from "../components/layout/navBar/NavBar";
import AuthContext from "../context/AuthContext";
import HomePage from "../components/layout/pages/HomePage";
import { PrivateRoute, AuthRoute } from "../routing/PrivateRoute";
import PostPage from "../components/layout/pages/PostPage";
import { AppContainer } from "../shared/shared.styles";
const Router = () => {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  {
    loggedIn && console.log("Router loggedIn: ", loggedIn);
  }

  return (
    <BrowserRouter>
      <AppContainer>
        <NavBar />
        <Switch>
          <AuthRoute path="/register" component={Register} auth={loggedIn} />
          <PrivateRoute path="/user" component={UserPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={HomePage} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
};

export default Router;
