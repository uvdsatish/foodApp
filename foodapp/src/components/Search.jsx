import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
// Using environment variable for API key
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Search() {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
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
