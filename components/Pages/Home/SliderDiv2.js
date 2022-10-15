import React, { useEffect, useState } from 'react';
import movie1 from '../../../assets/images/Movies/movie1.png';
import movie2 from '../../../assets/images/Movies/movie2.png';
import movie3 from '../../../assets/images/Movies/movie3.png';

import Slider from "react-slick";
import axios from 'axios';
const images = [movie1, movie2, movie3, movie1, movie2, movie3, movie1, movie2, movie3];


const SliderDiv2 = () => {

    const [movTvShows, setMovTvShows] = useState([]);
    const [isError, setIsError] = useState("");



    // using Async Await
    const getMyPostData = async () => {

        try {
            const res = await axios.get("http://159.223.86.243/api/v1/sliders");
            setMovTvShows(res.data.data.original);
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
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 1,
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
                <div className="flex flex-wrap m-4"></div>
                <Slider {...settings}>

                    {
                     movTvShows.map((movTvShow, index) => ( 
                            <div className=" lg:w-1/6 md:w-1/4 p-3">
                                <div className=' key={index}'>
                                    <div className='relative  brightness-100 hover:brightness-60 '>
                                        <a href="#" className="group h-92 md:h-92 block  rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3 brightness-100 hover:brightness-50">
                                            <img src={movTvShow.image} loading="lazy" alt="Movie" className="h-72 w-82  object-center group-hover:scale-105 transition duration-200" />
                                           
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

export default SliderDiv2;