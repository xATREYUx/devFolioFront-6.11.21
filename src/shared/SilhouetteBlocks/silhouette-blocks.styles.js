import styled from "styled-components";

export const AnimationLookDownContainer = styled.div`
  margin: auto;
  z-index: -1;
  position: relative;
  height: 50px;
  width: 70%;
  margin-top: 30px;
  bottom: -2px;
  /* height: 12.4vh; */
  /* top: 5.3vh; */
  /* left: 45px; */
  img {
    position: absolute;
    right: 63%;
    height: 50px;
    /* bottom: 0; */
  }
`;

export const AnimationFreeFallContainer = styled.div`
  /* background-color: red; */
  z-index: -1;
  position: absolute;
  height: 45%;
  width: 20px;
  bottom: 0px;
  left: 0px;
  img {
    position: absolute;
    height: 30px;
    transform: scaleX(-1) translate(-10px);
    /* transform: translate(20px); */
  }
`;

export const AnimationCoupleSittingContainer = styled.div`
  display: flex;
  /* width: 100vw; */
  position: absolute;
  /* justify-content: center;
  text-align: center; */
  left: 35vw;
  top: -38px;
  /* background-color: red; */
  img {
    justify-content: center;
    height: 70px;
  }
`;
