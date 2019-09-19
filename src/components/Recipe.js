import React from "react";

const Recipe = ({ title, calories, weight, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <p>{weight}</p>
      <img src={image} alt="Chicken" />
    </div>
  );
};

export default Recipe;
