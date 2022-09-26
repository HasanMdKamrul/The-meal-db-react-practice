import React, { useEffect, useState } from 'react';
import FavMeal from '../FavMeal/FavMeal';
import MealCard from '../MealCard/MealCard';
import { getDataFromLs, setDataToLs } from '../utilities/manageDb';

const Meal = () => {
    // ** getting the meal data

    const [meals,setMeals] = useState([]);
    const [favMeal,setFavMeal] = useState([]);

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


    // ** handleAddToFavorite

    const handleAddToFavorite = mealSelected => {

        const existedFavMeal = favMeal.find(meal => meal.idMeal === mealSelected.idMeal);

        let newFav = [];

        if (!existedFavMeal) {
            mealSelected['quantity'] = 1;
            newFav = [...favMeal, mealSelected];
            setDataToLs(mealSelected.idMeal);
          
        } else{
            const restFav = favMeal.filter(meal => meal.idMeal !== mealSelected.idMeal);
            existedFavMeal["quantity"] = existedFavMeal["quantity"] + 1;
            newFav = [...restFav, existedFavMeal];
            setDataToLs(mealSelected.idMeal);
        };
        setFavMeal(newFav);
    };

    // ** get data from ls 


    useEffect(()=>{
        const storedItems = getDataFromLs();

        const newMeals = [];
        
        for (const key in storedItems) {
            
            const addedProductsTols = meals.find(meal => meal.idMeal === key);
            
            if (addedProductsTols) {
                addedProductsTols["quantity"] = storedItems[key];
                // setFavMeal(addedProductsTols);
                newMeals.push(addedProductsTols);
            } 
        };

        setFavMeal(newMeals);

    },[meals])


    

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