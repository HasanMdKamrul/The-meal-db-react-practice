import React from 'react';

const MealView = ({meal,meal:{strMeal,}}) => {
    console.log(meal)
    return (
        <div>
            <ul>
                <li>{strMeal}</li>
            </ul>
        </div>
    );
};

export default MealView;