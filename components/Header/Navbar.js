import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import signlogo from '../../assets/images/home/signlogo.png';

const Navbar = () => {
    const menuItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
            <li><Link to='/lives'>Live</Link></li>
            <li><Link to='/tvshows'> TV Shows</Link></li>
            <li tabIndex={0}>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
                <ul className="menu menu-compact lg:menu-normal bg-accent w-56 p-2  rounded-box text-neutral-content">
                    <li><Link to='/'>Bangla </Link></li>
                    <li><Link to='/'>English </Link></li>
                    <li><Link to='/' >Hindi </Link></li>
                </ul>
            </li>
            <li><Link to='/'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg></Link></li>
            <li><Link to='/mylists'>My List</Link></li>
            <li><Link to='/'> <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </button></Link>
            </li>
        </>
    return (
        <>
            <div className="navbar bg-accent text-base-100  top-0 z-50 fixed">
                <div className=" navbar-start container mx-auto">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-0 l-3 shadow bg-accent text-base-100 w-56">

                            {/* {menuItems} */}

                           <li>
                           <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className=" bg-gray-900 block p-2 pl-10 w-full text-white  rounded-lg border border-dark-900 sm:text-sm focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-900 dark:border-gray-900 dark:placeholder-gray-900 dark:text-gray dark:focus:ring-gray-900 dark:focus:border-gray-900" placeholder="Search..." />
                           </li>

                            {menuItems}


                        </ul>
                    </div>
                    <a>
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </a>

                    <a className="btn btn-ghost normal-case text-xl">OTT</a>
                    <nav >
                        <div className="container flex flex-wrap justify-between items-center mx-auto  ml-3">
                            <div className="hidden relative md:block ">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className=" bg-gray-900 block p-2 pl-10 w-full text-white  rounded-lg border border-dark-900 sm:text-sm focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-900 dark:border-gray-900 dark:placeholder-gray-900 dark:text-gray dark:focus:ring-gray-900 dark:focus:border-gray-900" placeholder="Search titles here..." />
                            </div>
                        </div>
                    </nav>

                </div>
                <div className="navbar-center hidden lg:flex md:navbar-start">
                    <ul className="menu menu-horizontal p-0 ">

                        {menuItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="login">
                        <button type="button" className="text-white bg-[#FF3333] hover:bg-[#FF3533]/80 focus:ring-4 focus:outline-none focus:ring-[#FF3333]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF3333]/40 dark:focus:ring-gray-600">
                            Sign In
                            <img src={signlogo} className="ml-3 h-4 sm:h-6 " alt="sign Logo" />
                        </button>
                    </Link>

                    <button className="btn btn-primary ml-3 ">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="gray" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

        </>
    );
};

export default Navbar;