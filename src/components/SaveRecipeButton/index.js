import React from "react";


const saveRecipe = (recipe_id) => {
  


    //I need the user id from local storage
    const user_id = sessionStorage.getItem('id')
    console.log(user_id)

       // const url = `http://127.0.0.1:5000//user/${user_id}/favourites`
const url = `https://meal-prep-api.herokuapp.com/user/${user_id}/favourites/new`


  
    console.log(recipe_id);
    fetch(url, {
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

