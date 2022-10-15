import React, { useState } from 'react';
import SingleMovie1 from '../../../assets/images/Movies/SingleMovie1.png';
import SingleMovie2 from '../../../assets/images/Movies/SingleMovie2.png';
import SingleMovie3 from '../../../assets/images/Movies/SingleMovie3.png';
import Slider from "react-slick";
const images = [SingleMovie1, SingleMovie2, SingleMovie3,SingleMovie1, SingleMovie2, SingleMovie3];


const LiveSports = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="text-gray-600 py-2">
            <div className="container max-width px-5 mx-auto">
                    <div className=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 className="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Spotrs</h1>
                    </div>
                </div>
                <div className="mx-auto">
                    <Slider {...settings}>
                        {
                            images.map((image) => (

                                <div className="lg:w-1/4 md:w-1/3 gap-2 p-4">
                                    <a href="#" className="group h-72   flex items-end   mt-8 overflow-hidden  relative p-8 rounded-lg ">
                                        <img src={image} loading="lazy" alt="slider" className="  object-cover object-center absolute inset-0 group-hover:scale-105 transition duration-50" />
                                        <div className="bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-800 absolute  pointer-events-none"></div>

                                        <div className="flex relative  md: justify-end sm:justify-center md:justify-end lg:justify-between xl:justify-around">
                                           
                                        </div>
                                    </a>
                                </div>

                               

                            ))
                        }
                    </Slider>
                </div>
            </section >


        </>
    );
};

export default LiveSports;