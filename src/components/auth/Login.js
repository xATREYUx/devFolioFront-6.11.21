// import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import domain from "../../util/domain";
import { createUser, loginUser } from "./authActions";
import { AuthFormContainer } from "./auth-form-styles";
import Button from "../form-elements/button";

const Login = () => {
  const { getLoggedIn, loggedIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await loginUser(loginData);
    } catch (err) {
      console.log(err);
    }

    await getLoggedIn();
    console.log("getLoggedIn", loggedIn);

    history.push("/user");
  };

  return (
    <AuthFormContainer>
      <form onSubmit={login} className="auth-form">
        <h2>Login</h2>

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
          value={password}
        />

        <Button type="submit">Login</Button>
      </form>
    </AuthFormContainer>
  );
};

export default Login;
