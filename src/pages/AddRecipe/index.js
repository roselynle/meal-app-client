import React from "react";
import { AddRecipeForm }from '../../components'
import "../../App.css";

const AddRecipe = () => {
    return (
        <>
        <div id="new-recipe-container">
            <h2>Add a new recipe!</h2>
            <AddRecipeForm/>
            </div>
        </>
    );
};

export default AddRecipe;
