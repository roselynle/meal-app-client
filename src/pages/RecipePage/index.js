import React, {useEffect} from "react"
import { AddtoCartBtn, SaveRecipeButton, NavBar} from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import {useParams } from "react-router"
import { fetchRecipeDetails } from "../../actions"



const RecipePage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecipeDetails(id))
    }, [])

    const recipe  = useSelector(state => state.singleRecipeReducer.recipe)
    const error = useSelector(state => state.singleRecipeReducer.error)
    const loading = useSelector(state => state.singleRecipeReducer.loading)

    const params = useParams()
    const id = params.id

    const ingredients = recipe.ingredients
    const diet_reqs = recipe.diet_req


if (error){
    return(<h1>Oops... this recipe does not exist</h1>)
}
else {

    return(
        <> 
        <NavBar/>
        <h1>{recipe.recipe_name} </h1>
        <h3>{recipe.recipe_description} </h3> 
        <ul> {ingredients && ingredients.map(item => <li>{item.amount}{item.measure}{item.ingredient}</li>)}</ul>
        <p>{recipe.instructions} </p> 
        <ul> { diet_reqs && diet_reqs.map(item => <li>{item}</li>)}</ul>
        <SaveRecipeButton id={id}/>
        </>
    
    )
    }
}

export default RecipePage