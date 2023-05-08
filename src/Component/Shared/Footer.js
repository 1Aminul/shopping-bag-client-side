import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-12'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='ml-10'>
                    <div className='text-center flex items-center'>
                        <FaShoppingBag className='text-6xl text-accent' />
                        <Link className="normal-case text-2xl font-bold">Shopping<span className='text-accent'>Bag</span></Link>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetue adipiscing elit doli. Aenean commodo ligula eget dolor. ...</p>
                </div>
                <div className=' flex items-center justify-center gap-2'>
                    <FaMapMarkerAlt className='text-4xl text-accent ' />
                    <div>
                        <h1 className="text-accent ml-4 text-2xl font-bold">Address</h1>
                        <p>Banglabazar, Devarpar, Bayzid Bostami, <br></br> Chattogram, Bangladesh</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center gap-2'>
                    <FaPhoneAlt className='text-4xl text-accent ' />
                    <div>
                        <h1 className="text-accent ml-4 text-2xl font-bold">Get In touch</h1>
                        <p>+8801866-129558</p>
                    </div>
                </div>
               
            </div>
            <hr className='mt-5'></hr>
            <footer className="footer p-10 bg-gray-50">
                <div>
                    <span className=" text-accent text-xl font-bold">Top Categories</span>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Branding</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Design</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Marketing</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Advertisement</Link>
                </div>
                <div>
                    <span className=" text-accent text-xl font-bold">Services</span>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">About us</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Contact</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Blog</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">News</Link>
                </div>
                <div>
                    <span className=" text-accent text-xl font-bold">Privacy & Terms</span>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Terms of use</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Privacy policy</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">Cookie policy</Link>
                </div>
                <div>
                    <span className=" text-accent text-xl font-bold">My Account</span>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">My wishlist</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">My Cart</Link>
                    <Link className="link link-hover w-full  text-slate-800 border-b border-dashed border-black">My Payment</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;