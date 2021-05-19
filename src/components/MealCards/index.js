import React, {useState, useEffect} from "react";
import "../../App.css";
import { MealChoice } from '..'
import axios from 'axios'

const MealCards = () => {
    const [favData, setFavData] = useState([])
    const [mealPlan, setMealPlan] = useState({})
    const user_id = sessionStorage.getItem('id')

    useEffect(async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:5000//user/${user_id}/favourites`
            );
            setFavData(data)
        } catch (err) {
            console.warn(err.message)
        }
    }, [])

    const days = [
        { id: 1, day: "1" },
        { id: 2, day: "2" },
        { id: 3, day: "3" },
        { id: 4, day: "4" },
        { id: 5, day: "5" },
        { id: 6, day: "6" },
        { id: 7, day: "7" },
    ];
    
    const chooseMeal = (choice, day) => {
        setMealPlan(prev => ({
            ...prev,
            [day]: choice
        }))
        console.log(mealPlan)
    }

    const sendPlan = async () => {
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.values(mealPlan))
            }
            const { data } = await axios.patch(
                `http://localhost:5000//user/${user_id}/mealplan/new`, options
            );
            console.log(data)
        } catch (err) {
            console.warn(err.message)
        }
    }

    const renderDays = () => {return days.map((d) => (
        <div key={d.id} className="meal-card">
            <div className="meal-card-body">
                <h4 className="meal-card-title">Day {d.day}</h4>
                <p>Meal</p>
                <MealChoice chooseMeal={chooseMeal} favourites={favData} dayNumber={d.day}/>
            </div>
        </div>
    ));
    }

    return (
        <>
        {renderDays()}
        
        <button onClick={sendPlan}>Plan my Week</button>
        </>
    )
};

export default MealCards;
