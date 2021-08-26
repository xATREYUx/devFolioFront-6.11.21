import React, { useContext, useEffect } from "react";
import { AppContainer } from "../shared/shared.styles";
import AuthContext from "../context/AuthContext";

import { PrivateRoute, AuthRoute } from "../routing/PrivateRoute";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserPage from "../components/layout/pages/UserPage";
import Register from "../components/auth/Register";
import NavBar from "../components/layout/navBar/NavBar";
import HomePage from "../components/layout/pages/HomePage";
import PostPage from "../components/layout/pages/PostPage";
import AuthPage from "../components/layout/pages/AuthPage";

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
          <Route exact path="/" component={HomePage} />
          <AuthRoute path="/auth" component={AuthPage} />
          {/* <AuthRoute path="/register" component={Register} auth={loggedIn} /> */}
          <PrivateRoute path="/user" component={UserPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="*" component={HomePage} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
};

export default Router;
