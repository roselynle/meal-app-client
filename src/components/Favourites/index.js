import React from "react";
import { RecipeCards } from '../index'
import { Droppable, Draggable } from "react-beautiful-dnd"
import "./style.css"


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
        <section aria-label="recipes" id="favRecipes" {...provided.droppableProps} ref={provided.innerRef}>
          {renderRecipes}{provided.placeholder}
        </section>
      )}
    </Droppable>
  )

}
export default Favourites;
