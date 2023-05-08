
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import bgImage1 from '../../../images/slide (1).jpg'
import bgImage2 from '../../../images/slide (2).jpg'
import bgImage3 from '../../../images/slide (3).jpg'
import { AuthContext } from '../../Context/AuthProvider';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../Home/CardSlide.css'


const Banner = () => {
    const { products } = useContext(AuthContext)

    const carousel = [
        {
            id: 1,
            prev: 4,
            next: 2,
            bg: bgImage1,
            title: "Vegetable Farm  Food",
            class: "lg:left-24 top-1/4 w-80 "
        },
        {
            id: 2,
            prev: 1,
            next: 3,
            bg: bgImage2,
            title: `Healthier Testy Way`,
            class: "lg:right-32 top-1/4 w-80 "
        },
        {
            id: 3,
            prev: 2,
            next: 4,
            bg: bgImage3,
            title: "Healthy Food",
            class: "lg:left-24 top-1/4 w-80 "
        },
    ]
    return (
        <div className='lg:flex gap-3 border'>
            <div className='lg:w-1/4 sm:w-full md:w-full border-2 border-accent'>
                <div className="dropdown lg:dropdown-open w-full h-full bg-white">
                    <label tabIndex={0} className="btn rounded-none w-full btn-accent text-white font-bold text-xl">Category</label>
                    <ul tabIndex={0} className="dropdown-content menu w-full">
                        {
                            products.map(product =>
                                <li className='border-t-2 border-accent text-lg hover:text-accent'>
                                    <div>
                                        <img className='w-6 h-6 rounded-2xl' src={product.image} alt='' />
                                        <Link to={`/category/${product._id}`} className='font-bold '>{product.categoryName}</Link>
                                        <span className='text-right'>❯</span>
                                    </div>
                                </li>
                            )
                        }


                    </ul>
                </div>
            </div>
            <div className='sm:w-full md:w-full lg:w-3/4'>
                    <Swiper
                         style={{
                            "--swiper-navigation-color": "#5FA800",
                            "--swiper-pagination-color": "#5FA800",
                           
                          }}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            carousel.map(slider =>
                                <SwiperSlide>
                                    <div className="carousel-item relative w-full">
                                        <img src={slider.bg} className="w-full" alt='' />
                                        <div className={`absolute ${slider.class}`}>
                                            <p className='sm:text-2xl sm:font-extrabold md:text-4xl md:font-extrabold  lg:text-6xl lg:font-extrabold '>{slider.title}</p>
                                            <Link to="" className='btn btn-accent btn-outline text-white mt-7'>Shop Now</Link>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        }

                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}
                    </Swiper>
                
            </div>

        </div>
    );
};

export default Banner;