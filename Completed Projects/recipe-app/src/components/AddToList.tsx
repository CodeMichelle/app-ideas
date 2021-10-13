import React, { useState } from 'react'
import { IState as Props } from "../App"

interface IProps {
    setRecipes: React.Dispatch<React.SetStateAction<Props["recipes"]>>
    recipes: Props["recipes"]
}

const AddToList: React.FC<IProps> = ({setRecipes, recipes}) => {
    const [input, setInput] = useState({
        name: "",
        ingredients: "",
        instructions: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.ingredients || !input.instructions) return

        setRecipes([
            ...recipes,
            {
                name: input.name,
                ingredients: input.ingredients,
                instructions: input.instructions
            }
        ]);

        setInput({
            name: "",
            ingredients: "",
            instructions: ""
        })
    }

    return (
        <div className="AddToList">
            <h2>Add Recipe to List</h2>
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="name"
                value={input.name}
                placeholder="Recipe Name"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="ingredients"
                value={input.ingredients}
                placeholder="Ingredients separated by commas"
            />
            <textarea
                onChange={handleChange}
                className="AddToList-input"
                name="instructions"
                value={input.instructions}
                placeholder="Instructions"
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList