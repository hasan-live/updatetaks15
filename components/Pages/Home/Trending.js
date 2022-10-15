import React, { useState } from 'react';
import movie1 from '../../../assets/images/Movies/movie1.png';
import movie2 from '../../../assets/images/Movies/movie2.png';
import movie3 from '../../../assets/images/Movies/movie3.png';

import Slider from "react-slick";
const images = [movie1, movie2, movie3, movie1, movie2, movie3, movie1, movie2, movie3];


const Trending = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="text-gray-600 py-6 mt-5 ">
                <div className="container max-width px-5 mx-auto">
                    <div className=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 className="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Trending </h1>
                    </div>
                </div>
                
                <div className="flex flex-wrap m-4"></div>
                <Slider {...settings}>
                    {

                        images.map((image, index) => (
                            <div className=" lg:w-1/6 md:w-1/4 p-4">
                                <div className=' key={index}'>
                                <div className='relative  brightness-100 hover:brightness-60 '>
                                        <a href="#" className="group h-82 md:h-42 block  rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3 brightness-100 hover:brightness-50">
                                            <img src={image} loading="lazy" alt="Movie" className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-200" />
                                            <span className="bg-red-500 text-white text-sm  font-bold uppercase rounded-br-lg absolute left-0 top-10 px-3 py-1.5 hover:opacity-0">New</span>

                                            <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center opacity-0 hover:opacity-1 hover:opacity-100  hover:brightness-100 ">
                                                <a href='#' className="relative flex items-center justify-center  w-min flex-shrink-0 p-2 text-center text-primary  rounded-full group-hover:primary text-white text-5xl bg-primary group-hover:stroke-white" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="w-12 h-12  ml-1 mx-auto">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="flex justify-between items-start gap-2 px-2">
                                        <div className="flex flex-col">
                                            <a href="#" className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Take Out Tango</a>
                                            <p className='flex items-start m-1'>2018 <span className='ml-2'>2h 3m</span></p>
                                            <p>
                                                <div className="flex gap-0.5 -ml-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>

                                                    <span className=''>6.9</span>
                                                </div>
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-end">
                                            {/* <span className="text-gray-600 lg:text-lg font-bold">৳ 200</span> */}

                                        </div>
                                    </div>
                                </div>




                            </div>
                        ))
                    }
                </Slider>
            </section>


        </>
    );
};

export default Trending;