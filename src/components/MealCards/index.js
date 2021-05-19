import React from "react";
import "../../App.css";
import { MealChoice } from '..'

const days = [
    { id: 1, day: "1" },
    { id: 2, day: "2" },
    { id: 3, day: "3" },
    { id: 4, day: "4" },
    { id: 5, day: "5" },
    { id: 6, day: "6" },
    { id: 7, day: "7" },
];

const chooseMeal = (choice) => {
    console.log(choice)
}

const MealCards = () => {
    return days.map((d) => (
        <div key={d.id} className="meal-card">
            <div className="meal-card-body">
                <h4 className="meal-card-title">Day {d.day}</h4>
                <p>Meal</p>
                <MealChoice chooseMeal={chooseMeal}/>
            </div>
        </div>
    ));
};

export default MealCards;
