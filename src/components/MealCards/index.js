import React from "react";
import "../../App.css";
import { RecipeCards } from '..'
import { Droppable } from "react-beautiful-dnd"
import "./style.css"

const MealCards = ({ mealPlan }) => {

    const days = [
        { id: 1, day: "1" },
        { id: 2, day: "2" },
        { id: 3, day: "3" },
        { id: 4, day: "4" },
        { id: 5, day: "5" },
        { id: 6, day: "6" },
        { id: 7, day: "7" },
    ];

    const renderDays = () => {
        return days.map((d, index) => (

            <Droppable droppableId={`day${d.id}`} key={index}>
                {(provided) => (
                    <div key={index} className="meal-card" {...provided.droppableProps} ref={provided.innerRef}>
                        <div className="meal-card-body">
                            <h4 className="meal-card-title">Day {d.day}</h4>
                            <div>
                                {mealPlan[`day${d.id}`] ? <RecipeCards recipe={mealPlan[`day${d.id}`]} hideSave={true} hideDescription={true} /> : <p>Choose a meal</p>}
                            </div>
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        ));
    }

    return (
        <>
            {renderDays()}
        </>
    )
};

export default MealCards;
