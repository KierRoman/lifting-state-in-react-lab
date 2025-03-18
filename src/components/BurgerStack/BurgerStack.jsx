// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (

        <ul>
            {props.stack.map((ingredient, index) => {
                return <li key={index} style={{backgroundColor: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={() => props.onRemoveFromStack(ingredient)}>Remove</button>
                </li>
            })}
        </ul>
    )
};

export default BurgerStack;
