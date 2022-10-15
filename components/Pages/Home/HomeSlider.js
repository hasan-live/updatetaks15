import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {


    const [movTvShows, setMovTvShows] = useState([]);
    const [slideContents, setSlideContents] = useState(0);
    const [isError, setIsError] = useState("");

    // using Async Await
    const getMyApiData = async () => {

        try {
            const res = await axios.get("http://159.223.86.243/api/v1/sliders");
            setMovTvShows(res.data.data.original);
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyApiData();
    }, []);


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
        afterChange: (state) => {
            setSlideContents(state)
        },

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            }
        ]
    };


  

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 mt-11 py-11 md:flex-row flex-col items-center">

                    {

                        movTvShows.map((movTvShow, index) => (
                            <div className={index != (slideContents) ? 'hidden lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center' : 'lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'}>
                                <breadcrumb className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                                    <ol className="list-reset flex">
                                        <li className="text-gray-500 ">2022.</li>
                                        <li><a href="#" className="text-blue-600 hover:text-block ml-2 uppercase"> Action</a></li>
                                        <li><span className="text-gray-500 mx-2">/</span></li>
                                        <li><a href="#" className="text-blue-600 hover:text-block uppercase"> Adventure: </a></li>
                                        <li className="text-gray-500 ml-2"> 2h 13m</li>
                                    </ol>
                                </breadcrumb >

                                <h1 className="text-4xl font-bold uppercase">Thor: {movTvShow.title}</h1>
                                <p className="py-6 font-leading-7 break-words">Thor: {movTvShow.description}</p>
                                <h2 className="text-3xl font-semibold">{movTvShow.bottom_title}</h2>

                                <div className=" mt-4 flex flex-row sm:flex-row sm:justify-start lg:justify-start gap-2">
                                    <a className="btn btn-primary text-white ">Watch Now <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg></a>
                                    <a className="btn btn-outline btn-white ml-3 t">Add to Watchlist</a>

                                </div>
                            </div>
                        ))
                    }


                    <div className=" max-w-lg h-full w-full md:w-2/1 w-2/1 mt-11">
                        <section className="text-gray-600 py-6 mt-6  ">
                            <div className="flex "></div>
                            <Slider {...settings}>
                                {
                                    movTvShows.map((movTvShow, idx) => 
                                    (
                                        <div className="grid grid-cols-3 items-center" key={idx}>
                                        <div className="flex flex-col items-center text-center w-62 h-62  my-4 ">
                                            <div className={idx == imageIndex ? 'homeslide homeactiveSlide' : 'homeslide'}>
                                                <figure className='transition ease-in-out delay-150 bg-text   hover:scale-110 hover:bg duration-30'><a href=''><img src={movTvShow.image} alt='image' className='w-62 h-72'/></a></figure>
                                            </div>
                                        </div>
                                    </div>
                                       
                                    ))
                                }
                            </Slider>
                        </section>
                    </div>

                </div>
            </section>

        </>
    );
};

export default HomeSlider;