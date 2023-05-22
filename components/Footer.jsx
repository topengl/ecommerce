import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

import { CookieConsent } from "react-cookie-consent";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 by topengl.</p>
      <p className="icons">
        <Link href="https://github.com/">
          <AiFillGithub> </AiFillGithub>
        </Link>
      </p>
      <CookieConsent
        location="bottom"
        buttonText="ok"
        cookieName="myAwesomeCookieName2"
        style={{
          background: "var(--background-all-2)",
          color: "var(--color-all)",
        }}
        buttonStyle={{
          color: "var(--color-all)",
          fontSize: "13px",
          background: "var(--bright-red)",
        }}
        expires={0} // number of days until the cookie expires
      >
        This website uses cookies to enhance the user experience.{" "}
        <Link href="/privacyPolicy">Privacy Policy</Link>
        <span style={{ fontSize: "10px" }}> ... </span>
      </CookieConsent>
    </div>
  );
};

export default Footer;
