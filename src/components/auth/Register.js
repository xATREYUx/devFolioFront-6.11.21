// import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import domain from "../../util/domain";
import Button from "../form-elements/button";
import { AuthFormContainer } from "./auth-form-styles";
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
    <AuthFormContainer id="auth-form-container">
      <form onSubmit={register} className="auth-form">
        <h2>Register</h2>
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
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <Button type="submit">Register</Button>
      </form>
    </AuthFormContainer>
  );
};

export default Register;
