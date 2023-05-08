import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';


const Main = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;