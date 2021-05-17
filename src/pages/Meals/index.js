import React from "react";
import { MealCards, NavBar } from "../../components";

const Meals = () => {
    return (
        <>
            <NavBar />
            <h1>Here are your meals for the week:</h1>
            <MealCards />
        </>
    );
};

export default Meals;
