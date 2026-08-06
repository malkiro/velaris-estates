"use client";

import Turnstile from "react-turnstile";

const TurnstileRecaptcha = ({ setRecaptchaToken }) => {
  return (
    <Turnstile
      sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
      autoResetOnExpire={true}
      refreshExpired={"auto"}
      fixedSize={true}
      onVerify={(token) => {
        setRecaptchaToken(token);
      }}
    />
  );
};

export default TurnstileRecaptcha;
