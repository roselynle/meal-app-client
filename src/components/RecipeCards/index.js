import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom'
import "./style.css"
import {SaveRecipeButton} from '..'

const RecipeCards = (props) => {

    console.log(props.recipe.image_url)

    return (
        <div className="recipe-card">
            <img src={props.recipe.image_url} className="card-img-top" alt="Recipe Image"/>
            <div className="recipe-card-body">
                <h3 className="recipe-card-title">{props.recipe.title}</h3>
                <p>{props.recipe.description}</p>
                <ul> { props.recipe.diet_req && props.recipe.diet_req.map((item, index) => <li key={index}>{item}</li>)}</ul>


                <Link to={`/recipes/${props.recipe._id}`}>See recipe</Link>
           
                {props.showFavBtn ? <SaveRecipeButton id={props.recipe._id}/>: <button>x</button>

                }
                
   
            </div>
        </div>
    );
};

export default RecipeCards;