
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io"
import { FaTruck, FaDollarSign } from 'react-icons/fa'
import Zoom from 'react-img-hover-zoom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import AddToCart from '../AddToCart/AddToCart';
import { useQuery } from '@tanstack/react-query';


const CartItem = () => {
    const { user,  wishlist, refetch, cart} = useContext(AuthContext)
    const CartItem = useLoaderData()
    const [count, setCount] = useState(1)
    const { name, imgURL, origin, price, id } = CartItem;

    const favourite = wishlist.find(item => item?.id === id)
    const cartID = cart?.find(item => item?.id === id)

    const wishListItem = {
        name, imgURL, origin, price, id,
        Quantity: count,
        user: user?.email,
        wishlist: "favourite"
    }
    const cartItem = {
        name, imgURL, origin, price, id,
        Quantity: count,
        user: user?.email,
    }
    const addWishList = () => {
        fetch(`https://food-fanda-server.vercel.app/wishlist`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(wishListItem)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('This product add your WishList')
                    refetch()
                }
            })
    }

    const addToCart = () => {
        fetch(`https://food-fanda-server.vercel.app/cart`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartItem)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('This product add your cart')
                    refetch()
                }
            })
    }
    return (
        <div>

            <div>
                <div className='bg-gray-100'>
                    <h1 className='p-4 ml-10 text-xl font-bold text-gray-500'>Home | <span className='text-accent'>{name}</span></h1>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 mt-32 gap-5'>
                    <div className='overflow-hidden border-2 border-gray-200'>
                        <Zoom
                            img={imgURL}
                            zoomScale={2}
                            width={600}
                            height={400}
                            className="w-full h-full"
                        />
                    </div>
                    <div className='px-5'>
                        <h1 className='text-xl font-bold mt-3'>{name}</h1>
                        <hr className='block mt-2'></hr>
                        <p className='text-xl font-bold mt-3'>Availabaility: <span className='text-accent text-md'>In stock</span></p>
                        <p className='text-xl font-bold mt-5'>৳ {price} tk</p>
                        <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <p className='text-xl font-medium mt-3'>Material: {origin}</p>
                        <div className='mt-4'>
                            <span className='text-xl font-medium'> Quantity: </span>
                            <button onClick={() => setCount(count - 1)} className='border w-12 h-10 text-xl font-bold  border-gray-200'>-</button>
                            <input className='w-12 h-10 text-xl font-bold border text-center border-gray-200 outline-none' type="text" value={count} />
                            <button onClick={() => setCount(count + 1)} className='border w-12 h-10 text-xl font-bold border-gray-200'>+</button>
                        </div>
                        <div className='mt-7'>
                            <button disabled={favourite?.id === id} onClick={() => addWishList()} className='btn btn-accent hover:bg-slate-800 text-white text-center'><IoMdHeart className='' /></button>

                            <button disabled={cartID?.id === id} onClick={() => addToCart()} className='btn btn-accent hover:bg-slate-800 ml-5 text-white text-center'>ADD TO CART</button>
                            <button className='btn btn-accent hover:bg-slate-800 ml-5 text-white text-center'>Buy Now</button>
                        </div>

                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='px-14 py-5 bg-gray-300 text-center'>
                            <span className='rounded-lg p-3 bg-white'><FaTruck className='text-2xl inline text-accent' /></span>
                            <h1 className='font-medium mt-3'>DELIVERY INFO</h1>
                            <p>From then, delivery is generally within 2-10 days, depending on your location.</p>
                        </div>
                        <div className='px-14 py-5 bg-gray-300 text-center'>
                            <span className='rounded-lg p-3 bg-white'><FaDollarSign className='text-2xl inline text-accent' /></span>
                            <h1 className='font-medium mt-3'>DELIVERY INFO</h1>
                            <p>From then, delivery is generally within 2-10 days, depending on your location.</p>
                        </div>
                        <div className='px-14 py-5 bg-gray-300 text-center'>
                            <span className='rounded-lg p-3 bg-white'><FaTruck className='text-2xl inline text-accent' /></span>
                            <h1 className='font-medium mt-3'>DELIVERY INFO</h1>
                            <p>From then, delivery is generally within 2-10 days, depending on your location.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
               
            </div>
        </div>
    );
};

export default CartItem;