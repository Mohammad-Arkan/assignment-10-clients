import React from 'react';
import './meals.css'
const Meals = ({meal}) => {
    // console.log(meal)
    const {meal_img, meal_name, description, price, } = meal
    return (
        <div>
            <img src={meal_img} alt="" />
           <div className='flex mt-6 mb-3 items-center justify-between'>
            <h3 className='text-2xl font-bold '>{meal_name}</h3>
            <p className='text-orange-600 text-xl font-bold'>{price} $</p>
           </div>
           <p className='text-left'>{description}</p>
        </div>
    );
};

export default Meals;