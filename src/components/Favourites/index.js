import React, { useEffect, useState } from "react";
import axios from 'axios'
import { RecipeCards } from '../index'
import { apiUrl } from '../../../config/config.js';
import { Droppable, Draggable } from "react-beautiful-dnd"


const Favourites = ({favData}) => {
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
