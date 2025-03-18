// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient"


const IngredientsList = (props) => {
    return (

        <ul>
            {props.ingredients.map((ingredient, index) => (
                <Ingredient
                key={index}
                ingredient={ingredient}
                btnClick={props.onAddToBurger}
                btnText='Add'
                />
            ))}
        </ul>
    )
}

export default IngredientsList