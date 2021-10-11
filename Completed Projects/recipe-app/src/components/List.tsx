import React from 'react'
import { IState as Props } from "../App"

interface IProps {
    recipes: Props["recipes"]
}

const List: React.FC<IProps> = ({ recipes }) => {
    
    const renderList = (): JSX.Element[] => {
        return recipes.map(recipe => {
            return(
                <li className="List">
                    <div className="List-header">
                        <h2>{recipe.name}</h2>
                    </div>
                    <div className="List-ingredients">
                        <p>{recipe.ingredients}</p>
                    </div>
                    <div className="List-instructions">
                        <p>{recipe.instructions}</p>
                    </div>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List