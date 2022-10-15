import React from 'react';
import appbanner from '../../../assets/images/home/content/app/appbanner.png';
import addslogo from '../../../assets/images/home/content/app/addslogo.png';
import adds2 from '../../../assets/images/home/content/app/adds2.png';
const AppAds = () => {
    return (
        <>
            {/* <div className=" relative  w-full h-full">
                <figure><img src={appbanner} className='' alt="Shoes" /></figure>
            </div> */}


            {/* <section className="min-h-screen bg-cover " style="background-image: url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                <div className="flex flex-col min-h-screen bg-black/60">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="text-white lg:w-1/2 lg:mx-6">
                                <h1 className="text-3xl font-semibold capitalize lg:text-5xl">Ultimate design solution</h1>

                                <p className="max-w-xl mt-6">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo
                                    aliquid molestiae hic incidunt beatae placeat accusantium! Alias ex quisquam ab tempora. Ratione
                                    autem doloremque ducimus numquam doloribus, error sed.
                                </p>

                                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    get in touch
                                </button>

                                <div className="mt-6 md:mt-8">
                                    <h3 className="text-gray-300 ">Follow us</h3>

                                    <div className="flex mt-4 -mx-1.5 ">
                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                    <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

                                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                                        Ask us everything and we would love
                                        to hear from you
                                    </p>

                                    <form className="mt-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                                        </div>

                                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                            get in touch
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <div className="bg-cover bg-center " style="background-image: url(...)">
                Hello

            </div> 


            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                <span className="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-600 mb-1">Download on the</span>
                                <span className="title-font font-medium">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 mt-10">
                <figure><img src={appbanner} alt="appbanner" />

                </figure>
            </section> */}
            {/* 
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 gap-0 w-full h-full">
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img className="object-cover w-full h-full" src={appbanner} alt="Flower and sky" />

                    <div className="absolute top-0 left-0 px-6 py-4">

                        <div className="hero bg-base-100">
                            <div className="flex items-center justify-start">
                                <div className="text-center lg:text-left">
                                    
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}

            <section className="relative">
                <div className="absolute inset-0 bg-gray-300">
                    <img className="object-cover w-full h-full" src={appbanner} alt="Flower and sky" />
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/2 md:w-1/2 bg-cyan-500 rounded-lg p-10 xl:p-24  flex flex-col md:ml-auto w-full mt-0 md:mt-0 relative z-10 ">
                        <div className="flex justify-between ">

                            <div className='flex justify-center items-center'>
                                <>
                                <div className="avatar">
                                    <div className="w-24  rounded shadow-xl">
                                        <img src={addslogo} className='border-8 border-text-white'/>
                                    </div>
                                </div>
                                </>
                                <div className='lg:ml-4 ml-3 text-block text-3xl '>
                                    <div className='text-white-700 text-sm lg:text-xl font-bold uppercase'>OTT App</div>
                                    <div>
                                        <div className='ml-0 text-white text-sm lg:text-xl '>
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

                                        </div>
                                    </div >
                                </div>
                            </div>


                            <div className="w-24">
                                <img className="" src={adds2} />
                            </div>
                        </div>

                        <div className="p-4 w-full text-center rounded-lg ">
                            <div className='mt-6'>
                                <p className="mb-5 text-base text-white sm:text-lg dark:text-gray-400">Stay up to date and move work forward<br />  with Flowbite on iOS &amp;  Android. <br /> Download the app today.</p>
                                <h5 className="mb-2 text-3xl font-bold text-white dark:text-white uppercase"> <span className='text-2xl text-gray-800'>Download</span> The APP</h5>
                            </div>
                            <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
                                <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                    <div className="text-left">
                                        <div className="mb-1 text-xs">Download on the</div>
                                        <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
                                    </div>
                                </a>
                                <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                    <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                                    <div className="text-left">
                                        <div className="mb-1 text-xs">Download in on the</div>
                                        <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default AppAds;