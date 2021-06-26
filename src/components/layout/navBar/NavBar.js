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
import { render } from "@testing-library/react";

const NavBar = () => {
  const { logout, loggedIn } = useContext(AuthContext);
  const history = useHistory();
  return (
    <NavBarContainer>
      <Column>
        <div
          className="mattattheworld nav-icon"
          onClick={() => history.push("/")}
        >
          @mattattheworld_
        </div>
      </Column>
      <Column></Column>
      <Column>
        <div className="auth-section">
          {loggedIn && (
            <>
              <div className="nav-icon" onClick={logout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>
              <div className="nav-icon" onClick={() => history.push("/user")}>
                <FontAwesomeIcon icon={faUserAstronaut} />
              </div>
            </>
          )}
          {!loggedIn && (
            <>
              <div className="nav-icon" onClick={() => history.push("/auth")}>
                Sign In
              </div>
            </>
          )}
        </div>
      </Column>
    </NavBarContainer>
  );
};

export default NavBar;
