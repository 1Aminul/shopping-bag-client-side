import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

import { toast } from 'react-hot-toast';

const Payment = () => {
    const { register, handleSubmit, reset } = useForm();
    const { cart } = useContext(AuthContext)

    const cartPrice = cart.map(item => item.price * item.Quantity)
    const subTotal = cartPrice.reduce((a, b) => a + b, 0)

    const handlePayment = (data)=> {
        console.log(data)

        const order = {
            email: data.email,
            address: data.address,
            country: data.country,
            currency: data.currency,
            name: `${data.fistName} ${data.lastName}`,
            postCode: data.postCode,
            amount: subTotal
        }

        fetch(`http://localhost:5000/orders`, {
            method: "POST", 
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(order)
        }).then(res=> res.json())
        .then(data=> {
            console.log(data.url)
           window.location.replace(data.url)
        }).catch(err=> console.error(err))

    }

    return (
        <div className='flex justify-center item-center my-32 gap-6'>
            <div className='w-1/2 shadow-xl rounded-lg p-4 border-r-4'>
                <h2 className="text-2xl font-bold text-accent">Shopping Bag</h2>
                <form onSubmit={handleSubmit(handlePayment)}>

                    <label className="label">
                        <span className="label-text text-xl font-bold">Contact</span>
                    </label>
                    <input {...register("email")} type='text' className='input input-bordered w-full' placeholder='Enter an email or phone number' required />

                    <div className='my-3'>
                        <h2 className='text-xl font-bold'>Shipping Address</h2>
                        <input type='text' {...register("country")} className='input input-bordered w-full mt-2' placeholder='country/region' required/>
                    </div>
                    <div className='flex justify-center items-center gap-5 my-3'>
                        <input type='text' {...register("fistName")} className='input input-bordered w-full' placeholder='First Name' />
                        <input type='text' {...register("lastName")} className='input input-bordered w-full' placeholder='Last Name' />
                    </div>
                    <input type='text' {...register("address")} className='input input-bordered w-full my-3' placeholder='Address' />
                    <div className='flex justify-center items-center gap-5'>
                        <input type='text' {...register("postCode")} className='input input-bordered w-full' placeholder='Postal Code' />
                        <select {...register("currency")} className='input input-bordered w-full' placeholder='Zip Code' required>
                            <option value='BDT'>BDT</option>
                            <option value='USD'>USD</option>
                        </select>
                    </div>

                    <div className='flex justify-between items-center'>
                        <Link to='/cart' className='text-accent text-lg'>Return Cart</Link>
                        <input type="submit" value='Payment' className='w-96 bg-accent rounded py-3 mt-6 text-white cursor-pointer' />
                    </div>
                </form>


            </div>
            <div>
                {
                    cart.map(item =>

                        <div className='flex justify-between items-center'>
                            <div className='relative my-1'>
                                <img src={item.imgURL} className='w-20 h-20 border-accent border-2 mt-3 rounded-lg' alt='' />
                                <div className='absolute top-0 right-0 w-6 h-6 rounded-full bg-accent flex justify-center items-center text-white'>
                                    {item.Quantity}
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font bold'>{item.name}</h2>
                                <p className='text-md'>Material: {item.origin}</p>
                            </div>
                            <div>

                                <p className='text-sm text-accent font-bold text-right'>Total: ৳ {item.price * item.Quantity}  </p>

                                {/* <button onClick={()=> deleteCart(item._id)} className=' btn-accent w-6 h-6 rounded-lg text-white'><FaTrash className='mx-auto' /></button> */}
                            </div>

                        </div>
                    )
                }
                <div className='flex justify-between my-10 border-t-2 pt-3 border-gray-600'>
                    <p className='text-xl'>Total </p>
                    <p className='text-xl'>: ৳ {subTotal}</p>

                </div>
            </div>
        </div>
    );
};

export default Payment;