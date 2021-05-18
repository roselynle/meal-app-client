import React from "react";
import { MealCards, NavBar } from "../../components";

const Meals = () => {
    return (
        <>
            <NavBar />
            <div id="meals-container">
            <h1>Here are your meals for the week:</h1>
            <div className="row">
            <MealCards />
            </div>
            </div>
        </>
    );
};

export default Meals;
