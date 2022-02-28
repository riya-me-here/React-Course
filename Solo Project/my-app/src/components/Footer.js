import React from "react";
import facebookimg from "../images/facebook.png";
import linkedinimg from "../images/linkedin.png";
import githubimg from "../images/github.png";

export default function Footer() {
  return (
    <footer className="footer-div">
      <img src={facebookimg} alt="facebookimg" />
      <img src={linkedinimg} alt="linkedinimg" />
      <img src={githubimg} alt="githubimg" />
    </footer>
  );
}
