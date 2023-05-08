import React from 'react';
import '../CategoryItem/CategoryItemCard.css'
import { HiShoppingBag, HiHeart } from 'react-icons/hi'
import { Link } from 'react-router-dom';
const CategoryItemCard = ({ item, productID }) => {
    console.log(item)
    console.log(productID)
    const { name, imgURL, price, id } = item;
    return (
        <div className='border-2 border-gray-200 rounded-md px-3 mt-12'>
            <div className='overflow-hidden py-3 relative img-card transition-all'>
                    <Link to={`/cart/${productID}/${id}`}><img className='hover:scale-110 transition-all w-full h-48' src={imgURL} alt='' /></Link>
                    {/* <div className='cart absolute top-48 left-1/3 cursor-pointer'>
                        <div className="tooltip" data-tip="Wishlist">
                            <button><HiHeart className='text-3xl text-pink-700 border-2 rounded shadow-lg mr-4 inline hover:text-accent'/></button>
                        </div>
                        <div className="tooltip" data-tip="Add To Cart">
                            <button><HiShoppingBag className='text-3xl text-pink-700 border-2 rounded shadow-lg inline hover:text-accent'/></button>
                        </div>   
                    </div> */}
                
            </div>
            <div className='mt-8 px-4'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='text-2xl font-bold text-accent'>৳ {price} tk</p>
            </div>
        </div>
    );
};

export default CategoryItemCard;