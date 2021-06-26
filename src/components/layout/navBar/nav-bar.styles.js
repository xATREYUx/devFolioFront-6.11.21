import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .auth-section {
    display: flex;
    flex-direction: row-reverse;
    color: #e85b25;
    font-size: medium;
  }

  .nav-icon {
    padding: 10px;
  }

  .mattattheworld {
    text-align: left;
    font-size: large;
    font-weight: 500;
    /* color: #e85b25; */
  }
`;
