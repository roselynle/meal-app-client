import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const NavBar = () => {

    function handleLogout() {
    localStorage.clear();
}

    return (
        <nav role="navigation">
            <NavLink exact to="/recipes" activeClassName="current">
                Get Inspired!
            </NavLink>
            <NavLink exact to="/meals" activeClassName="current">
                Get Organised!
            </NavLink>
            <NavLink exact to="/" activeClassName="current" onClick={handleLogout}>
                Logout
            </NavLink>
        </nav>
    );
};
export default NavBar;