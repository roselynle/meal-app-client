import React, {useEffect, useState} from "react";
import axios from 'axios'
import {RecipeCards} from '../index'


const Favourites = () => {
    const user_id = sessionStorage.getItem('id')
    console.log(user_id)
    // const url = `http://127.0.0.1:5000//user/${user_id}/favourites`
const url = `https://meal-prep-api.herokuapp.com/user/${user_id}/favourites`


   

    const [favData, setFavData] = useState([])


    useEffect( async() => {

  
            try {
        
              const { data } = await axios.get(url)
        
              console.log(data)
             setFavData(data)
            } catch (err) {
                console.warn(err.message)
                }
     
        

  
    
}, [])


console.log(favData)



const renderRecipes = favData.map(data => <RecipeCards key={data._id} recipe={data} showFavBtn={false} />)
  
  



  return (



<section aria-label="recipes" id="recipes">{ renderRecipes }</section>
  
  
  
  
  )
    
  }
export default Favourites;
