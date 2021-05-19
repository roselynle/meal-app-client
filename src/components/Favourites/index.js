import React, { useEffect, useState } from "react";
import axios from 'axios'
import { RecipeCards } from '../index'
<<<<<<< HEAD
import { Droppable, Draggable } from "react-beautiful-dnd";


const Favourites = () => {

  const user_id = sessionStorage.getItem('id')
  console.log(user_id)

=======
import { apiUrl } from '../../../config/config.js';


const Favourites = () => {
  const user_id = sessionStorage.getItem('id')
  console.log(user_id)
  // const url = `http://127.0.0.1:5000//user/${user_id}/favourites`
  const url = `${apiUrl}/user/${user_id}/favourites`
>>>>>>> staging
  const [favData, setFavData] = useState([])

  useEffect(async () => {
    try {
<<<<<<< HEAD
      const { data } = await axios.get(
        `http://localhost:5000//user/${user_id}/favourites`
      );
=======
      const { data } = await axios.get(url)
>>>>>>> staging
      console.log(data)
      setFavData(data)
    } catch (err) {
      console.warn(err.message)
    }
  }, [])
<<<<<<< HEAD

  const renderRecipes = favData.map(data => <Draggable draggableId={toString(favData.indexOf(data))} key={favData.indexOf(data)} index={favData.indexOf(data)}>{(provided) => <div ref={provided.innerRef}><RecipeCards key={data._id} recipe={data} showFavBtn={false} /></div>}</Draggable>)
  return (
    <Droppable droppableId="Favourites">
      {(provided) =>
    <section aria-label="recipes" id="recipes" ref={provided.innerRef}>{renderRecipes}</section>
      }
    </Droppable>
  )
=======
  console.log(favData)
  const renderRecipes = favData.map(data => <RecipeCards key={data._id} recipe={data} showFavBtn={false} />)
  return (
    <section aria-label="recipes" id="recipes">{renderRecipes}</section>
  )

>>>>>>> staging
}
export default Favourites;
