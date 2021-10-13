import React, { useState } from 'react';
import logo from './logo.svg';
import List from './components/List'
import AddToList from './components/AddToList'
import './App.css';

export interface IState {
  recipes: 
    {
      name: string
      ingredients: string
      instructions: string
    }[]
}

function App() {

  const [recipes, setRecipes] = useState<IState["recipes"]>([
    {
      name: "Koski Chicken",
      ingredients: "1 can cream of mushroom soup, 1 packet dry onion soup mix, 1 C water, 2 C rice, 1 lb. chicken legs",
      instructions: "Mix together soup, dry soup packet, and water. Put liquid mixture in a baking dish and mix in the rice. Add chicken on top of the rice and bake at 350 degrees farenheit for 1 1/2 hours. Remove from oven, flip over chicken, and return to oven for 1 more hour or so. Let sit about 10 minutes."
    },
    {
      name: "Lemon Pepper Broccoli",
      ingredients: "Lemon pepper seasoning, Olive oil, Broccoli",
      instructions: "Mix together all ingredients."
    }
  ])

  return (
    <div className="content">
      <div className="App-header">
      Recipe Keeper
      </div>
      <List recipes={recipes}/>
      <AddToList setRecipes={setRecipes} recipes={recipes}/>
    </div>
  );
}

export default App;
