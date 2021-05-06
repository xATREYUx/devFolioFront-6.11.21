import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import Customers from "./components/customers/Customers";
// import NavBar from "./components/layout/NavBar";
// import AuthContext from "./context/AuthContext";

const Router = () => {
  // const { loggedIn } = useContext(AuthContext);
  // const { loggedIn } = useContext();

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        {/* {loggedIn === false && ( */}
        {true && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/login">
              <Login />
            </Route> */}
          </>
        )}
        {/* {loggedIn === true && (
          <>
            <Route path="/customer">
              <Customers />
            </Route>
          </>
        )} */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
