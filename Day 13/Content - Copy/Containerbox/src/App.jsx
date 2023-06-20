


import React from 'react';
import Container from './components/Container';
import './App.css';

const App = () => {
  return (
    <div className='Box'>
      <Container
        title='Italian pizza with tomatoes topping and leaves'
        
        imageSrc='https://media.istockphoto.com/id/1295773428/photo/pizza-with-cheese-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=170667a&w=0&k=20&c=wuPTLqWXS1G3vvND_jW2brgdQy6TMd68rDsAzIGbM94='
        buttonText='BEST FOR ALL'
        symbol='+'
        price='$25.14'
      />

      <Container
        title='Napiletana spicy pizza with mushroom and leaves'
        
        imageSrc='https://media.istockphoto.com/id/466149291/photo/italian-pizza-with-cherry-tomatoes.jpg?s=612x612&w=0&k=20&c=lVsLx2tntN48LmjLePZIZw1m68nD1bClP_0yi-ANUMQ='
        buttonText='TOP CHOICE'
        symbol='+'
        price='$55.00'
      />

      <Container
        title='Calofonia pizza with leaves and olives'
      
        imageSrc='https://media.istockphoto.com/id/1231133159/photo/delicious-hot-hawaiian-pizza-with-chicken-fillet-ham-pineapple-oregano-and-cheese-mozzarella.jpg?s=612x612&w=is&k=20&c=Z43L69loExhscYNX_niY795FEdGlvPTk-8PdQOxTzF4='
        buttonText='FOR KIDS'
        symbol='+'
        price='$40.00'
      />

      <Container
        title='Italian pizza with tomato topping and leaves'
        
        imageSrc='https://media.istockphoto.com/id/975092926/photo/ham-and-sausage-pizza-on-white-background-copy-space-recipe-and-menu-top-view.jpg?s=612x612&w=is&k=20&c=TRlK0rJY6MY4vhtMSccXNPx5nE2Tna20T4Dq2zD8e0g='
        buttonText='BEST IN VEGAN'
        symbol='+'
        price='$25.14'
      />
    </div>
  );
};

export default App;
