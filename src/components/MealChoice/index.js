import React, { useState } from "react";
import "../../App.css";

const MealChoice = ({chooseMeal, favourites, dayNumber}) => {

    const [input, setInput] = useState("");

    const handleChange = e => {
        chooseMeal(e.target.value, dayNumber)
        setInput(e.target.value)
    }

    const renderChoices  = () => {
        return favourites.map(meal =>
            <option value={meal["_id"]} key={meal["_id"]}>{meal["title"]}</option>
        );
    };

    return (
        <>
        <form id="mealChoiceForm">
            <label htmlFor="meal">Choose today's meal:</label>
            <select id="mealSelect" name="mealSelect"
                value={input} onChange={handleChange}>
                <option disabled defaultValue value="">Choose a meal</option>
                {renderChoices()}
            </select>
        </form>
        </>
    )
}

export default MealChoice