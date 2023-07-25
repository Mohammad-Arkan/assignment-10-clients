import React from 'react';
import './meals.css'
const Meals = ({meal}) => {
    console.log(meal)
    const {meal_img, meal_name, description, price} = meal
    return (
        <div className='meal-container'>
            <img src={meal_img} alt="" />
            <p>{meal_name}</p>
        </div>
    );
};

export default Meals;