import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaTrash } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';



const AddToCart = () => {
    const { user } = useContext(AuthContext)
    const {data: cart = [], refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async ()=>{
            const res = await fetch(`https://food-fanda-server.vercel.app/cart?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const deleteCart = (id) => {
        fetch(`https://food-fanda-server.vercel.app/cart/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    toast.error('This product is deleted')
                    refetch()
                }
            })
    }

    const cartPrice = cart.map(item => item.price * item.Quantity)
    const subTotal = cartPrice.reduce((a, b) => a + b, 0)

    return (
        <div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal justify-end">
                <div className="modal-box mr-3 h-full">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">My Shopping cart</h3>

                    {
                        cart.map(item =>

                            <div className='flex justify-between items-center'>
                                <img src={item.imgURL} className='w-32 h-32 border-accent border-2 mt-3' alt='' />
                                <div>
                                    <h2 className='text-xl font bold'>{item.name}</h2>
                                    <p className='text-md'>৳ {item.price}</p>
                                    <p className='text-md'> Quantity: {item.Quantity}</p>
                                    <p className='text-md'>Material: {item.origin}</p>
                                </div>
                                <div>

                                    <p className='text-xl text-accent font-bold text-right'>Total: ৳ {item.price * item.Quantity}  </p>

                                    <button onClick={()=> deleteCart(item._id)} className=' btn-accent w-6 h-6 rounded-lg text-white'><FaTrash className='mx-auto' /></button>
                                </div>

                            </div>
                        )
                    }
                    <div className='flex justify-between my-10 border-t-2 pt-3 border-gray-600'>
                        <p className='text-xl'>Subtotal </p>
                        <p className='text-xl'>: ৳ {subTotal}</p>
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <a href='/cart' className='btn btn-outline btn-accent w-1/2 text-white rounded-none'>View Cart</a>
                        <a href='/checkout' className='btn btn-outline btn-accent w-1/2 text-white rounded-none'>Checkout</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddToCart;