// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient";


const BurgerStack = (props) => {

    if (props.stack.length === 0) {
        return <p>No Ingredients</p>
    }

    return (


        <ul>
            {props.stack.map((ingredient, index) => (
                <Ingredient
                    key={index}
                    ingredient={ingredient}
                    btnClick={props.onRemoveFromBurger}
                    btnText='Remove'
                />
            ))}
        </ul>
    )
};

export default BurgerStack;
