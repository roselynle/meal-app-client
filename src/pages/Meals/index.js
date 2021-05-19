import React from "react";
import { MealCards, NavBar } from "../../components";

const Meals = () => {
    return (
        <>
            <NavBar />
            <div id="meals-container">
            <h2>Here are your meals for the week:</h2>
            <div className="row">
            <MealCards />
            </div>
            </div>

            <section>
                <h2> Your favourites</h2>
                <p> Drag and drop into you meal plan</p>
            </section>
        </>
    );
};

export default Meals;
