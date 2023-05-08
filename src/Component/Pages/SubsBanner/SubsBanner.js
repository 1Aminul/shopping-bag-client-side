import React from 'react';

const SubsBanner = () => {
    return (
        <div className='bg-cover w-full h-96 flex justify-center items-center' style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0412/8151/9765/files/news-bg2_b1d31fdd-11bd-4346-b272-4c04fa5c9244.jpg?v=1613781665")`, }}>
            <div className='text-center w-1/2'>
                <h1 className='text-4xl font-bold'>Get the latest deals</h1>
                <p className='text-lg mb-5'>And receive 20% off coupon for first shopping</p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full" />
                        <button className="btn btn-accent text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubsBanner;