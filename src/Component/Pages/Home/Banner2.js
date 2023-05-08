import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../../../images/banner1.jpg'
import bg2 from '../../../images/banner2.jpg'
import bg3 from '../../../images/banner3.jpg'

const Banner2 = () => {
    const banner = [
       
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 sm:p-3 lg:grid-cols-3 gap-4 mt-24'>
            <div className='relative overflow-hidden'>
                    <img className='w-full h-full relative hover:scale-110 transition'  src={bg1} alt='' />
                <div className='absolute top-1/4 left-4 w-44 h-full'>
                    <p className='text-lg'>Organic Juice</p>
                    <p className='text-xl font-bold'>Fresh Vegetable on our product</p>
                    <Link className='text-accent text-md font-bold mt-5 block hover:animate-bounce'>SHOP NOW ❯</Link>
                </div>

            </div>
            <div className='relative overflow-hidden'>
                    <img className='w-full h-full relative hover:scale-110 transition'  src={bg2} alt='' />
                <div className='absolute top-1/4 left-4  w-48 h-full'>
                    <p className='text-lg'>Fresh Food</p>
                    <p className='text-xl font-bold'>Vegetable eggplant 100% fresh food</p>
                    <Link className='text-accent text-md font-bold mt-5 block hover:animate-bounce'>SHOP NOW ❯</Link>
                </div>

            </div>
            <div className='relative overflow-hidden'>
                    <img className='w-full h-full relative hover:scale-110 transition'  src={bg3} alt='' />
                <div className='absolute top-1/4 left-4 w-44 h-full '>
                    <p className='text-lg'>Organic dry fruits</p>
                    <p className='text-xl font-bold'>Nuts dry fruits festive still life</p>
                    <Link className='text-accent text-md font-bold mt-5 block hover:animate-bounce'>SHOP NOW ❯</Link>
                </div>

            </div>
            
        </div>
    );
};

export default Banner2;