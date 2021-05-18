import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const NavBar = () => {

    function handleLogout() {
    sessionStorage.clear();
}

    return (
        <nav className="main-nav" role="navigation">
            <NavLink exact to="/meals" activeClassName="current">
                Plan It!
            </NavLink>
            <NavLink exact to="/recipes" activeClassName="current">
                Prep It!
            </NavLink>
            <NavLink exact to="/" activeClassName="current" onClick={handleLogout}>
                Logout
            </NavLink>
        </nav>
    );
};
export default NavBar;