import React, {useState, useEffect} from "react";
import {apiUrl} from '../../../config/config.js';
import { useSelector} from 'react-redux';





const SaveRecipeButton = (props) => {

    const [saved, setSaved] = useState(false)
    const id = props.id



    const favRecipes = useSelector(state=>state.favRecipeReducer.favrecipes)


    useEffect(() => {
        if (favRecipes.filter(recipe => recipe._id == id ).length > 0){
            setSaved(true)
        }
        else{
            setSaved(false)
        }
        
    }, [])


    // const id = props.id

//     console.log(favRecipes)
// if (
//     favRecipes.filter(recipe => recipe._id == id ).length > 0){
//         return (
//             <button onClick={() => saveRecipe(id)}>Unsave</button>
//         );
//     }
//     else{
//            return (
//         <>
//         <button onClick={() => handleClick(id, setSaved)}>Save recipe</button>

//         { saved? <p>saved</p>: <p></p>}

//         </>
//     );
//     }




const saveRecipe = (recipe_id) => {
   
    

    console.log('hello')

    //I need the user id from local storage
    const user_id = sessionStorage.getItem('id')
    console.log(user_id)

       // const url = `http://127.0.0.1:5000//user/${user_id}/favourites`
const url = `${apiUrl}/user/${user_id}/favourites/new`
  
    console.log(recipe_id);
    fetch(url, {
    method: "PATCH",
    body: JSON.stringify({recipe_id: recipe_id}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.error(err));

    setSaved(true)
  
    }


    const unsaveRecipe = (recipe_id) => {
   
    
    
        //I need the user id from local storage
        const user_id = sessionStorage.getItem('id')
     
    
           // const url = `http://127.0.0.1:5000//user/${user_id}/favourites`
    const url = `${apiUrl}/user/${user_id}/favourites/delete`
      
        console.log(recipe_id);
        fetch(url, {
        method: "DELETE",
        body: JSON.stringify({recipe_id: recipe_id}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.error(err));
    
        setSaved(false)
      
        }
    








    return (
        <>
       

        { saved?<button onClick={() => unsaveRecipe(id)}>Unsave</button>: <button onClick={() => saveRecipe(id)}>Save recipe</button>}

        </>
    );
   
   
};

export default SaveRecipeButton;

