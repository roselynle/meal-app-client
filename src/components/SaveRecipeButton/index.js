import React, { useState, useEffect } from "react";
import { apiUrl } from '../../../config/config.js';
import { useSelector } from 'react-redux';

const SaveRecipeButton = (props) => {

    const [saved, setSaved] = useState(false)
    const id = props.id

    const favRecipes = useSelector(state => state.favRecipeReducer.favrecipes)
    const user_id = sessionStorage.getItem('id')

    useEffect(() => {
        if (favRecipes.filter(recipe => recipe._id == id).length > 0) {
            setSaved(true)
        }
        else {
            setSaved(false)
        }
    }, [])

    const saveRecipe = (recipe_id) => {
        const url = `${apiUrl}/user/${user_id}/favourites/new`
        fetch(url, {
            method: "PATCH",
            body: JSON.stringify({ recipe_id: recipe_id }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .catch(err => console.error(err));
        setSaved(true)
    }

    const unsaveRecipe = (recipe_id) => {
        const url = `${apiUrl}/user/${user_id}/favourites/delete`
        fetch(url, {
            method: "DELETE",
            body: JSON.stringify({ recipe_id: recipe_id }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .catch(err => console.error(err));
        setSaved(false)
    }
    return (
        <>
            { saved ? <button onClick={() => unsaveRecipe(id)}>Unsave</button> : <button onClick={() => saveRecipe(id)}>Save recipe</button>}
        </>
    );
};

export default SaveRecipeButton;