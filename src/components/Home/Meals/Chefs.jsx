// import React, { useEffect, useState } from 'react';
// import Chef from './chef';

// const Chefs = () => {
//     const [chefs, setChefs] = useState([])
    
//     useEffect(()=> {
//         fetch('http://localhost:5000/chefs')
//         .then(res => res.json())
//         .then(data => setChefs(data))
//         .catch(error => console.error(error))
//     },[])
//     return (
//         <div className='py-56 px-12'>
//             <div className='text-center '>
//             <h2 className='text-5xl font-bold uppercase'>Meet Our Expert Chefs</h2>
//                 <h5 className='text-lg leading-6 text-orange-400 py-5'>CHEF SELECTION</h5>
//                 <p className='leading-10 font-medium text-lg text-gray-500'>Welcome to Culinary Canvas, a culinary wonderland where passion, artistry, and<br/> flavors converge to create extraordinary dining experiences. </p>
//             </div>
//             <div className='lg:grid grid-cols-4 gap-8 px-4 mx-auto lg:mt-20'>
//                 {
//                     chefs.map(chef =><Chef 
//                     key={chef.id}
//                     chef={chef}
//                     ></Chef> )
//                 }
//             </div>
//         </div>
        
//     );
// };

// export default Chefs;