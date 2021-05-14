import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddRecipeForm() {
    return (
        
        <form >
          <label htmlFor="recipeName">Recipe Name</label>
          <input type="text" id="recipeName" name="recipeName" />
          <label htmlFor="descriptiption">Description</label>
          <input type="text" id="description" name="description" />
          <input type="button" id="addIngredient" name="addIngredient" value="Add ingredient"/>

         
          <label  htmlFor="">Is your dish any of the following?</label>
          <label htmlFor="vegetarian">Vegetarian</label>
          <input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian"/>
          <label htmlFor="vegan">Vegan</label>
          <input type="checkbox" id="vegan" name="vegan" value="vegan"/>
          <label htmlFor="pescatarian">Pescatarian</label>
          <input type="checkbox" id="pescatarian" value="pescatarian"/>
          <label htmlFor="dairy-free">Dairy-free</label>
          <input type="checkbox" id="dairy-free" value="dairy-free" value="dairy-free"/>
          <label htmlFor="gluten-free">Gluten-free</label>
          <input type="checkbox" id="gluten-free" value="gluten-free" value="gluten-free"/>
          <label htmlFor="nut-free">Nut-free</label>
          <input type="checkbox" id="nut-free" value="nut-free" value="nut-free"/>

          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions"></textarea>

          <input type="submit" value="Add recipe"/>


          






          {/* <input type="checkbox">Vegetarian</input>
          <input type="checkbox">Pescatarian</input>
          <input type="checkbox">Nut Free</input>  */}

          {/* <label htmlFor="">Instructions</label>
          <textarea></textarea> */}



        </form>

     

    );
  };



export default AddRecipeForm;
