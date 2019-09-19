import React from "react";
import style from "../css/recipe.module.css";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h3>Recipe</h3>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.weight}>{ingredient.text}</li>
        ))}
      </ul>
      <img className={style.image} src={image} alt="Food Recipe" />
    </div>
  );
};

export default Recipe;
