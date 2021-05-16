import React from "react";

const RecipeCards = () => {
    return (
        <div className="recipe-card">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeQdNORa8Fpm-w-iSPYlURM87gv_DH-MyjQ&usqp=CAU"} className="card-img-top" alt="Recipe Image"></img>
            <div className="recipe-card-body">
                <h3 className="recipe-card-title">Recipe name prop here</h3>
                <a
                    href={"http://0.0.0.0:8080/recipes"} 
                    target="blank"
                    className="recipe-link"
                >
                    See recipe here!
                </a>
                {/* link above to be updated */}
                {/* Create a save button and import here */}
            </div>
        </div>
    );
};

export default RecipeCards;