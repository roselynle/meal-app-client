import React from "react";

const Home = () => {
    return (
        <>
            <h1>PlanEat</h1>
            <p>Plan It, Prep It, Eat It!</p>
            <a href="http://0.0.0.0:8080/login">
            <input type="button" value="Login" />
            </a>
            <a href="http://0.0.0.0:8080/register">
            <input type="button" value="Register" />
            </a>
        </>
    );
};

export default Home;
