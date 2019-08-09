import './App.css'
import Recipe from './Recipe';
import React, {useState, useEffect} from 'react';

const App = () => {

  const APP_ID = 'd4a90e00';
  const APP_KEY = '93932471d6dbbfe2c14f39903ccd7b6e';
  const [recipes , setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async ()=> {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  }

  return(
    <div className="App">
      <form className="search_form" onSubmit={getSearch}>
        <input className="search_bar" type="text" value={search} onChange={updateSearch} />
        <button className="search_button" type="submit" >
          Search
        </button>
      </form>
      <hr className="hr"/>

      <div className="h2">
        <marquee><h2>RECIPES</h2></marquee>
      </div>

      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        image={recipe.recipe.image}
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>

    </div>
  )
}

export default App;
