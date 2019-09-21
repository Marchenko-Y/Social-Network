import React from "react";
import Classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={Classes.header}>
      <img src="https://brandmark.io/logo-rank/random/pepsi.png" alt="logo" />
    </header>
  );
};

export default Header;
