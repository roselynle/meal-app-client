import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom'
import "./style.css"

const RecipeCards = (props) => {
    const history = useHistory()

    const handleclick = (id) => {
        history.push(`/recipes/${id}`)
        //history.push keeps react state whereas redirect clears on refresh
    }

    const dispatch = useDispatch()
    const  recipes  = useSelector(state => state.recipes)
    const loading = useSelector(state => state.loading)

    console.log(typeof(props.recipe.id))

    return (
        <div className="recipe-card">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeQdNORa8Fpm-w-iSPYlURM87gv_DH-MyjQ&usqp=CAU"} className="card-img-top" alt="Recipe Image"></img>
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

                <button >
                    Save 
                </button>
   
   
                {/* link above to be updated */}
                {/* Create a save button and import here */}
            </div>
        </div>
    );
};

export default RecipeCards;