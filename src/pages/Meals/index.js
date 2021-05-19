import React from "react";
import { MealCards, NavBar, Favourites } from "../../components";
import { DragDropContext, Droppable } from "react-beautiful-dnd"

const Meals = () => {

    const onDragEnd = (result) => {
        console.log(result)
        return
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    };

    return (
        <>
            <NavBar />
            <DragDropContext onDragEnd={onDragEnd}>
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
                <Favourites />
            </ DragDropContext>
        </>
    );
};

export default Meals;
