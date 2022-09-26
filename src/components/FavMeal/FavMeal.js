import React from 'react';
import MealView from '../MealView/MealView';

const FavMeal = ({favMeal}) => {
    
    
   
    return (
        <div>
            <h1>Fav Meals</h1>
            {
                favMeal.map(meal => <MealView meal={meal} key={meal.idMeal}></MealView>)
            }
        </div>
    );
};

export default FavMeal;