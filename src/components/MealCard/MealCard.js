import React from 'react';

const MealCard = ({meal:{strArea,strInstructions,strMeal,strMealThumb}}) => {
    
    return (
        <div >
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} className="h-full" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <strong> <small>{strInstructions.length > 100 ? strInstructions.slice(0,100) + '...': strInstructions}</small> </strong>
                    <p> <small>{strArea}</small> </p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add to Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealCard;