import React from "react";


const saveRecipe = (recipe_id) => {

    //I need the user id from local storage
    const user_id = sessionStorage.getItem('id')
    console.log(user_id)

  
    console.log(recipe_id);
    fetch(`http://127.0.0.1:5000//user/${user_id}/favourites/new`, {
    method: "PATCH",
    body: JSON.stringify({recipe_id: recipe_id}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.error(err));
  
    }


const SaveRecipeButton = (props) => {

   const id = props.id

    return (
        <button onClick={() => saveRecipe(id)}>Save recipe</button>
    );
};

export default SaveRecipeButton;

