import React, { useEffect, useState } from "react";
import axios from 'axios'

const MealChoice = ({chooseMeal}) => {

    const [input, setInput] = useState("");
    const [favData, setFavData] = useState([])
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

    const handleChange = e => {
        setInput(e.target.value)
    }

    const submitChoice = e => {
        e.preventDefault()
        chooseMeal(input)
    }

    const renderChoices  = () => {
        return favData.map(meal =>
            <option value={meal["_id"]}>{meal["title"]}</option>
        );
    };

    return (
        <>
        <form onSubmit={submitChoice} id="mealChoiceForm">
            <label htmlFor="meal">Choose today's meal:</label>
            <select id="mealSelect" name="mealSelect"
                value={input} onChange={handleChange}>
                {renderChoices()}
            </select>
        </form>
        </>
    )
}

export default MealChoice