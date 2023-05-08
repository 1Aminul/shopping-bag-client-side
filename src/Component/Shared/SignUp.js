import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';

const SignUp = () => {
    const { createUser, profileUpdate } = useContext(AuthContext)
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm();

    const handlerSignUp = (data) => {
        console.log(data)

        const formData = new FormData();
        formData.append('image', data.file[0])
        const imghostkey = process.env.REACT_APP_image_apiKey

        fetch(`https://api.imgbb.com/1/upload?key=${imghostkey}`, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(datas => {
                console.log(datas.data.url)

                createUser(data.email, data.password)
                    .then(res => {
                        const user = res.user
                        console.log(user)
                        profileUpdate(data.name, datas.data.url)
                            .then(() => {
                                console.log("profile is updated")
                            }).catch(error => setError(error.message))
                    }).catch(e => setError(e.message))
            })



    }


    return (
        <div className='flex justify-center items-center my-32'>
            <div className='w-96 shadow-xl rounded-lg p-4'>
                <h2 className="text-2xl font-bold text-accent text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(handlerSignUp)}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name")} type='text' className='input input-bordered w-full' />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type='email' className='input input-bordered w-full' />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' {...register("password")} className='input input-bordered w-full' />
                    <label className="label">
                        <span className="label-text">ImgURL</span>
                    </label>
                    <input type='file' {...register("file")} className='file-input file-input-bordered file-input-accent w-full ' />
                    <input type="submit" value='Sign Up' className='w-full bg-accent rounded py-3 mt-6 text-white' />
                </form>
                <label className="label">
                    <span className="label-text text-error">{error}</span>
                </label>
                <p className='my-6 text-center'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link> </p>

            </div>
        </div>
    );
};

export default SignUp;