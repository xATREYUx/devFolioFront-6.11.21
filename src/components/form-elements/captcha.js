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
  let siteKey;
  if (process.env.NODE_ENV == "development") {
    siteKey = process.env.REACT_APP_SITE_KEY_DEVELOPMENT;
  } else {
    siteKey = process.env.REACT_APP_SITE_KEY;
  }
  return (
    <ReCaptchaV2
      sitekey={siteKey}
      onChange={handleToken}
      onExpire={handleExpire}
    />
  );
};

export default Captcha;
