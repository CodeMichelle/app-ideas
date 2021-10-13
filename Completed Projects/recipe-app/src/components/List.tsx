import React from 'react';
import { IState as Props } from "../App";
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

interface IProps {
    recipes: Props["recipes"]
}

const List: React.FC<IProps> = ({ recipes }) => {
    
    const renderList = (): JSX.Element[] => {
        var str = '<ul>'
        recipes.forEach(function(recipe) {
            recipe.ingredients.forEach(function(ingredient) {
                str += '<li>' + ingredient + '</li>';
            });
        });

        str += '</ul>';

        return recipes.map(recipe => {
            return(
                <li className="List">
                    <div className="List-header">
                        <h2>{recipe.name}</h2>
                    </div>
                    <div className="List-ingredients">
                        <p>{str}</p>
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