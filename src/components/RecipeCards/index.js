import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom'
import "./style.css"
import {SaveRecipeButton} from '..'

const RecipeCards = (props) => {
    const history = useHistory()

    const handleclick = (id) => {
        history.push(`/recipes/${id}`)
        //history.push keeps react state whereas redirect clears on refresh
    }

    const dispatch = useDispatch()
    const  recipes  = useSelector(state => state.recipes)
    const loading = useSelector(state => state.loading)

    console.log(props.recipe.img_url)

    const url = `recipes/${props.recipe.id}`

    return (
        <div className="recipe-card">
            <img src={props.recipe.img_url} className="card-img-top" alt="Recipe Image"/>
            <div className="recipe-card-body">
                <h3 className="recipe-card-title">{props.recipe.recipe_name}</h3>
                <p>{props.recipe.recipe_description}</p>
                {/* <Redirect to={`recipes/${props.recipe.id}`}> */}
                {/* <a
                    href={`http://0.0.0.0:8080/recipes/${props.recipe.id}`} 
                    target="blank"
                    className="recipe-link"
                >
                    See recipe here!
                </a> */}
                


                 <button onClick={() => handleclick(props.recipe.id)}>
                    See recipe here!
                </button> 
                <SaveRecipeButton id={props.recipe.id}/>
                
   
   
                {/* link above to be updated */}
                {/* Create a save button and import here */}
            </div>
        </div>
    );
};

export default RecipeCards;