import { useState } from "react";
import { defaults } from "js-cookie";
import ReCaptchaV2 from "react-google-recaptcha";

const Captcha = ({ setCaptcha }) => {
  const handleToken = (token) => {
    setCaptcha((captcha) => {
      console.log("captcha token: ", token);

      return { ...captcha, token };
    });
  };

  const handleExpire = () => {
    setCaptcha((captcha) => {
      return { ...captcha, token: null };
    });
  };
  return (
    <ReCaptchaV2
      sitekey={process.env.REACT_APP_SITE_KEY}
      onChange={handleToken}
      onExpire={handleExpire}
    />
  );
};

export default Captcha;
