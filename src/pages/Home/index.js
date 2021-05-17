import React from "react";
import { BackgroundVideo } from "../../components";
import "../../App.css";

const Home = () => {
    return (
        <>
        <BackgroundVideo/>
        <div className="welcome-container">
            <h1>PlanEat</h1>
            <p>Plan It, Prep It, Eat It!</p>
            <a href="http://0.0.0.0:8080/login">
            <input type="button" value="Login" />
            </a>
            <a href="http://0.0.0.0:8080/register">
            <input type="button" value="Register" />
            </a>
            </div>
        </>
    );
};

export default Home;
