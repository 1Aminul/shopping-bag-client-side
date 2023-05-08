import React from 'react';
import { useContext } from 'react';
import { FaShoppingBag, } from 'react-icons/fa'
import { IoHeartOutline, IoBagOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { IoIosLogOut } from 'react-icons/io';
const Navigation = () => {
    const { user, LogOut, wishlist, cart } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(user)
    const logOut = () => {
        LogOut()
            .then(() => {
                navigate('/login')
            })

    }
    const nav = <>
        <Link className='mr-8 text-xl font-medium hover:text-gray-500' to='/'>HOME</Link>
        <Link className='mr-8 text-xl font-medium hover:text-gray-500' to='/about'>ABOUT US</Link>
        <Link className='mr-8 text-xl font-medium hover:text-gray-500' to='/blog'>BLOG</Link>
        <Link className='mr-8 text-xl font-medium hover:text-gray-500' to='/faq'>FAQ</Link>
        <Link className='mr-8 text-xl font-medium hover:text-gray-500' to='/contact'>CONTACT US</Link>
    </>
    return (
        <div className="navbar bg-base-100 lg:px-32 shadow-xl lg:py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <FaShoppingBag className='text-2xl text-red-600 animate-bounce' />
                <Link className="normal-case ml-4 text-2xl font-bold">Shopping<span className='text-red-700'>Bag</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="indicator mr-10">
                    <span className="indicator-item badge badge-accent text-white">{wishlist.length} </span>
                    <div className="grid place-items-center">
                        <Link to="/wishList"> <IoHeartOutline className='text-5xl relative  text-accent' /></Link>
                    </div>
                </div>
                <div className="indicator mr-10">
                    <span className="indicator-item badge badge-accent mt-1 text-white">{cart.length}</span>
                    <div className="grid place-items-center">
                        <label  htmlFor="my-modal" className=' '><IoBagOutline className='text-5xl text-accent cursor-pointer' /></label>
                    </div>
                </div>


                {
                    user?.displayName ?
                        <><img title={user.displayName} src={user.photoURL} alt='user' className='w-12 h-12 rounded-full ml-3 border-accent border-2' /><IoIosLogOut onClick={() => logOut()} title='LogOut' className='w-12 h-8 text-accent ml-2 cursor-pointer' /></>
                        : <><div className="dropdown">
                            <label tabIndex={0} className="text-accent font-bold ml-3">Account <span className="text-black">▼</span></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/signup">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>

                            </ul>
                        </div></>
                }
            </div>
        </div>
    );
};

export default Navigation;