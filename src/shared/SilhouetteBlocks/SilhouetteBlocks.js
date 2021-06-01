import React from "react";
import {
  AnimationLookDownContainer,
  AnimationFreeFallContainer,
  AnimationCoupleSittingContainer,
} from "./silhouette-blocks.styles";
import PersonDown from "../../shared/images/personDown@3x.png";
import FreeFall from "../../shared/images/freefall.svg";
import CoupleSitting from "../../shared/images/girlAndBoy.svg";

export const AnimationLookDown = () => {
  return (
    <AnimationLookDownContainer>
      <img src={PersonDown} alt="person down" />
    </AnimationLookDownContainer>
  );
};

export const AnimationFreeFall = () => {
  return (
    <AnimationFreeFallContainer>
      <img src={FreeFall} alt="person-fallng" />
    </AnimationFreeFallContainer>
  );
};

export const AnimationCoupleSitting = () => {
  return (
    <AnimationCoupleSittingContainer>
      <img src={CoupleSitting} alt="couple-sitting" />
    </AnimationCoupleSittingContainer>
  );
};
