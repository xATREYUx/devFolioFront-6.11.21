import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  /* display: flex;
  flex-direction: column;
  position: relative;
  /* padding: 10px; */
  /* min-width: 850px; */
  /* align-items: center; */
  /* margin: auto; */
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  /* padding: 10px; */
  /* min-width: 850px; */
  /* align-items: center; */
  /* margin: auto; */
`;

export const Column = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
  justify-content: center;
  /* padding: 0px 1rem 0px 1rem; */
  /* min-width: 320px; */
`;

export const Title = styled.div`
  margin: 10px 0 0px 0;
  font-size: 3rem;
  color: white;
  font-family: "Patrick Hand", cursive;
  &.inverse {
    color: black;
  }
`;

export const Paragraph = styled.div`
  font-family: "Libre Franklin", sans-serif;
`;

export const FlexBreak = styled.div``;

export const BaseCardStyle = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  min-width: 355px;
  padding: 10px;
`;
