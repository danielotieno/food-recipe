import React, { useState, useEffect } from "react";
import "./App.css";
import "dotenv/config";

function App() {
  const { APP_ID, APP_KEY } = process.env;

  const [recipes, setRecipes] = useState([]);

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

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="search">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
