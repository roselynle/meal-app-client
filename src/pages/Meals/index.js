import React from "react";
import { MealCards, NavBar, Favourites } from "../../components";
import { DragDropContext } from "react-beautiful-dnd"

const Meals = () => {

    const onDragEnd = ({ source, destination }) => {
        if (!destination) return null

        if (source.droppableId === destination.droppableId &&
            destination.index === source.index) return null;

        const start = columns[source.droppableId];
        const end = columns[destination.droppableId];

        if (start === end) {
            // Move the item within the list
            // Start by making a new list without the dragged item
            console.log(start);
            const newList = start.list.filter((_, idx) => idx !== source.index);

            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.list[source.index]);

            // Then create a new copy of the column object
            const newCol = {
                id: start.id,
                list: newList
            };

            // Update the state
            setColumns((state) => ({ ...state, [newCol.id]: newCol }));
            return null;
        } else {
            // If start is different from end, we need to update multiple columns
            // Filter the start list like before
            const newStartList = start.list.filter((_, idx) => idx !== source.index);

            // Create a new start column
            const newStartCol = {
                id: start.id,
                list: newStartList
            };

            // Make a new end list array
            const newEndList = end.list;

            // Insert the item into the end list
            newEndList.splice(destination.index, 0, start.list[source.index]);

            // Create a new end column
            const newEndCol = {
                id: end.id,
                list: newEndList
            };

            // Update the state
            setColumns((state) => ({
                ...state,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol
            }));
            return null;
        }
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
