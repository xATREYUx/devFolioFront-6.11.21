// import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import domain from "../util/domain";
import firebase from "firebase";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [tokenId, setTokenId] = useState(undefined);

  const getLoggedIn = async () => {
    var user = await firebase.auth().currentUser;
    if (user === null) {
      return;
    }

    console.log("AuthContextProvider currentUser", user);

    const token = user.getIdToken(true);
    setLoggedIn(user);
    setTokenId(token);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn, tokenId }}>
      {props.children}
    </AuthContext.Provider>
  );
  // true;
};
export default AuthContext;

export { AuthContextProvider };
