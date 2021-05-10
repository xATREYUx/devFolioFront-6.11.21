import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import Customers from "./components/customers/Customers";
// import NavBar from "./components/layout/NavBar";
import AuthContext from "./context/AuthContext";

const Router = () => {
  const { loggedIn } = useContext(AuthContext);
  {
    loggedIn && console.log("loggedIn", loggedIn.uid);
  }
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/">
          <div>Home</div>
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
              <div>User Page</div>
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
