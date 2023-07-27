import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    },[])

    return (
        <div className='py-56 px-12'>
                   <div className='text-center '>
            <h2 className='text-5xl font-bold uppercase'>Meet Our Expert Chefs</h2>
                <h5 className='text-lg leading-6 text-orange-400 py-5'>CHEF SELECTION</h5>
                <p className='leading-10 font-medium text-lg text-gray-500'>Welcome to Culinary Canvas, a culinary wonderland where passion, artistry, and<br/> flavors converge to create extraordinary dining experiences. </p>
            </div>
            <div className='lg:grid grid-cols-4 gap-8 px-4 mx-auto lg:mt-20'>
                {
                  categories.map(category => <div
                  key={category.id}
                  >
                    <Link ot={`/category/${category.id}`}>
                        <img src={category.chef_img} alt="" />
                        <h2>{category.chef_name}</h2>
                    </Link>
                  </div>)
                }
            </div>
        </div>
        
    );
};

export default Categories;