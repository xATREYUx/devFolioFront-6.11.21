import React, { useState } from "react";
import domain from "../../util/domain";

import axios from "axios";
import Cookies from "js-cookie";

import firebase from "firebase";

export const createUser = async (props) => {
  console.log("New User Creation Initiated", props);
  const { email, password, passwordVerify } = props;
  let userObject = { tokenId: null };

  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("createUserWithEmailAndPassword", user);
        user
          .getIdToken()
          .then((tokenId) => {
            userObject = { tokenId: tokenId };
          })
          .catch((err) => console.log("new user error", err));
      })
      .catch((err) => {
        console.log("createUser Error", err);
      });
    return axios.post(`${domain}/auth`, userObject);
  } catch (err) {
    console.log("New User Creation Error: ", err);
  }
};
