import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom'
import "./style.css"
import {SaveRecipeButton} from '..'

const RecipeCards = (props) => {

    console.log(props.recipe._id)
    // const history = useHistory()

    // const handleclick = (id) => {
    //     history.push(`/recipes/${id}`)
    //     //history.push keeps react state whereas redirect clears on refresh
    // }

    // const dispatch = useDispatch()
    // const  recipes  = useSelector(state => state.recipes)
    // const loading = useSelector(state => state.loading)

    // console.log(props.recipe.id)

 
    const url = `recipes/${props.recipe.id}`

    return (
        <div className="recipe-card">
            <img src={props.recipe.img_url} className="card-img-top" alt="Recipe Image"/>
            <div className="recipe-card-body">
                <h3 className="recipe-card-title">{props.recipe.title}</h3>
                <p>{props.recipe.description}</p>
                <ul> { props.recipe.diet_req && props.recipe.diet_req.map(item => <li>{item}</li>)}</ul>

                {/* <Redirect to={`recipes/${props.recipe.id}`}> */}
                {/* <a
                    href={`http://0.0.0.0:8080/recipes/${props.recipe.id}`} 
                    target="blank"
                    className="recipe-link"
                >
                    See recipe here!
                </a> */}
                

                <Link to={`/recipes/${props.recipe._id}`}>See more</Link>
                {/* <Link to={`/recipes/${props.recipe.id}`}>See more</Link> */}
                 {/* <button onClick={() => handleclick(props.recipe.id)}>
                    See recipe here!
                </button>  */}
                {props.showFavBtn ? <SaveRecipeButton id={props.recipe._id}/>: <button>x</button>
                }
                
   
   
                {/* link above to be updated */}
                {/* Create a save button and import here */}
            </div>
        </div>
    );
};

export default RecipeCards;