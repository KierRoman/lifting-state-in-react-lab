const Ingredient = ({ ingredient, btnClick, btnText }) => {
    return (

        <li style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => btnClick(ingredient)}>{btnText}</button>
        </li>
    )
}


export default Ingredient