import React, { useState } from "react";
import domain from "../../util/domain";

import axios from "axios";
import firebase from "firebase";

export const SignUp = async (props) => {
  console.log("New User Creation Initiated", props);
  const { email, password, passwordVerify } = props;

  try {
    console.log(email);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("New User Signed In As: ", userCredential.user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      })
      .then(
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then((token) => {
            console.log("New User idToken", token);
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
          })
      );
    axios.post(`${domain}/auth`);
    return;
  } catch (err) {
    console.log("New User Creation Error: ", err);
  }
};
