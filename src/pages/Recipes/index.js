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
    const renderRecipes = recipes.map(recipe => <RecipeCards key={recipe._id} showFavBtn={true} recipe={recipe} />)


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
