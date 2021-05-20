import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Login from "./components/auth/Login";
import UserPage from "./pages/UserPage";
import Register from "./components/auth/Register";
// import Customers from "./components/customers/Customers";
// import NavBar from "./components/layout/NavBar";
import AuthContext from "./context/AuthContext";
import HomePage from "./pages/Home";

const Router = () => {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  {
    loggedIn && console.log("Router loggedIn: ", loggedIn);
  }
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {loggedIn === null && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/login">
              <Login />
            </Route> */}
          </>
        )}
        {loggedIn !== null && (
          <>
            <Route path="/user">
              <UserPage />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
