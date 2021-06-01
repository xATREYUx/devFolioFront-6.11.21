import { useContext } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Register from "../components/auth/Register";
import AuthContext from "../context/AuthContext";
import UserPage from "../pages/UserPage";

export const PrivateRoute = ({ component }) => {
  const { loggedIn } = useContext(AuthContext);
  const finalComponent = loggedIn ? component : Register;

  return <Route component={finalComponent} />;
};

export const AuthRoute = ({ component, auth }) => {
  const history = useHistory();
  const { loggedIn } = useContext(AuthContext);
  const finalComponent = loggedIn ? component : history.push("/user");

  return <Route component={finalComponent} />;
};
