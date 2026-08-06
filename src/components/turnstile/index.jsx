"use client";

import Turnstile from "react-turnstile";

const TurnstileRecaptcha = ({ setRecaptchaToken }) => {
  return (
    <Turnstile
      sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY || "1x00000000000000000000AA"}
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
