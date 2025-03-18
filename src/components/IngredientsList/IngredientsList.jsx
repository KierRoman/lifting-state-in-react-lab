// src/components/IngredientList/IngredientList.jsx

const IngredientsList = (props) => {
    return (

        <ul>
            {props.ingredients.map((ingredient, index) => {
                return <li key={index} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => props.onAddToStack(ingredient)}>Add</button>
                </li>
            })}
        </ul>
    )
}

export default IngredientsList