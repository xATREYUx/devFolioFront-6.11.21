import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import domain from "../../src/util/domain";
import firebase from "firebase";
import EnterUserAdmin from "../components/adminComponents/MakeUserAdmin";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  console.log("AuthContextProvider Initiated");

  const [loggedIn, setLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getLoggedIn = async () => {
    console.log("getLoggedIn Initiated");
    try {
      let validatedUser = await axios.get(`${domain}/auth/loggedIn`);
      validatedUser = validatedUser.data;
      console.log("AuthContextProvider validatedUser", validatedUser);
      // if (validatedUser) {
      //   firebase.auth().onAuthStateChanged((user) => {
      //     user
      //       .getIdTokenResult()
      //       .then((idTokenResult) => {
      //         validatedUser.user.claims = idTokenResult.claims;
      //         setLoggedIn(validatedUser);
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       });
      //   });
      // }
      setLoggedIn(validatedUser);

      console.log("AuthContextProvider validatedUser.user", validatedUser.user);
    } catch (e) {
      console.log("Logout error", e);
    }
  };

  const logout = async () => {
    console.log("Logout Initiated");
    try {
      await firebase.auth().signOut();
      await axios.get(`${domain}/auth/logout`);
      setLoggedIn(null);
      // signed out
    } catch (e) {
      console.log("Logout error", e);
    }
  };

  const CheckAdmin = () => {
    const [admin, setAdmin] = useState(false);
    // return <div style={{ fontSize: "45px" }}>Admin Section</div>;
    firebase.auth().onAuthStateChanged((user) => {
      user
        .getIdTokenResult()
        .then((idTokenResult) => {
          if (!!idTokenResult.claims.admin) {
            setAdmin(true);
          } else {
            console.log("Not an Admin");
            return null;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return (
      <div>
        {/* <div>{idTokenResult.claims.admin}</div> */}
        {admin && <EnterUserAdmin />}
      </div>
    );
  };

  useEffect(() => {
    console.log("Initial Context");
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoading, loggedIn, getLoggedIn, logout, CheckAdmin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export { AuthContextProvider };
