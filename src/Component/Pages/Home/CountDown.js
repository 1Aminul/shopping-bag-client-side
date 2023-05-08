import React from 'react';
import CountdownTimer from "react-component-countdown-timer";
// import "react-component-countdown-timer/lib/styles.css";
const CountDown = () => {
    return (
       <div>
         <div className='w-full h-96 bg-no-repeat bg-cover mt-10 mb-12 flex justify-center items-center' style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0412/8151/9765/files/dealbanner2_5557d4cd-247d-47c7-bf97-6efd581ca6a3.jpg?v=1613781618")` }}>
            <div className='text-center'>
                <p>We offer a hot deal offer every festival</p>
                <h1 className='text-3xl font-bold mb-5'>Deal of the day!</h1>
                <CountdownTimer  count={6048450}  size={40} backgroundColor="#27bf65" color="white"/>
                
                <button className='btn btn-accent text-white mt-5'>Shop Collection</button>
            </div>
        </div>
       </div>
    );
};

export default CountDown;