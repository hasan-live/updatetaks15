import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import sports1 from '../../../assets/images/home/sports/sports1.png';

const images = [sports1, sports1, sports1, sports1, sports1];

const SubscriptionPlan = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,

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
                    slidesToShow: 1,
                    slidesToScroll: 1,
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




    const [buyPlans, setBuyPlans] = useState([]);
    const [isError, setIsError] = useState("");


    // using Async Await
    const getMyPostData = async () => {

        try {
            const res = await axios.get("http://159.223.86.243/api/v1/available-subscription-plans");
            setBuyPlans(res.data.data);

        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);

    const slice = (buyPlans.slice(-3));



    return (
        <>
            <div className="pricing-table-2 py-8 pb-6 md:py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Subscription Plan</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                    </div>

                    <Slider {...settings}>
                        {
                            slice.map((buyPlan, index) => (
                                <div className=" grid grid-cols-3 mt-10" key={index}>
                                    <div className="w-full flex flex-col items-center text-center mt-15">
                                        <div className="shadow-lg grid grid-cols gap-7 p-5  items-center justify-center my-5 ">
                                            <div className="shadow-lg border-4  border-solid border-gray text-center max-w-sm mx-auto rounded-3xl  transition-colors duration-3000  ease-in-out delay-150 bg-text hover:-translate-y-3 hover:scale-110 hover:bg duration-3 p-7">
                                                <div className="pricing-amount transition-colors duration-3000">
                                                    <div className=""><span className="text-2xl font-bold">{buyPlan.plan_name}<br />
                                                        of premium <br />
                                                        for ৳ {buyPlan.regular_price}</span>
                                                    </div>
                                                </div>
                                                <div className="p-5">
                                                    <ul class="grid grid-cols-1 gap-4">
                                                        <li class="inline-flex items-center">
                                                            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                            </svg>

                                                            Discount Price : {buyPlan.discount_price}
                                                        </li>

                                                        <li class="inline-flex items-center">
                                                            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                            </svg>

                                                            Discount Rate : {buyPlan.discount_rate}
                                                        </li>

                                                        <li class="inline-flex items-center">
                                                            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                            </svg>

                                                            Discount Price : {buyPlan.discount_price}
                                                        </li>
                                                        <li class="inline-flex items-center">
                                                            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                            </svg>

                                                            Discount Type : {buyPlan.discount_type}
                                                        </li>
                                                        <li class="inline-flex items-center">
                                                            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                            </svg>

                                                            Discount expiry eate : {buyPlan.discount_expiry_date}
                                                        </li>
                                                        <li class="inline-flex items-center">
                                                            <svg class="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                                            </svg>

                                                            Number of allowed device : {buyPlan.number_of_allowed_device}
                                                        </li>
                                                    </ul>

                                                    <div className="mt-6 py-4">
                                                        <button className="bg-primary text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">Subscribe</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            ))
                        }

                    </Slider>


                    

                </div>
            </div>

        </>
    );
};

export default SubscriptionPlan;