import React from "react";
import { BackgroundVideo } from "../../components";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Home = () => {
    return (
        <>
        <BackgroundVideo/>
        <div className="welcome-container">
            <h1>PlanEat</h1>
            <p>Plan It, Prep It, Eat It!</p>
            <NavLink to="/login">
            <input type="button" value="Login" />
            </NavLink>
            <NavLink to="/register" >
            <input type="button" value="Register" />
            </NavLink>
            </div>
        </>
    );
};

export default Home;

