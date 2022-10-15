import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movie from '../../../assets/images/Movies/movie.png';
import Trending from '../Home/Trending';
import videojs from 'video.js'


const Movie = (props) => {
    const { movieId } = useParams();

    const [movTvShows, setMovTvShows] = useState([]);
    const [metaContents, setMetaContents] = useState([]);
    const [videoContents, setVideoContents] = useState([]);

    const [isError, setIsError] = useState("");



    // using Async Await
    const getMyPostData = async () => {

        try {
            const res = await axios.get(`http://159.223.86.243/api/v1/single-ott-content/${movieId}`);
            setMovTvShows(res.data.data);
            setMetaContents(res.data.data.content_meta);
            setVideoContents(res.data.data.content_source);
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);


    const videoJsOptions = {
        width: "630",
        height: "340",
    }

    console.log(videoContents.content_source);
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 mt-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-4xl font-bold uppercase">{movTvShows.title}</h1>
                        <div className="flex items-center">
                            <p>
                                <div className="flex gap-0.5 -ml-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </p>
                            <span className=''>6.8</span>
                            <p className='flex items-start m-1'> <span>(14,850) </span> {movTvShows.runtime} min <span className='ml-2'>{movTvShows.year}</span></p>
                            <p className='flex items-start m-1'> <span className='ml-2 border-2'> HD</span> <span className='ml-2 border-2'> HD</span></p>
                        </div>
                        <p className="py-6 font-leading-7 break-words">{movTvShows.description}</p>

                        {
                            metaContents.map((metaContent, index) => (
                                // console.log(metaContent)
                                <div className='my-1'>
                                    <p className='flex'><h2 className='text-xl uppercase font-bold'>{metaContent.key}</h2><span className='ml-3 mr-2 text-bold'>:</span> <span><a href=''>{metaContent.value}</a></span></p>
                                </div>

                            ))
                        }

                        <div className=" mt-4 flex flex-row sm:flex-row sm:justify-start lg:justify-start gap-2">
                            <a className="btn btn-primary text-white ">Watch Now <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg></a>
                            <a className="btn btn-outline btn-white ml-3 t">Add to Watchlist</a>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-2/2 w-6/6 video-js " id="my-video">
                        {/* <img src={movTvShows.poster} className="max-w-lg  shadow-2xl h-72 w-92" /> */}
                        {/* {
                            videoContents.map((videoContent) => (
                                <div className="">
                                    <video {...videoJsOptions}
                                        className="video-js"
                                        poster={movTvShows.poster}
                                        id="my-video"
                                        autoPlay="true"
                                        preload="auto"
                                        width="640"
                                        height="364"
                                        data-setup="{  }"
                                    >

                                        <source src={videoContent.content_source} type="video/mp4" />                                      <source src={videoContent.content_source} type="video/webm" />
                                    </video>
                                    <span>{videoContent.fps}</span> ~~
                                    <span>{videoContent.source_format}</span>

                                </div>

                            ))
                        } */}
                        {
                            <video
                                {...videoJsOptions}

                                loop="loop"

                                class=""
                                controls
                                autoPlay="true"
                                preload="auto"

                                poster={movTvShows.poster}
                                data-setup="{}"

                            >
                                {videoContents.map((videoContent) => (
                                    <source src={videoContent.content_source} type="video/mp4" />
                                ))
                                }

                            </video>

                        }
                        <div className='mt-5 flex justify-center items-center'>
                            <a className="btn btn-primary text-white "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>

                                <span className='ml-2'>Download</span>
                            </a>
                            <a className="btn btn-primary ml-2 text-white "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>

                                <span className='ml-2'>Write Review</span>
                            </a>
                            <a className="btn btn-primary ml-2 text-white "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                            </svg>
                                <span className='ml-2'>Share</span>
                            </a>
                        </div>
                    </div>

                </div>
                
                <Trending></Trending>

            </section>
        </>
    );
};

export default Movie;