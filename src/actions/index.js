

import axios from "axios";


export const fetchRecipes = () => {
  return async (dispatch) => {
    try {

      const { data } = await axios.get(
        `http://127.0.0.1:5000/recipes/`

      );

      let recipeData = data.map((element, i) => ({
        id: element._id,
        recipe_name: element.title,
        recipe_description: element.description,
        ingredients: element.ingredients,
        diet_req: element.diet_req,
    //     correct_answer: element.correct_answer,
    //     answers: [...element.incorrect_answers, element.correct_answer],
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