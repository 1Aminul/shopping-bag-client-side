import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlineMenuAlt1 } from 'react-icons/hi'
import CategoryItemCard from './CategoryItemCard';

const CategoryProduct = () => {
    const products = useLoaderData()
    const { categoryName, categoryItem, image2, _id } = products
    console.log(products)
    return (
        <div >
            <div className='bg-gray-100'>
                <h1 className='p-4 ml-10 text-xl font-bold text-gray-500'>Home | <span className='text-accent'>{categoryName}</span></h1>
            </div>
            <div className='grid lg:grid-cols-12 gap-4 lg:mt-36 px-4 mt-3 lg:w-[1440px] mx-auto'>
                <div className='border-2 border-accent lg:col-span-3 h-3/5'>
                    filter
                </div>
                <div className='lg:col-span-9 p-3'>
                    <h1 className='text-md font-bold'>{categoryName} <span> ({categoryItem.length})</span></h1>
                    <img className='w-full h-60 mt-5' src={image2} alt='' />
                    <spna className='flex mt-12 text-2xl cursor-pointer'><HiOutlineViewGrid className='text-orange-400 hover:text-accent' /><HiOutlineMenuAlt1 className='ml-4 hover:text-accent' /></spna>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            categoryItem.map(item=> <CategoryItemCard
                                key={item.productID}
                                item={item}
                                productID = {_id}
                            
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;