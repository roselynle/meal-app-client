import React from "react";
import { BackgroundVideo } from "../../components";
import { NavLink } from "react-router-dom";
import "../../App.css";
import image from "../../../public/images/logo.png";


const Home = () => {
    return (
        <>
        <BackgroundVideo/>
        <div className="welcome-container">
        <div className="logo-container">
            <h1>PlanEat</h1>
            <img src={image} style={{ width: "75px" }}/>
            </div>
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

