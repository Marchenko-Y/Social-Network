import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={styles.header}>
      <img src="https://brandmark.io/logo-rank/random/pepsi.png" alt="logo" />
      <div className={styles.login_block}>
        {props.isAuth ? (
          <NavLink to={"/profile/" + props.id}>{props.login}</NavLink>
        ) : (
          <NavLink to="/login">login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
