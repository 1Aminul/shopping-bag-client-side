import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query';

const CartList = () => {
    const { user } = useContext(AuthContext)
    const {data: cart = [], refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const deleteCart = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    toast.error('This product is deleted')
                    refetch()
                }
            })
    }

    const handlerAllDelete = (email)=>{
        fetch(`http://localhost:5000/cart?email=${email}`, {
            method: "DELETE"
        }).then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){
                toast.error('This product is deleted')
                refetch()
            }
        })
    }
    return (
        <div className='px-10'>
            <div className="overflow-x-auto w-full lg:my-44">
                <table className="table w-full ">
                    <thead>
                        <tr>

                            <th>My Cart</th>
                            <th>Quantity</th>
                            <th></th>
                            <th>{cart.length} Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(wish =>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className=" w-36 h-36">
                                                    <img src={wish.imgURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{wish.name}</div>
                                                <div className="text-sm opacity-50">{wish.origin}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                      <span className='text-xl'>{wish.Quantity}</span>
                                      
                                    </td>
                                    <td></td>
                                    <th>
                                        <span className="text-xl">৳ {wish.price * wish.Quantity}</span> <br />
                                        <button onClick={() => deleteCart(wish._id)} className="btn btn-accent text-white"><FaTrash /></button>
                                    </th>
                                </tr>

                            )
                        }
                    </tbody>


                </table>
            </div>
            <div className='flex justify-between lg:pr-32 items-center py-5 border-y-2'>
                <Link to='/' className='text-accent underline'>Continue Shopping</Link>
                <button onClick={() => handlerAllDelete(user?.email)} className='text-accent underline'>Clear Cart</button>
            </div>
        </div>
    );
};

export default CartList;