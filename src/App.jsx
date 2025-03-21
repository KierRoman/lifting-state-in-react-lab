// src/App.jsx
import { useState } from 'react'
import './App.css';
import IngredientsList from './components/IngredientsList/IngredientsList';
import BurgerStack from './components/BurgerStack/BurgerStack';

const App = () => {



  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Middle Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Pickles', color: 'green' },
    { name: 'MacSauce', color: 'khaki' },
    { name: 'Mayonaise', color: 'white' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Fried Egg', color: 'ivory' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'American Cheese', color: 'yellow' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    setStack((burger) => [...burger, ingredient])
  }
  const removeFromBurger = (ingredient) => {
    setStack((burger) => burger.filter((item) => item !== ingredient))
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientsList ingredients={availableIngredients} onAddToBurger={addToBurger} />
        <BurgerStack stack={stack} onRemoveFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
