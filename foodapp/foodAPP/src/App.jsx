import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
function App() {
  const [foodData, setfoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setfoodData={setfoodData}/>
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
