import React from "react";
import { RecipeCards, NavBar } from "../../components";

const Recipes = () => {
    return (
        <>
        <NavBar/>
            <h1>Recipes</h1>
            <RecipeCards/>
        </>
    );
};

export default Recipes;
