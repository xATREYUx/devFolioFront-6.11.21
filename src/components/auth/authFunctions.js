import React, { useState } from "react";
import domain from "../../util/domain";

import axios from "axios";
import firebase from "firebase";

export const createUser = async (props) => {
  console.log("New User Creation Initiated", props);

  return new Promise(async (resolve, reject) => {
    const { email, password, passwordVerify } = props;
    var userObject = { user: null, tokenId: null };

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("New User Signed In As: ", userCredential.user);
          return (userObject.user = userCredential);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("New User errorMessage1", errorMessage);
        });
      await firebase
        .auth()
        .currentUser.getIdToken(true)
        .then((token) => {
          console.log("New User idToken", token);
          return (userObject.tokenId = token);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("New User errorMessage2", errorMessage);
        });
      axios.post(`${domain}/auth`, userObject);
    } catch (err) {
      console.log("New User Creation Error: ", err);
    }
    resolve(userObject);
  });
};
