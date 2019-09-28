import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
const NavBar = props => {
  const navLink = props.state.navLinks.map(n => (
    <div className={styles.item}>
      <NavLink to={n.path} activeClassName={styles.activeLink}>
        {n.title}
      </NavLink>
    </div>
  ));

  const friends = props.state.friends.map(f => (
    <div className={styles.friendsItem}>
      <img src={f.avatar} alt="avatar" />
      <p>{f.name}</p>
    </div>
  ));

  return (
    <nav className={styles.nav}>
      {navLink}
      <div className={styles.friendsBlock}>
        <p>Friends</p>
        <div className={styles.friendsItems}>{friends}</div>
      </div>
    </nav>
  );
};

export default NavBar;
