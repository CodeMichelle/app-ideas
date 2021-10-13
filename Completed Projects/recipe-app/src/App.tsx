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
      instructions: "Preheat oven to 350 degrees F. Mix together soup, dry soup packet, and water. Put liquid mixture in a baking dish and mix in the rice. Add chicken on top of the rice and bake for 1 1/2 hours. Remove from oven, flip over chicken, and return to oven for 1 more hour or until the rice is cooked. Let sit about 10 minutes."
    },
    {
      name: "Oven Roasted Broccoli",
      ingredients: "Lemon pepper seasoning, Olive oil, Broccoli, Salt and Pepper",
      instructions: "Preheat oven to 400 degrees F. Cut broccoli into bite size pieces and toss with olive oil. Add broccoli to a greased baking sheet and add salt and pepper to taste. Bake broccoli for 15 minutes, remove from oven and toss, then bake in the oven for another 15 minutes."
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
