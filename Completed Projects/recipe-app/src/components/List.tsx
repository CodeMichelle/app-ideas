import React from 'react';
import { IState as Props } from "../App";
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

interface IProps {
    recipes: Props["recipes"]
}

const List: React.FC<IProps> = ({ recipes }) => {

    function renderIngredientsList(recipe: any) {
        recipe.ingredients.map(ingredient => {
            return(<div>{ingredient}</div>);
        })
    }

    const renderHello = (): JSX.Element[] => {
        var str = ''
        recipes.map(recipe => {
            recipe.ingredients.forEach(function(ingredient) {
                str += '<li>' + ingredient + '</li>';
            }
        )})
        return (<div>'Whaddup beech'</div>);
    }
    
    const renderList = (): JSX.Element[] => {
        return recipes.map(recipe => {
            return(
                <li className="List">
                    <div className="List-header">
                        <h2>{recipe.name}</h2>
                    </div>
                    <div className="List-ingredients">
                        renderIngredientsList({recipe})
                    </div>
                    <div className="List-instructions">
                        <p>{recipe.instructions}</p>
                    </div>
                </li>
            )
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default List