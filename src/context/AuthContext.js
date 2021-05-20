import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import domain from "../util/domain";
import firebase from "firebase";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  console.log("AuthContextProvider Initiated");

  const [loggedIn, setLoggedIn] = useState(null);

  const getLoggedIn = async () => {
    console.log("getLoggedIn Initiated");
    let validatedUser = await axios.get(`${domain}/auth/loggedIn`);
    console.log("AuthContextProvider validatedUser", validatedUser);
    setLoggedIn(validatedUser.data);
  };

  useEffect(() => {
    console.log("Initial Context");
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export { AuthContextProvider };
