import React from 'react';
import SubsBanner from '../SubsBanner/SubsBanner';
import Banner from './Banner';
import Banner2 from './Banner2';
import CardSlide from './CardSlide';
import CountDown from './CountDown';
import DisplayProduct from './DisplayProduct';

const Home = () => {
    return (
        <div className='lg:w-[1440px] mx-auto '>
            <Banner/>
            <Banner2/>
            <CardSlide/>
            <CountDown/>
            <DisplayProduct/>
            <SubsBanner/>
        </div>
    );
};

export default Home;