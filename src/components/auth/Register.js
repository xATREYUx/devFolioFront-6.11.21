// import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import domain from "../../util/domain";
import { createUser } from "./authActions";

const Register = () => {
  const { getLoggedIn, loggedIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const history = useHistory();

  const register = async (e) => {
    e.preventDefault();
    console.log(getLoggedIn);
    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };
      await createUser(registerData);
    } catch (err) {
      console.log(err);
    }
    await getLoggedIn();
    history.push("/user");
  };

  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          valie={password}
        />
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
