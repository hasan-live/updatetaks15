import React, { useEffect, useState } from 'react';
import MovieSlider from '../../../assets/images/Movies/MovieSlider.png';
import MovieSlider1 from '../../../assets/images/Movies/MoveSlider1.png';
import MovieSlider2 from '../../../assets/images/Movies/MoveSlider2.png';
import axios from 'axios';
import Slider from 'react-slick';

const MovieSliderSection = () => {
    const [movSliders, setMovSliders] = useState([]);
    const [isError, setIsError] = useState("");



    // using Async Await
    const getMyPostData = async () => {

        try {
            const res = await axios.get("http://159.223.86.243/api/v1/frontend/custom/sliders");
            setMovSliders(res.data.data.original);
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);

    // console.log(movSliders)


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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
            <div className="mt-28">
                <Slider {...settings}>
                    {
                        movSliders.map((movSlider, idx) => (

                            <div className="h-full grid grid-cols-3" key={idx}>
                            <div className="w-full flex flex-col items-center text-center">
                                <div className={idx == imageIndex ? 'Sliderslide SlideractiveSlide' : 'Sliderslide'}>
                                    <figure className='transition ease-in-out delay-150 bg-text  hover:scale-110 hover:bg duration-30'><a href=''><img src={movSlider.image} alt='image' className='h-92' /></a></figure>
                                </div>
                            </div>
                        </div>


                        ))
                    }
                </Slider>





            </div>
        </>
    );
};

export default MovieSliderSection;