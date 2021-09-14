import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Kufam", cursive;
  /* background-color: red; */
  /* justify-content: space-between; */
  .logo {
    height: 30vw;
    max-width: 250px;
    /* margin: 40px; */
    /* margin-top: 60px; */
  }
`;

export const FooterContainer = styled.div`
  background-color: #e85b26;
  color: white;
`;

export const SubTitle = styled.div`
  font-family: "Patrick Hand", cursive;

  font-size: 1.5rem;
  /* max-width:  */
  margin: 50px;
`;
