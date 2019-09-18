import React from "react";

const Recipe = ({ title, calories, weight, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <p>{weight}</p>
      <img src={Image} alt="Chicken" />
    </div>
  );
};

export default Recipe;
