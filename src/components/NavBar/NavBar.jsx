import React from 'react';
import Classes from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
const NavBar = () => {
    return(
      <nav className = {Classes.nav}>
      <div className = {Classes.item}>
        <NavLink to='/profile' activeClassName={Classes.activeLink}>Profile</NavLink>
      </div>
      <div className = {Classes.item}>
        <NavLink to='/dialogs' activeClassName={Classes.activeLink}>Messages</NavLink>
      </div>
      <div className = {Classes.item}>
        <NavLink to='/news' activeClassName={Classes.activeLink}>News</NavLink>
      </div>
      <div className = {Classes.item}>
        <NavLink to='/music' activeClassName={Classes.activeLink}>Music</NavLink>
      </div>
      <div className = {Classes.item}>
        <NavLink to='/settings' activeClassName={Classes.activeLink}>Settings</NavLink>
      </div>

    </nav>
    )
}

export default NavBar;
