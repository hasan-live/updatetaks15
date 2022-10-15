import React, { useEffect, useState } from 'react';
import sport from '../../../assets/images/Movies/sports.png';
import logoSport from '../../../assets/images/Movies/logo-sport.png';
import Slider from "react-slick";


const images = [sport, sport, sport, sport, sport];

const LiveSportFeatures = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };

    return (
        <>
            <section className="text-gray-600 py-10">
                <div className="container max-width  mx-auto">
                    <div className=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 className="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase"></h1>
                    </div>
                </div>

                <Slider {...settings}>
                    {
                        images.map((image) => (
                            <div className=" lg:w-1/3 md:w-1/3 p-4 gap-3">
                                <div className="card bg-gray-800 ">
                                    <div className="card-body">
                                        <div className='flex justify-between items-center'>
                                            <div className='flex  '>
                                                <img src={logoSport} className='w-11 h-11' />
                                                <div className='lg:ml-4 ml-1 text-white text-xl '>
                                                    <div className=' text-sm lg:text-xl font-bold'>T- Sports</div>
                                                    <div>
                                                        <ul className="flex justify-around text-white-700 text-sm lg:text-xl font-bold ">
                                                            <li className=' text-sm lg:text-xl font-bold' >22-07-2022</li>
                                                            <li className='xl:ml-3 ml-1 text-white-700 text-sm lg:text-xl font-bold'>49m runing </li>
                                                        </ul>
                                                    </div >
                                                </div>
                                            </div>
                                            <div className='flex justify-start  items-center '>
                                                <div className='lg:ml-3 ml-0 text-white text-sm lg:text-xl '>
                                                    <div className='flex'>
                                                        <div className="flex gap-0.5 -ml-1 justify-center">
                                                            <h2 className='className=" font-bold mb-3 text-xl'> 3,579 k</h2>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className=" text-lg lg:text-xl font-bold mb-3 ">Watching Now</h4>
                                                    </div >
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='relative  brightness-100 hover:brightness-60 '>
                                    <a href="#" className="group h-full md:h-full    overflow-hidden shadow-lg relative mb-2 lg:mb-3 brightness-100 hover:brightness-50">
                                        <img src={image} loading="lazy" alt="Movie" className="h-full w-full  object-center group-hover:scale-105 transition duration-200" />
                                        <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center opacity-0 hover:opacity-1 hover:opacity-100  hover:brightness-100 ">
                                            <a href='#' className="relative flex items-center justify-center  w-min flex-shrink-0 p-2 text-center text-primary  rounded-full group-hover:primary text-white text-5xl bg-primary group-hover:stroke-white" >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" className="w-12 h-12  ml-1 mx-auto">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </a>
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

export default LiveSportFeatures;