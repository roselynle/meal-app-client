import React, {useState, useEffect} from "react";
import { MealCards, NavBar, Favourites } from "../../components";
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { apiUrl } from '../../../config/config.js';
import axios from 'axios'

const Meals = () => {
    const [favData, setFavData] = useState([])
    const [mealPlan, setMealPlan] = useState({})
    const user_id = sessionStorage.getItem('id')

    useEffect(async () => {
        try {
            const { data } = await axios.get(
                `${apiUrl}/user/${user_id}/favourites`
            );
            setFavData(data)
        } catch (err) {
            console.warn(err.message)
        }
        try {
            const { data } = await axios.get(
                `${apiUrl}/user/${user_id}/mealplan`
            );
            setMealPlan(data)
        } catch (err) {
            console.warn(err.message)
        }
    }, [])

    const onDragEnd = (result) => {
        console.log(result)
        if (result.destination.droppableId.substring(0,3) === "day") {
            setMealPlan(prev => ({
                ...prev,
                [result.destination.droppableId]: favData.filter(meal => meal._id == result.draggableId)[0]
            }))
            console.log(mealPlan)
        }
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
