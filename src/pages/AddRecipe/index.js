import React from "react";
import { AddRecipeForm }from '../../components'
import "../../App.css";

const AddRecipe = () => {
    return (
        <>
        <div id="new-recipe-container">
            <h1>Add a new recipe!</h1>
            <AddRecipeForm/>
            </div>
        </>
    );
};

export default AddRecipe;
