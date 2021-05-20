import React, {useEffect} from "react";
import { RecipeCards, NavBar } from "../../components";
import { fetchRecipes, fetchFavRecipes } from "../../actions"
import { useSelector, useDispatch } from 'react-redux';
import './style.css'


const Recipes = () => {

    const user_id = sessionStorage.getItem('id')


    const dispatch = useDispatch()
    const  recipes  = useSelector(state => state.recipeReducer.recipes)
    const loading = useSelector(state => state.loading)



    useEffect(() => {
        dispatch(fetchRecipes())
    }, [])

    useEffect(() => {
        dispatch(fetchFavRecipes(user_id))
    }, [])


    // console.log(favRecipes)
    const renderRecipes = recipes.map((recipe, index) => <RecipeCards key={index} showFavBtn={true} recipe={recipe} />)


    return (
        <>
        <NavBar/>
            <h2 style={{paddingTop: "50px"}}>Recipes</h2>
      
        {
            loading ?
                <h2>Loading . . .</h2>
                : <section role='recipeContainer' aria-label="recipes" id="recipes">{ renderRecipes }</section>
        }
        </>
       
    );
};

export default Recipes;
