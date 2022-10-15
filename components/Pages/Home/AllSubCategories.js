import React, { useEffect, useState } from 'react';
import slider1 from '../../../assets/images/home/slider/slider1.png';
import slider2 from '../../../assets/images/home/slider/slider2.png';
import slider3 from '../../../assets/images/home/slider/slider3.png';
import SliderReact from "react-slick";
import axios from 'axios';
const images = [slider1, slider2, slider3, slider1, slider2, slider3, slider1, slider2, slider3];


const AllSubCategories = () => {
    const [movTvShows, setMovTvShows] = useState([]);
    const [isError, setIsError] = useState("");



    // using Async Await
    const getMyPostData = async () => {

        try {
            const res = await axios.get("http://159.223.86.243/api/v1/sub-categories");
            setMovTvShows(res.data.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
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
                <div className="mx-auto">
                    <SliderReact {...settings}>
                     
                        {
                            movTvShows.map((movTvShow) => (

                                <div className="lg:w-1/6 md:w-1/4 gap- p-2">
                                    <a href="#" className="group h-56  flex items-end  mt-8 overflow-hidden  relative p-5 rounded-lg ">
                                        <img src={movTvShow.image} loading="lazy" alt="slider" className="  object-cover object-center absolute inset-0 group-hover:scale-105 transition duration-50" />
                                        <div className="bg-gradient-to-t from-red-500 via-transparent to-transparent opacity-800 absolute  pointer-events-none"></div>

                                        <div className="flex relative  md: justify-end sm:justify-center md:justify-end lg:justify-between xl:justify-around">
                                            <div className="flex">
                                                <p>
                                                    <div className="flex gap-1.0 -ml-3 mt-[9]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                        </svg>
                                                        <span className='text-white text-xl text-bold'>{movTvShow.title}</span>
                                                    </div>
                                                </p>

                                            </div>
                                        </div>
                                    </a>
                                </div>

                               

                            ))
                        }
                    </SliderReact>
                </div>
            </section >


        </>
    );
};

export default AllSubCategories;