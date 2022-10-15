import React, { useEffect, useState } from 'react';
import sports1 from '../../../assets/images/home/sports/sports1.png';
import Slider from "react-slick";

const images = [sports1, sports1, sports1, sports1, sports1];


const Sports = () => {

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
        beforeChange: (current, next) => setImageIndex(next),
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

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <>
            <section className="text-gray-600 py-10">
                <div className="container max-width px-5   mx-auto">
                    <div className=" flex flex-col divide-y divide-dashed text-center w-full  items-start mb-3">
                        <h1 className="text-3xl font-bold  title-font mb-4  text-gray-900 uppercase">Sports</h1>
                    </div>
                </div>

                <div className="flex flex-wrap m-4 rounded"></div>
                <Slider {...settings}>
                    {
                        images.map((image, index) => (
                            <div className="p-2  h-64 grid grid-cols-3 gap-4" key={index}>
                                <div className="w-full flex flex-col items-center text-center">
                                    <div className={index == imageIndex ? 'slide activeSlide' : 'slide'}>
                                        <figure className='transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-110 hover:bg duration-30'><a href=''><img src={image} alt='image' /></a></figure>
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

export default Sports;