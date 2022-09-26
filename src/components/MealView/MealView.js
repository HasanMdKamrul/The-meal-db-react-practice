import React from 'react';

const MealView = ({meal:{strMeal,}}) => {
    return (
        <div>
            <ul>
                <li>{strMeal}</li>
            </ul>
        </div>
    );
};

export default MealView;