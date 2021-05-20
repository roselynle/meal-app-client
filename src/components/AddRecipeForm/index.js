import React, { useState } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom"
import './style.css'
import { storage } from "../../firebase"
import { apiUrl } from '../../../config/config.js';

function AddRecipeForm() {

  const history = useHistory()
  const { register, control, handleSubmit, reset, watch } = useForm({

  });
  const { fields, append, remove } = useFieldArray(
    {
      control,
      name: "ingredients"
    }
  );
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageUploaded, setImageUploaded] = useState(false)

  const handleChange = e => {
    setImage(e.target.files[0]);


  };


  const handleUpload = (e) => {
    e.preventDefault()
    setImageUploaded(true)
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);

          });
      }
    );
  };

  const onSubmit = (data) => {
    data.image_url = url



    fetch(`${apiUrl}/recipes/new/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));

    history.push('/recipes')

  }

  const dietaryRequirements = ['Vegan', 'Vegetarian', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Nut-free']

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
        <input type="text" id="recipeName" {...register("recipeName")} required />
      </div>

      <div className="form-group">
        <label htmlFor="recipeDescription">Description:</label>
        <input type="text" id="recipeDescription" required placeholder="Tell us a little bit about your recipe..." {...register("recipeDescription")} />
      </div>

      <div className="form-group">
        <label htmlFor="imageUpload">Upload an image:</label>

        <div id="image-upload">
          <input type="file" id="imageUpload" onChange={handleChange} required />
          <button id="uploadbtn" onClick={handleUpload}>Upload</button>

        </div>
        {imageUploaded ? <img id="uploaded-img" src={url} /> : <p>Please choose an image and click upload</p>}

      </div>



      <div className="form-group">
        <label htmlFor="">Add your ingredients:</label>
        <ul>
          {fields.map((item, index) => {
            return (
              <li className="ingredient" key={item.id}>
                <input type="text" placeholder="2"
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
              append({ amount: "", measure: "", ingredient: "" });
            }}
          >
            Add Ingredient
          </button>
        </section>
      </div>

      <div className="form-group">
        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" required {...register("instructions")} rows="4" cols="50" placeholder="1. Chop the onions 
        2. Slice the carrots"></textarea>
      </div>





      <div className="form-group">
        <label>Is your recipe:</label>
        <div id="dietary-requirements">
          {dietaryRequirements.map((req, index) => {
            return (
              <div className="checkbox" aria-checked="false" key={index}>
                <label className="checkboxlabel" htmlFor={`${req}`}>{`${req}`}</label>
                <input type="checkbox" id={`${req}`} {...register(`dietary-req.${index}.${req}`)} />
              </div>

            )
          })}
        </div>
      </div>


      <input id="submit" type="submit" value="Add Recipe" />

    </form>
  );
}

export default AddRecipeForm;