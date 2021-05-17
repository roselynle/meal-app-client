import React, {useEffect} from "react"
import { AddtoCartBtn} from '../../components'
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

    console.log(error)



const params = useParams()
const id = params.id
// const recipe = useSelector(state => state.recipeReducer.recipes.find(recipe => recipe.id == params.id))


// const recipe = useSelector(state => state.recipeReducer.recipes)

console.log(recipe)

const ingredients = recipe.ingredients
// ingredients.entries(items).map(item => {
//     console.log(item)
//   })



console.log(typeof(ingredients))
if (ingredients){
ingredients.forEach(item => 
    console.log(item))
}

else{
    console.log('no ingredients')
}

// ingredients.forEach(item => 
//     console.log(item))

if (error){
    return(<h1>Oops... this recipe does not exist</h1>)
}
else {

    return(

        <>
       <h1>product page</h1>

    
    {/* <h2>{recipe.recipe_name} </h2>
    <h3>{recipe.recipe_description} </h3> */}
 
        <> <h2>{recipe.recipe_name} </h2>
        <h3>{recipe.recipe_description} </h3> 
        <ul> {ingredients && ingredients.map(item => <li>{item.amount}{item.measure}{item.ingredient}</li>)}</ul>
        <p>{recipe.instructions} </p> 

        </>

    
       
        </>
    
    )
    }
}

export default RecipePage