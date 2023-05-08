import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const DisplayProduct = () => {
    const { data: category = [] } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await fetch(`https://food-fanda-server.vercel.app/Product`);
            const data = await res.json();
            return data;
        }
    })
    // console.log(category[0].categoryItem)
    let items = []
    if (!category.length) {
        return <><p>Loading.........</p></>
    }
    else {
        items = category
    }

    return (
       <div className='sm:px-3'>
       
         <Tabs>
            {/* <TabList className="text-center text-xl flex justify-center gap-10">
                <Tab className="hover:text-accent cursor-pointer border-2">Fruit</Tab>
                <Tab className="hover:text-accent cursor-pointer border-2">Meat</Tab>
                <Tab className="hover:text-accent cursor-pointer border-2">Vegetables</Tab>
            </TabList> */}
            <TabList className="font-bold flex justify-end gap-2">
                <Tab>Fruit</Tab>
                <Tab>Meat</Tab>
                <Tab>Fish</Tab>
                <Tab>Vegetables</Tab>
            </TabList>
            <TabPanel>
                <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-10 my-5'>
                    {
                        items[0].categoryItem.map(item =>
                            <div className='border-2 overflow-hidden px-2'>
                                <img className='w-full h-48 hover:scale-110 transition-all' src={item.imgURL} alt=""></img>
                                <div className='pl-2 mt-2'>
                                    <h1 className='text-xl font-medium'>{item.name}</h1>
                                    <p className='flex gap-2 text-lg text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                    <p className='text-xl mt-1'>৳ {item.price}</p>
                                </div>
                                 <Link to={`/cart/${items[0]._id}/${item.id}`}><button className='btn btn-outline btn-accent rounded-none w-full'>Add To Cart</button></Link>
                            </div>
                        )
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-10 my-5'>
                    {
                        items[2].categoryItem.map(item =>
                            <div className='border-2 overflow-hidden px-2'>
                               <img className='w-full h-48 hover:scale-110 transition-all' src={item.imgURL} alt=""></img>
                                <div className='pl-2 mt-2'>
                                    <h1 className='text-xl font-medium'>{item.name}</h1>
                                    <p className='flex gap-2 text-lg text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                    <p className='text-xl mt-1'>৳ {item.price}</p>
                                </div>
                                <Link to={`/cart/${items[2]._id}/${item.id}`}><button className='btn btn-outline btn-accent rounded-none w-full'>Add To Cart</button></Link>
                            </div>

                           
                        )
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-10 my-5'>
                    {
                        items[6].categoryItem.map(item =>
                            <div className='border-2 overflow-hidden px-2'>
                                <img className='w-full h-48 hover:scale-110 transition-all' src={item.imgURL} alt=""></img>
                                <div className='pl-2 mt-2'>
                                    <h1 className='text-xl font-medium'>{item.name}</h1>
                                    <p className='flex gap-2 text-lg text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                    <p className='text-xl mt-1'>৳ {item.price}</p>
                                </div>
                                <Link to={`/cart/${items[6]._id}/${item.id}`}><button className='btn btn-outline btn-accent rounded-none w-full'>Add To Cart</button></Link>
                            </div>
                        )
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-10 my-5'>
                    {
                        items[5].categoryItem.map(item =>
                            <div className='border-2 overflow-hidden px-2'>
                                <img className='w-full h-48 hover:scale-110 transition-all' src={item.imgURL} alt=""></img>
                                <div className='pl-2 mt-2'>
                                    <h1 className='text-xl font-medium'>{item.name}</h1>
                                    <p className='flex gap-2 text-lg text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                    <p className='text-xl mt-1'>৳ {item.price}</p>
                                </div>
                                <Link to={`/cart/${items[5]._id}/${item.id}`}><button className='btn btn-outline btn-accent rounded-none w-full'>Add To Cart</button></Link>
                            </div>
                        )
                    }
                </div>
            </TabPanel>
        </Tabs>
       </div>
    );
};

export default DisplayProduct;