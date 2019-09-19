import React, { useState, useEffect } from "react";
import "dotenv/config";
import Recipe from "./Recipe";

const Recipes = () => {
  const { APP_ID, APP_KEY } = process.env;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const data = async () => {
    const sampleData = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );

    const fetchedData = await sampleData.json();
    console.log(fetchedData.hits);
    setRecipes(fetchedData.hits);
  };

  const searchRecipe = e => {
    setSearch(e.target.value);
  };

  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <>
      <form className="search-form" onSubmit={getQuery}>
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
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          weight={recipe.recipe.totalWeight}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </>
  );
};

export default Recipes;
