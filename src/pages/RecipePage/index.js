import React, { useEffect } from "react"
import { AddtoCartBtn, SaveRecipeButton, NavBar, BackButton } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router"
import { fetchRecipeDetails } from "../../actions"
import { useHistory } from 'react-router-dom';

import "./style.css"



const RecipePage = () => {
    const params = useParams()
    const id = params.id
    console.log(id)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecipeDetails(id))
    }, [])

    const recipe = useSelector(state => state.singleRecipeReducer.recipe)
    const error = useSelector(state => state.singleRecipeReducer.error)
    const loading = useSelector(state => state.singleRecipeReducer.loading)


    
    const ingredients = recipe.ingredients
    console.log(ingredients)
    const diet_reqs = recipe.diet_req

    console.log(diet_reqs)

    if (error) {
        return (<h1>Oops... this recipe does not exist</h1>)
    }
    else {

        return (
            <>
                <NavBar />
                <BackButton/>


                {
                    loading ?
                        <h2>Loading . . .</h2>
                        :
                        <>
                        <div className="recipeInfo">
                            <div className="headers">
                                <h1>{recipe.title} </h1>
                                <h5>{recipe.description} </h5>
                            </div>

                            <img src={recipe.image_url} />
                            <ul className="ingredients"> {ingredients && ingredients.map((item, index) => <li key={index}>{item.amount} {item.measure} {item.ingredient}</li>)}</ul>

                            <div className="instructions">
                                <p>{recipe.instructions} </p>
                                {/* <ul> { diet_req && diet_req.map(item => <li>{item}</li>)}</ul> */}
                                <SaveRecipeButton id={id} />
                            </div>

                        </div>
                        </>
                }
            </>

        )
    }
}

export default RecipePage