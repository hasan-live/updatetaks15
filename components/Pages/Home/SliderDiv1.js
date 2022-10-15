import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const SliderDiv1 = () => {
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

    console.log(movTvShows)

    return (

        <div>
         
            <breadcrumb className="py-3 rounded-md w-full">
                <ol className="list-reset flex">
                    <li className="text-gray-500 ">2022.</li>
                    <li><a href="#" className="text-blue-600 hover:text-block ml-2 uppercase"> Action</a></li>
                    <li><span className="text-gray-500 mx-2">/</span></li>
                    <li><a href="#" className="text-blue-600 hover:text-block uppercase"> Adventure: </a></li>
                    <li className="text-gray-500 ml-2"> 2h 13m</li>
                </ol>
            </breadcrumb >

            <h1 className="text-4xl font-bold uppercase">Thor: Love and Thunder</h1>
            <p className="py-6 font-leading-7 break-words">Thor: Love and Thunder is an upcoming American superhero
                film based on the Marvel Comics character Thor, produced by
                Marvel Studios and distributed by Walt Disney Studios Motion
                Pictures. It is intended to be the direct sequel to Thor: Ragnarok and the 29th film in the Marvel Cinematic Universe.</p>
            <h2 className="text-3xl font-semibold">COMING SOON</h2>

            <div className=" mt-4 flex flex-row sm:flex-row sm:justify-start lg:justify-start gap-2">
                <a className="btn btn-primary text-white ">Watch Now <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></a>
                <a className="btn btn-outline btn-white ml-3 t">Add to Watchlist</a>

            </div>

        </div>




    );
};

export default SliderDiv1;