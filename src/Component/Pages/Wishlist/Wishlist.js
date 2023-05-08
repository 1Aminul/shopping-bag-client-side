import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Wishlist = () => {
    const { user} = useContext(AuthContext)

    const {data: wishlist = [], refetch} = useQuery({
        queryKey: ["wishlist", user?.email],
        queryFn: async ()=>{
            const res = await fetch(`https://food-fanda-server.vercel.app/wishlist?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const deleteWishlist = (id)=>{
        fetch(`https://food-fanda-server.vercel.app/wishlist/${id}`, {
            method: "DELETE"
        }).then(res=> res.json())
        .then(data=> {
            if(data.deletedCount === 1){
                toast.error('This product is deleted')
                refetch()
            }
        })
    }

    const handlerAllDelete = (email)=>{
        fetch(`https://food-fanda-server.vercel.app/wishlist?email=${email}`, {
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

                            <th>My WishList</th>
                            <th></th>
                            <th></th>
                            <th>{wishlist.length} Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist.map(wish =>
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
                                        <Link className='text-accent underline'>Add To Cart</Link><br></br>
                                        <Link className='text-accent underline'>Buy Now</Link>

                                    </td>
                                    <td></td>
                                    <th>
                                        <span className="text-xl">৳ {wish.price}</span> <br/>
                                        <button onClick={()=>deleteWishlist(wish._id)} className="btn btn-accent text-white"><FaTrash/></button>
                                    </th>
                                </tr>

                            )
                        }
                    </tbody>


                </table>
            </div>
            <div className='flex justify-between lg:pr-32 items-center py-5 border-y-2'>
                <Link to='/' className='text-accent underline'>Continue Shopping</Link>
                <button onClick={()=> handlerAllDelete(user?.email)} className='text-accent underline'>Clear WishList</button>
            </div>
        </div>
    );
};

export default Wishlist;