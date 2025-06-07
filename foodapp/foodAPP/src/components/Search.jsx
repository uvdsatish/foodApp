import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
// Using environment variable for API key
const API_KEY = "5fdfeb601cee47b89092b411caf18c5e";

export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("pizza");
  
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
