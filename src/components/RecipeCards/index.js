import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom'
import "./style.css"
import {SaveRecipeButton} from '..'

const RecipeCards = (props) => {
    return (
        <div className="recipe-card">
             <h3 className="recipe-card-title">{props.recipe.title}</h3>
            <img src={props.recipe.image_url} className="card-img-top" alt="Recipe Image"/>
            <div className="recipe-card-body">
               
            {props.hideDescription ? null : <p>{props.recipe.description}</p> }

                
                <ul> { props.recipe.diet_req && props.recipe.diet_req.map((item, index) => <li key={index}>{item}</li>)}</ul>

                <div className="buttons">
                <Link className="link" to={`/recipes/${props.recipe._id}`}>See recipe</Link>
                {props.hideSave ? null : <SaveRecipeButton id={props.recipe._id}/> }
                </div>

            </div>
        </div>
    );
};

export default RecipeCards;