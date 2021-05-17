
import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import './style.css'




function AddRecipeForm() {
  const { register, control, handleSubmit, reset, watch } = useForm({

  });
  const { fields, append, remove } = useFieldArray(
    {
      control,
      name: "ingredients"
    }
  );

  const onSubmit = (data) => console.log("data", data);

  const dietaryRequirements  = ['Vegan', 'Vegetarian','Pescatarian', 'Gluten-free', 'Dairy-free', 'Nut-free']

  // Ability to control fields - like onchange
  // const watchRecipeName = watch("recipeName");
  // const watchDescription = watch("recipeDescription");
  // const watchIngredientInput =watch(`ingredients`)
  // const instructions =watch(`Instructions`)



  // console.log(watchRecipeName);
  // console.log(watchDescription)
  // console.log(watchIngredientInput)
  // console.log(instructions)

  // The following is useWatch example
  // console.log(useWatch({ name: "test", control }));



  return (
    <form aria-label="Add a recipe" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="recipeName">Recipe Name:</label>
        <input type="text" id="recipeName" {...register("recipeName")} />
      </div>

      <div className="form-group">
        <label htmlFor="recipeDescription">Description:</label>
        <input type="text" id="recipeDescription" {...register("recipeDescription")} />
      </div>

      <div className="form-group">
        <label htmlFor="imageUpload">Upload an image:</label>
        <input type="file" {...register("image-upload")} />
      </div>

      <div  className="form-group">
        <label htmlFor="">Add your ingredients:</label>
        <ul>
          {fields.map((item, index) => {
            return (
              <li className="ingredient" key={item.id}>
                  <input type="text" placeholder= "2"
                  defaultValue={`${item.amount}`} // make sure to set up defaultValue
                  {...register(`ingredients.${index}.amount`)}
                />
                <select defaultValue={`${item.measure}`} // make sure to set up defaultValue
                  {...register(`ingredients.${index}.measure`)}>
                      <option value="null">-</option>

                      <option value="g">kg</option>
                      <option value="g">g</option>
                      <option value="L">L</option>
                      <option value="mL">ml</option>
                      <option value="tbsp">tbsp</option>
                      <option value="tsp">tsp</option> 
                      {/* NEED TO EDIT */}

                  </select>
                  <input type="text"
                placeholder="eggs"
                  defaultValue={`${item.ingredient}`} // make sure to set up defaultValue
                  {...register(`ingredients.${index}.ingredient`)}
                />
                <button aria-role="delete ingredient" id="delete-button" type="button" onClick={() => remove(index)}>
                &#10008;
                </button>
              </li>
            );
          })}
        </ul>
      
        <section>
          <button aria-label="add ingredient"
            type="button"
            onClick={() => {
              append({ amount:"", measure: "",ingredient: "" });
            }}
          >
            Add Ingredient
          </button>
        </section>
      </div>

  
      <div className="form-group">
        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" {...register("Instructions")}></textarea>
      </div>


      <fieldset id="dietary-requirements">
        <legend>Is your food any of the following?</legend>
        {dietaryRequirements.map((req, index) => {
            return (
              <div className="checkbox" aria-checked="false" key={index}>
              <label htmlFor={`${req}`}>{`${req}`}</label>
              <input type="checkbox"   id={`${req}`} {...register(`dietary-req.${index}.${req}`)}/>
              </div>

            )})}
        </fieldset>

      <input type="submit" />
    </form>
  );
}

export default AddRecipeForm;