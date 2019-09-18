import React, { useState, useEffect } from "react";
import "./App.css";
import "dotenv/config";

function App() {
  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { APP_ID, APP_KEY } = process.env;

  const data = async () => {
    const sampleData = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );

    const fetchedData = await sampleData.json();
    console.log(fetchedData);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <input type="search" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default App;
