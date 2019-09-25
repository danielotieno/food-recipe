import React, { useState, useEffect } from "react";
import "dotenv/config";
import axios from "axios";
import Recipe from "./Recipe";

const Recipes = () => {
  const { APP_ID, APP_KEY } = process.env;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("beef");

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const data = async () => {
    const sampleData = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=8&calories=591-722&health=alcohol-free`
    );

    const { data } = sampleData;
    setRecipes(data.hits);
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
    <div>
      <form className="search-form" onSubmit={getQuery}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={searchRecipe}
          placeholder="search recipe"
        />
        <button className="search-button" type="search">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
