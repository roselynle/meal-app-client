import React from "react";
import { AddRecipeForm, NavBar }from '../../components'
import "../../App.css";

const AddRecipe = () => {
    return (
        <>
        <NavBar />
        <div id="new-recipe-container">
            <h2>Add a new recipe!</h2>
            <AddRecipeForm/>
            </div>
        </>
    );
};

export default AddRecipe;
