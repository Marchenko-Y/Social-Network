import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={styles.header}>
      <img src="https://brandmark.io/logo-rank/random/pepsi.png" alt="logo" />

      <div className={styles.login_block}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
