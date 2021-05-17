import React, {useEffect} from "react";
import { RecipeCards, NavBar } from "../../components";
import { fetchRecipes } from "../../actions"
import { useSelector, useDispatch } from 'react-redux';


const Recipes = () => {



    const dispatch = useDispatch()
    const  recipes  = useSelector(state => state.recipes)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [])

    console.log(recipes)

    return (
        <>
        <NavBar/>
            <h1>Recipes</h1>
            
            {
                recipes? <h1> we have recipes</h1>: <h1>no recipes</h1>
            }
        </>
    );
};

export default Recipes;
