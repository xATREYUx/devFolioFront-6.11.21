import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

const NavBar = () => {
  const { logout, loggedIn } = useContext(AuthContext);
  return loggedIn ? (
    <button onClick={logout}>Logout</button>
  ) : (
    "Sign In / Sign Up"
  );
};

export default NavBar;
