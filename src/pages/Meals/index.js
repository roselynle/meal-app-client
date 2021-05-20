import React, {useState, useEffect} from "react";
import { MealCards, NavBar, Favourites, AboutModal} from "../../components";
import { DragDropContext } from "react-beautiful-dnd"
import { apiUrl } from '../../../config/config.js';
import { useSelector, useDispatch } from 'react-redux'
import { fetchFavRecipes } from "../../actions"
import axios from 'axios'

const Meals = () => {
    const favData = useSelector(state => state.favRecipeReducer.favrecipes)
    const [mealPlan, setMealPlan] = useState({})
    const user_id = sessionStorage.getItem('id')

    const dispatch = useDispatch()
    useEffect(async () => {
        dispatch(fetchFavRecipes(user_id))
        try {
            const { data } = await axios.get(
                `${apiUrl}/user/${user_id}/mealplan`
            );
            setMealPlan(data)
        } catch (err) {
            console.warn(err.message)
        }
    }, [])

    useEffect(async () => {
        if (Object.keys(mealPlan).length > 0) {
            try {
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(mealPlan)
                }
                const { data } = await axios.patch(
                    `${apiUrl}/user/${user_id}/mealplan/new`, options
                );
            } catch (err) {
                console.warn(err.message)
            }
        }
    }, [mealPlan])

    const sendIngredients = async () => {
        try {
            const { data } = await axios.get(
                `${apiUrl}/user/${user_id}/mealplan/ingredients`
            );
        } catch (err) {
            console.warn(err.message)
        }
    }

    const onDragEnd = (result) => {
        if (result.destination.droppableId.substring(0, 3) === "day") {
            setMealPlan(prev => ({
                ...prev,
                [result.destination.droppableId]: favData.filter(meal => meal._id == result.draggableId)[0]
            }))
        }
        return
    };

    return (
        <>
            <NavBar />
            <AboutModal/>
            <DragDropContext onDragEnd={onDragEnd}>
                <div id="meals-container">
                    <h2>Here are your meals for the week:</h2>
                    <div className="row">
                        <MealCards mealPlan={mealPlan} />
                    </div>
                </div>

                <button onClick={sendIngredients}>Send me a shopping list<i className="fas fa-shopping-cart"></i></button>
                <section>
                    <h2> Your favourites</h2>
                    <p> Drag and drop into you meal plan</p>
                </section>
                <Favourites favData={favData} />
            </ DragDropContext>
        </>
    );
};

export default Meals;
