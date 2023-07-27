import React from 'react';
import beef from '../../../assets/images/beef-1.jpg'
import pasta from '../../../assets/images/pasta.jpg'
import chicken from '../../../assets/images/chicken.jpg'
import backed from '../../../assets/images/backed.jpg'

const PopularItems = () => {
    return (
        <div >
            <div className=' py-56 px-12'>
                <div className='text-center'>
                <h2 className='text-5xl font-bold uppercase'>Popular main cource</h2>
                <h5 className='text-lg leading-6 text-orange-400 py-5'>CHEF SELECTION</h5>
                <div className="flex-container">
                    <div className="line"></div>
                </div>
                <p className='leading-10 font-medium text-lg text-gray-500'>When, while the lovely valley teems with vapour around me, and the <br/>meridian sun strikes the upper.</p>
                </div>
                <div className='lg:grid grid-cols-4 gap-8 px-4 mx-auto lg:mt-20'>
                    <div>
                    <img src={beef} alt="" />
                    <div className='flex mt-6 mb-3 items-center justify-between'>
                        <h3 className='text-2xl font-bold '>Delicious Pasta</h3>
                        <p className='text-orange-600 text-xl font-bold'>12.99 $</p>
                    </div>
                    <p className='text-left'>A mouthwatering plate of pasta with a rich tomato sauce and fresh basil.</p>
                    </div>
                    <div>
                    <img src={pasta} alt="" />
                    <div className='flex mt-6 mb-3 items-center justify-between'>
                        <h3 className='text-2xl font-bold '>Grilled Salmon</h3>
                        <p className='text-orange-600 text-xl font-bold'> 18.50 $</p>
                    </div>
                    <p className='text-left'>A succulent grilled salmon fillet with lemon butter sauce.</p>
                    </div>
                    <div>
                    <img src={chicken} alt="" />
                    <div className='flex mt-6 mb-3 items-center justify-between'>
                        <h3 className='text-2xl font-bold '>Vegetable Stir-Fry</h3>
                        <p className='text-orange-600 text-xl font-bold'> 10.99 $</p>
                    </div>
                    <p className='text-left'>A vibrant mix of fresh vegetables stir-fried to perfection.</p>
                    </div>
                    <div>
                    <img src={backed} alt="" />
                    <div className='flex mt-6 mb-3 items-center justify-between'>
                        <h3 className='text-2xl font-bold '>Tender Beef Steak</h3>
                        <p className='text-orange-600 text-xl font-bold'>22.99 $</p>
                    </div>
                    <p className='text-left'>A juicy and tender beef steak cooked to perfection.</p>
                    </div>
              
                </div>
            </div>
        </div>
    );
};

export default PopularItems;