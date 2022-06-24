import React, { useEffect, useState } from "react";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./key";
import Axios from "axios";
import Reciptytil from './Recipytil'

function App() {
  const [input, setInput] = useState("");
  const [recipe,setRecipe]=useState([])
  const [healthlable,setHealthlable]=useState('vegan')
  const api = `https://api.edamam.com/search?q=${input}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthlable}`;
  const getRecipe = async () => {
    const data = await Axios.get(api);
    setRecipe(data.data.hits);
    
  };
  const getSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };

  return (
    <div className="App">
      <h1>Food recipe Plaza </h1>
      <form className="app_search" onSubmit={getSubmit}>
        <input
          type="text"
          className="app_input"
          placeholder="Enter Ingridient"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <input type="submit" className="app_submit" value="search" />
        <select className="app_healthlable">
          <option value="vegan" onClick={()=>setHealthlable('vegan')} >Vegan</option>
          <option value="vegetarian" onClick={()=>setHealthlable('vegetarian')} >vegetarian</option>
          <option value="paleo" onClick={()=>setHealthlable('paleo')} >paleo</option>
          <option value="dairy-free" onClick={()=>setHealthlable('dairy-free')} >dairy-free</option>
          <option value="gluten-free" onClick={()=>setHealthlable('gluten-free')} >gluten-free</option>
          <option value="wheat-free" onClick={()=>setHealthlable('wheat-free')} >wheat-free</option>
        </select>
      </form>
      <div className="app_recipe">
        {recipe.map((recipe)=>{
          return <Reciptytil recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
