import React, { useState, useEffect } from "react";
import "dotenv/config";
import Recipe from "./Recipe";

const Recipes = () => {
  const { APP_ID, APP_KEY } = process.env;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = async () => {
    const sampleData = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );

    const fetchedData = await sampleData.json();
    console.log(fetchedData.hits);
    setRecipes(fetchedData.hits);
  };

  const searchRecipe = e => {
    setSearch(e.target.value);
  };
  return (
    <>
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={searchRecipe}
        />
        <button className="search-button" type="search">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          weight={recipe.recipe.totalWeight}
          image={recipe.recipe.image}
        />
      ))}
    </>
  );
};

export default Recipes;
