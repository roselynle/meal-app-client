import React, { useEffect, useState } from "react";
import axios from 'axios'
import { RecipeCards } from '../index'
import { apiUrl } from '../../../config/config.js';
import { Droppable, Draggable } from "react-beautiful-dnd"


const Favourites = () => {
  const user_id = sessionStorage.getItem('id')
  console.log(user_id)
  // const url = `http://127.0.0.1:5000//user/${user_id}/favourites`
  const url = `${apiUrl}/user/${user_id}/favourites`
  const [favData, setFavData] = useState([])

  useEffect(async () => {
    try {
      const { data } = await axios.get(url)
      console.log(data)
      setFavData(data)
    } catch (err) {
      console.warn(err.message)
    }
  }, [])
  console.log(favData)
  const renderRecipes = favData.map((data, index) => 
  <Draggable key={data._id} draggableId={data._id} index={index}>
    {(provided) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}><RecipeCards key={data._id} recipe={data} showFavBtn={false}/></div>
    )}
  </Draggable>)


  return (
    <Droppable droppableId="favourites">
      {(provided) => (
        <section aria-label="recipes" id="recipes" {...provided.droppableProps} ref={provided.innerRef}>
          {renderRecipes}{provided.placeholder}
        </section>
      )}
    </Droppable>
  )

}
export default Favourites;
