import { apiUrl } from '../../config/config.js';
import axios from "axios";

export const fetchRecipes = () => {
  const url = `${apiUrl}/recipes`

  return async (dispatch) => {
    try {

      const { data } = await axios.get(url);

      let recipeData = data.map((element, i) => ({
        _id: element._id,
        title: element.title,
        description: element.description,
        ingredients: element.ingredients,
        diet_req: element.diet_req,
        instructions: element.instructions,
        image_url: element.image_url
      }));

      dispatch({
        type: "LOAD_RECIPES",
        payload: recipeData,
      });
    } catch (err) {
      console.warn(err.message)
      dispatch({
        type: "SET_ERROR",
        payload: err.message
      })
    }
  };
};

export const fetchRecipeDetails = (id) => {
  const url = `${apiUrl}/recipes/${id}`


  return async (dispatch) => {
    try {

      const { data } = await axios.get(url);

      let recipeData = {
        _id: data._id,
        title: data.title,
        description: data.description,
        ingredients: data.ingredients,
        diet_req: data.diet_req,
        instructions: data.instructions,
        image_url: data.image_url
      };

      dispatch({
        type: "LOAD_RECIPE",
        payload: recipeData,
      });
    } catch (err) {
      console.warn(err.message)
      dispatch({
        type: "SET_ERROR",
        payload: err.message
      })
    }
  }
}


export const fetchFavRecipes = (user_id) => {

  const url = `${apiUrl}/user/${user_id}/favourites`

  return async (dispatch) => {
    try {

      const { data } = await axios.get(url);

      let favrecipeData = data.map((element, i) => ({
        _id: element._id,
      }));


      dispatch({
        type: "LOAD_FAV_RECIPES",
        payload: favrecipeData,
      });

    } catch (err) {
      console.warn(err.message)
    }
  }
}