import React from 'react';
import MealView from '../MealView/MealView';

const FavMeal = ({favMeal}) => {
    
    // console.log(favMeal)
   
    return (
        <div>
            <h1 className='font-semibold text-3xl mb-5'>Fav Meals</h1>
            {
                favMeal?.map(meal => <MealView meal={meal} key={meal.idMeal}></MealView>)
            }
        </div>
    );
};

export default FavMeal;