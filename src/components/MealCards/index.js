import React from "react";
import "../../App.css";

const days = [
    { day: "1" },
    { day: "2" },
    { day: "3" },
    { day: "4" },
    { day: "5" },
    { day: "6" },
    { day: "7" },
];

const MealCards = () => {
    return days.map((d) => (
            <div className="meal-card col-2">
                <div className="meal-card-body">
                    <h3 className="meal-card-title">Day {d.day}</h3>
                    <p>Meal</p>
                </div>
            </div>
    ));
};

export default MealCards;
