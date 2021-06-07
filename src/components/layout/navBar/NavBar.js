import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { NavBarContainer } from "./nav-bar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { Column } from "../../../shared/shared.styles";
import { useHistory } from "react-router";

const NavBar = () => {
  const { logout, loggedIn } = useContext(AuthContext);
  const history = useHistory();

  const bar = (
    <NavBarContainer>
      <Column>
        <div className="mattattheworld" onClick={() => history.push("/")}>
          @mattattheworld_
        </div>
      </Column>
      <Column></Column>
      <Column>
        <div className="auth-section">
          <div onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
          <div onClick={() => history.push("/user")}>
            <FontAwesomeIcon icon={faUserAstronaut} />
          </div>
        </div>
      </Column>
    </NavBarContainer>
  );

  return loggedIn ? bar : "Sign In / Sign Up";
};

export default NavBar;
