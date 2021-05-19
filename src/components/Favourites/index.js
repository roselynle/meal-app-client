import React, { useEffect, useState } from "react";
import axios from 'axios'
import { RecipeCards } from '../index'
import { Droppable, Draggable } from "react-beautiful-dnd";


const Favourites = () => {

  const user_id = sessionStorage.getItem('id')
  console.log(user_id)

  const [favData, setFavData] = useState([])

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000//user/${user_id}/favourites`
      );
      console.log(data)
      setFavData(data)
    } catch (err) {
      console.warn(err.message)
    }
  }, [])

  const renderRecipes = favData.map(data => <Draggable draggableId={toString(favData.indexOf(data))} key={favData.indexOf(data)} index={favData.indexOf(data)}>{(provided) => <div ref={provided.innerRef}><RecipeCards key={data._id} recipe={data} showFavBtn={false} /></div>}</Draggable>)
  return (
    <Droppable droppableId="Favourites">
      {(provided) =>
    <section aria-label="recipes" id="recipes" ref={provided.innerRef}>{renderRecipes}</section>
      }
    </Droppable>
  )
}
export default Favourites;
