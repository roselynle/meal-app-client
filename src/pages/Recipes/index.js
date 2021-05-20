import React, {useEffect} from "react";
import { RecipeCards, NavBar } from "../../components";
import { fetchRecipes } from "../../actions"
import { useSelector, useDispatch } from 'react-redux';
import './style.css'


const Recipes = () => {



    const dispatch = useDispatch()
    const  recipes  = useSelector(state => state.recipeReducer.recipes)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [])

    console.log(recipes)
<<<<<<< HEAD
    const renderRecipes = recipes.map((recipe, index) => <RecipeCards key={index} showFavBtn={true} recipe={recipe} />)
=======
    const renderRecipes = recipes.map(recipe => <RecipeCards key={recipe._id} showFavBtn={true} recipe={recipe} />)
>>>>>>> staging


    return (
        <>
        <NavBar/>
            <h2>Recipes</h2>
      
        {
            loading ?
                <h2>Loading . . .</h2>
                : <section aria-label="recipes" id="recipes">{ renderRecipes }</section>
        }
        </>
       
    );
};

export default Recipes;
