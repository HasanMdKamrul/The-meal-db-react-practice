import React from 'react';

const MealView = ({meal,meal:{strMeal,quantity}}) => {
    console.log(meal)
    return (
        <div>
            <ul>
                <li>{strMeal}: {quantity}</li>
            </ul>
        </div>
    );
};

export default MealView;