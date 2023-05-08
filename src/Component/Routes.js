import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import Main from "./Layout/Main";
import Wishlist from "./Pages/Wishlist/Wishlist";
import CategoryProduct from "./Pages/CategoryItem/CategoryProduct";
import CartItem from "./Pages/CartItem/CartItem";
import Login from "./Shared/Login";
import SignUp from "./Shared/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddToCart from "./Pages/AddToCart/AddToCart";
import CartList from "./Pages/CartLIst/CartList";
import Payment from "./Pages/Payment/Payment";
import PaymentSuccess from "./Pages/Payment/PaymentSuccess";


export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path:'/category/:id',
            element:<CategoryProduct/>,
            loader: ({params})=> fetch(`https://food-fanda-server.vercel.app/product/${params.id}`)
            
        }, 
        {
            path:'/cart/:_id/:id',
            element:<PrivateRoute><CartItem/></PrivateRoute>,
            loader: ({params})=> fetch(`https://food-fanda-server.vercel.app/cart/${params._id}/${params.id}`)
           
            
        }, 
        {
            path: '/about',
            element: <About/>
        }, 
        {
            path: '/blog',
            element: <Blog/>
        }, 
        {
            path: '/contact',
            element: <Contact/>
        }, 
        {
            path: '/faq',
            element: <Faq/>
        }, 
        {
            path: '/login',
            element: <Login/>
        }, 
        {
            path: '/signup',
            element: <SignUp/>
        }, 
        {
            path: '/wishlist',
            element: <Wishlist/>
        }, 
        {
            path: '/cart',
            element: <CartList/>
        }, 
        {
            path: '/checkout',
            element: <Payment/>
        }, 
        {
            path: '/payment/success',
            element: <PaymentSuccess/>
        }, 
    ]}
])