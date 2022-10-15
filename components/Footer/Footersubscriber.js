import React from 'react';
import subscribe from '../../assets/images/home/footer/subscribe.png';

const Footersubscriber = () => {
    return (
        <>
            <section className="relative overflow-hidden my-3">
                <div className='container mx-auto flex  py-20 px md:flex-row flex-col items-center'>
                    <img className='absolute inset-0 w-full object-cover h-full  ' src={subscribe} alt=""></img>
                    <div className="container px-20 mr-50 py-24 mx-auto flex items-center md:flex-row ">
                        <div className=" absolute flex  flex-col md:pr-10 md:mb-0 mb-8 pr-0 w-full md:w-auto md:text-left text-center ">
                            <h1 className=" md:text-3xl text-2xl font-medium title-font text-white">Subscribe our newsletter for newest <br />
                                movies updates</h1>
                            <div className=" relative mt-2 ">
                                <input type="text" placeholder="Type your email here" className="input input-bordered  w-full max-w-xs  " />
                                <button className="btn btn-secondary absolute ml-2 rounded-l-none">Subscribe</button>
                            </div>
                        </div>

                        <div className="flex md:ml-auto md:mr-0 ms:md-0 mx-auto justify-center ">
                            <span className="absolute text-white">All Over The <br />
                                Bangladesh</span>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Footersubscriber;