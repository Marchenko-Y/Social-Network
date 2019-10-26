import React from "react";
import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

const SideBar = props => {
  const navLink = props.navLinks.map(n => (
    <div className={styles.item}>
      <NavLink to={n.path} activeClassName={styles.activeLink}>
        {n.title}
      </NavLink>
    </div>
  ));

  const friends = props.sidebarFriends.map(f => (
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

export default SideBar;
