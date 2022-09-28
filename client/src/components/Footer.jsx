import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ by{" "}
        <a href="https://ristotoldsep.eu" target="_blank" rel="noreferrer" class="link">
          @ristotoldsep
        </a> using 
        <b> React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
