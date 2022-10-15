import React from 'react';
import Slider from 'react-slick';
import loginbg from '../../../assets/images/Login/logoImage.png';
import movie1 from '../../../assets/images/Movies/movie1.png';
import movie2 from '../../../assets/images/Movies/movie2.png';
import movie3 from '../../../assets/images/Movies/movie3.png';
const images = [movie1, movie2, movie3, movie1, movie2, movie3, movie1, movie2, movie3];

const Login = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section class="text-gray-600 body-font relative mt-7">
                <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

                    <div class="lg:w 2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-5 flex items-end justify-start relative">
                        <div className="card w-full mx-auto bg-base-100 shadow-xl p-10">
                            <h2 className='text-3xl mx-auto my-2'>OTTAPP</h2>
                            <div className="card lg:card-side bg-base-100 shadow-xl">
                                <figure><img src={loginbg} alt="Album" /></figure>
                                <div className="card-body">
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary mt-0">Pro</button>
                                    </div>
                                    <h2 className="card-title">Morbius</h2>
                                    <p>Action/Adventure</p>
                                    <div className='flex'>
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
                                    
                                    <div className='flex  items-center'>
                                    <button className='btn text-white'>Play</button>
                                        <span className='flex justify-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        </span>

                                    </div>
                                </div>
                            </div>
                            <div className='mx-auto w-96 my-5'>
                                <h2 className='text-4xl my-3'>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w 2/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="hero-content flex-col">
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-bold">Login in to
                                    your account</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Login;