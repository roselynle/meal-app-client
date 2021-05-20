import React, { useEffect } from "react"
import { AddtoCartBtn, SaveRecipeButton, NavBar } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router"
import { fetchRecipeDetails } from "../../actions"
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
    const diet_reqs = recipe.diet_req

    console.log(diet_reqs)

    if (error) {
        return (<h1>Oops... this recipe does not exist</h1>)
    }
    else {

        return (
            <>
                <NavBar />

                {
                    loading ?
                        <h2>Loading . . .</h2>
                        :
                        <>
                            <div className="recipeInfo">
                                <h1>{recipe.title} </h1>
                                <div className="infoContainer">
                                    <img src={recipe.image_url} />
                                    <div className="instructions">
                                        <h3>{recipe.description} </h3>
                                        <ul> {ingredients && ingredients.map((item, index) => <li key={index}>{item.amount}{item.measure}{item.ingredient}</li>)}</ul>
                                        <p>{recipe.instructions} </p>
                                        {/* <ul> { diet_req && diet_req.map(item => <li>{item}</li>)}</ul> */}
                                    </div>
                                </div>
                                <SaveRecipeButton id={id} />
                            </div>
                        </>
                }
            </>

        )
    }
}

export default RecipePage