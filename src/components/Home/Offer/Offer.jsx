import React from 'react';
import './Offer.css'
import offer1 from '../../../assets/images/offer-4.jpg'
import offer2 from '../../../assets/images/offer-2.png'
import offer3 from '../../../assets/images/offer-3.png'
const Offer = () => {
    return (
        <div className='px-16 container-offer text-white '>
             <div className='text-center '>              
                <h2 className='text-5xl font-bold pt-20 pb-5'>OUR BEST OFFERS</h2>
        <h5 className='text-lg leading-6  py-5 text-orange-500'>NOT JUST A PIZZA, BUT LIFESTYLE</h5>
        <div className="flex-container">
            <div className="line"></div>
         </div>
         <p className=' text-lg font-sans font-extralight leading-8 pb-16'>And yes, we’re pizza people. But we’re also human people, we lead with our hearts, we believe in giving back<br/>to the global community. Join us, welcome to our pizzerias!</p>
                </div>
                <div className='container- pb-14'>
                    <div className='flex'>
                        <div className='offer w-2/5'>
                            <img src={offer1} alt="" />
                        </div>
                        <div className='w-3/5 mt-5 mb-5 image-container px-20 py-16'>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='container- pb-14'>
                    <div className='flex'>
                        {/* <div className='offer w-2/5'>
                            <img src={offer2} alt="" />
                        </div> */}
                        <div className='w-3/5 mt-5 mb-5 image-container px-20 py-16'>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='offer w-2/5'>
                            <img src={offer2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='container- pb-14'>
                    <div className='flex'>
                        <div className='offer w-2/5'>
                            <img src={offer3} alt="" />
                        </div>
                        <div className='w-3/5 mt-5 mb-5 image-container px-20 py-16'>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            <div className='flex mb-8'>
                            <div >
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                                <div className='ps-16'>
                                <h3 className='font-semibold mb-2'>MARGHERITA................. <span className='text-orange-500'>$ 2.60</span></h3> 
                                <p className='text-sm font-sans font-thin leading-5'>Classic marinara sauce, authentic old- <br /> world pepperoni</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Offer;