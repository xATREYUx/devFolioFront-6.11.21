import { defaults } from "js-cookie";
import React from "react";
import Login from "../../auth/Login";
import Register from "../../auth/Register";
import { AuthPageContainer } from "./auth-page-styles";

const AuthPage = () => {
  return (
    <AuthPageContainer id="auth-page-container">
      <Login />
      <Register />
    </AuthPageContainer>
  );
};

export default AuthPage;
