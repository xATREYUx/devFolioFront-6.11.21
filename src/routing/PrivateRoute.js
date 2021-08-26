import { useContext } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
// import Register from "../components/auth/Register";
import AuthContext from "../context/AuthContext";
import UserPage from "../components/layout/pages/UserPage";
import AuthPage from "../components/layout/pages/AuthPage";

export const PrivateRoute = ({ component }) => {
  const { loggedIn } = useContext(AuthContext);
  const finalComponent = loggedIn ? component : AuthPage;

  return <Route component={finalComponent} />;
};

export const AuthRoute = ({ component }) => {
  // const history = useHistory();
  const { loggedIn } = useContext(AuthContext);
  const finalComponent = !loggedIn ? component : UserPage;

  return <Route component={finalComponent} />;
};
