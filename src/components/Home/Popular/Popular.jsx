// import React, { useEffect, useState } from 'react';
// import './Popular.css'
// import Meals from '../Meals/meals';

// const Popular = () => {
//     const [meals, setMeals] = useState([])

//     useEffect(()=> {
//         fetch('http://localhost:5000/meals')
//         .then(res => res.json())
//         .then(data => setMeals(data))
//         .catch(error => console.error(error))
//     },[])
//     return (
//         <div>
//         <div className='text-center py-56 px-5'>
//         <h2 className='text-5xl font-bold'>Popular main cource</h2>
//         <h5 className='text-lg leading-6 text-orange-400 py-5'>CHEF SELECTION</h5>
//         <div className="flex-container">
//             <div className="line"></div>
//         </div>
//         <p className='leading-10 font-medium text-lg text-gray-500'>When, while the lovely valley teems with vapour around me, and the <br/>meridian sun strikes the upper.</p>
//         <div className='lg:grid grid-cols-4 gap-8 px-4 mx-auto lg:mt-20'>
//           {
//             meals.map(meal=> <Meals
//             key={meal.id}
//             meal = {meal}
//             ></Meals>
//                 )
//           }
//         </div>
//         </div>
       
//     </div>
//     );
// };

// export default Popular;