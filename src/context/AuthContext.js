import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import domain from "../util/domain";
import firebase from "firebase";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  console.log("AuthContextProvider Initiated");

  const [loggedIn, setLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getLoggedIn = async () => {
    console.log("getLoggedIn Initiated");
    let validatedUser = await axios.get(`${domain}/auth/loggedIn`);
    console.log("AuthContextProvider validatedUser", validatedUser.data);
    setLoggedIn(validatedUser.data);
  };

  const logout = async () => {
    console.log("Logout Initiated");
    try {
      await firebase.auth().signOut();
      await axios.get(`${domain}/auth/logout`);
      setLoggedIn(null);
      // signed out
    } catch (e) {
      console.log("Logout erro", e);
    }
  };

  useEffect(() => {
    console.log("Initial Context");
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, loggedIn, getLoggedIn, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export { AuthContextProvider };
