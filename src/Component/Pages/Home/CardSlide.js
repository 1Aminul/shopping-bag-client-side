import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Grid, Navigation, Pagination } from "swiper";

import "./CardSlide.css";
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

// import required modules



const CardSlide = () => {
    const products = useContext(AuthContext)
    console.log(products.products)

    return (
        <div className='my-20 w-full'>
            <h1 className='text-4xl font-bold text-center mb-3'>Shop by Category</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    products.products.map(prod => <SwiperSlide>

                        <div className='h-44 border-2 mb-5'>
                            
                                <Link to={`/category/${prod._id}`}><img className='rounded hover:animate-pulse' src={prod.image} alt='' /></Link>
                            
                            <div className=''>
                                <h1 className='text-md font-medium'>{prod.categoryName}</h1>
                            </div>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </div >
    );
};

export default CardSlide;