import React, { useEffect, useState } from 'react';
import FavMeal from '../FavMeal/FavMeal';
import MealCard from '../MealCard/MealCard';

const Meal = () => {
    // ** getting the meal data

    const [meals,setMeals] = useState([]);
    const [favMeal,setFavMeal] = useState([])

    // ** handleAddToFavorite

    const handleAddToFavorite = mealSelected => {

        const existedMeal = favMeal.find(meal => meal.idMeal === mealSelected.idMeal);

        if (!existedMeal) {
            const newFavMeal = [...favMeal,mealSelected];
            setFavMeal(newFavMeal);
            localStorage.setItem('favmeal', JSON.stringify(favMeal));
        }

        
    };

    useEffect(()=>{
        const storedMeal = JSON.parse(localStorage.getItem('favmeal'));
        setFavMeal(storedMeal);
       
    },[meals])

    useEffect(()=>{
        // ** loader function
        const loadMeals = async()=>{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=t`);
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
                    meals.map(meal => <MealCard handleAddToFavorite={handleAddToFavorite} key={meal.idMeal} meal={meal}></MealCard>)
                }
            </div>
          </div>
          <div className='col-start-10 col-end-12 text-center'>
                <FavMeal favMeal={favMeal}></FavMeal>
           </div>  
        </div>
    );
};

export default Meal;