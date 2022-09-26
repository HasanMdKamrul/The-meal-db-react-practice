import React, { useEffect, useState } from 'react';
import MealCard from '../MealCard/MealCard';

const Meal = () => {
    // ** getting the meal data

    const [meals,setMeals] = useState([]);

    useEffect(()=>{
        // ** loader function
        const loadMeals = async()=>{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
            response.ok ? console.log('successful') : console.log('failed');
            const data = await response.json();
            setMeals(data.meals);
        };
        loadMeals()
    },[]);

    

    return (
        <div className='grid grid-cols-12 container mx-auto'>
          <div className='col-start-1 col-end-9'>
            <div className='grid grid-cols-2 gap-5 my-5'>
                {
                    meals.map(meal => <MealCard key={meal.idMeal} meal={meal}></MealCard>)
                }
            </div>
          </div>
          <div className='col-start-10 col-end-12'>Added Meals</div>  
        </div>
    );
};

export default Meal;