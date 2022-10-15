import React from 'react';
import whatson from '../../../assets/images/home/content/whatson/whatson.png';
import movie from '../../../assets/images/home/content/whatson/movie.png';
import whatsonplay from '../../../assets/images/home/content/whatson/whatsonplay.png';

const WhatsMovie = () => {
    return (
        <>
            <div className="my-5">
                <div className="max-w-screen-2xl px-4 md:px-4 mx-auto">
                    <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-4 mb-8 md:mb-8">
                        <div className="xl:w-7/12 md:w-8/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-6">
                            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-3xl font-bold mb-8 md:mb-8">What's On</h1>
                            <p className=" md:text-lg xl:text-xl font-semibold mb-8 md:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                <div className="card bg-gray-800 xl:w-12/12 md:w-11/12 ">
                                    <div className="card-body">
                                        <div className='flex justify-between items-center'>
                                            <div className='flex lg:justify-center lg:items-center'>
                                               <><img src={whatsonplay}  className='w-10 h-10'/></>
                                                <div className='lg:ml-4 ml-1 text-white text-xl '>
                                                    <div className='text-white-700 text-sm lg:text-xl font-bold'>Rework</div>
                                                    <div>
                                                        <ul className="flex justify-around text-white-700 text-sm lg:text-xl font-bold ">
                                                            <li className='text-white-700 text-sm lg:text-xl font-bold' >2022</li>
                                                            <li className='xl:ml-3 ml-1 uppercase text-white-700 text-sm lg:text-xl font-bold'>ENGLISH</li>
                                                            <li className='xl:ml-3 ml-1 text-white-700 text-sm lg:text-xl font-bold'>1hr 2min</li>
                                                        </ul>
                                                    </div >
                                                </div>
                                            </div>
                                            <div className='flex justify-start  items-center '>
                                                <div className=' lg:ml-3 ml-0 text-white text-sm lg:text-xl '>
                                                    <div className='flex'>
                                                        <div className="flex gap-0.5 -ml-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 lg:w-6 h-4 lg:h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>

                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 lg:w-6 h-4 lg:h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>

                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 lg:w-6 h-4 lg:h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>

                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 lg:w-6 h-4 lg:h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>


                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h2 className="text-white-700 text-lg lg:text-xl font-bold mb-3 ">345  Reviews</h2>
                                                    </div >
                                                </div>
                                                <div className='ml-5 btn btn-square bg-white'><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <figure><img src={whatson} alt="whatson"  /></figure>
                                </div>
                            </div>
                      


                        <div className="h-full grid grid-cols-2 md:grid-cols-3 gap-8  my-10 md:mt-15 ">
                            <div className='flex justify-center items-center'>
                                <a href="#" className=" flex items-center transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30 ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>


                            <div className='flex justify-center items-center transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30'>
                                <a href="#" className=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>

                            <div className='flex justify-center items-center transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30'>
                                <a href="#" className=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>

                            <div className='flex justify-center items-center transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30'>
                                <a href="#" className=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>
                            <div className='flex justify-center items-center transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30'>
                                <a href="#" className=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>
                            <div className='flex justify-center items-center transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-105 hover:bg duration-30'>
                                <a href="#" className=" flex items-center  ">
                                    <figure><img src={movie} /></figure>
                                </a>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    );
};

export default WhatsMovie;