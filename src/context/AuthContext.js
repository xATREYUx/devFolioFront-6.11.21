// import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import domain from "../util/domain";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  //   const [loggedIn, setLoggedIn] = useState(undefined);
  //   const getLoggedIn = async () => {
  //     const loggedInRes = await axios.get(`${domain}/auth/loggedIn`);
  //     setLoggedIn(loggedInRes.data);
  //   };
  //   useEffect(() => {
  //     getLoggedIn();
  //   }, []);
  //   return (
  //     <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
  //       {props.children}
  //     </AuthContext.Provider>
  //   );
  // true;
};
export default AuthContext;

export { AuthContextProvider };
