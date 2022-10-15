
import React from 'react';

const BuySubscriptionPlan = () => {

  

    return (
        <>
            <div className="pricing-table-2 py-6 pb-6 md:py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Subscription Plan</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="shadow-lg lg:mx-[40px] md:flex items-center justify-center gap-6  md:mt-6">

                        <div className=" lg:w-1/3 my-2 md:my-6 ">
                            <div className="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto rounded-3xl  transition-colors duration-300 transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-108 hover:bg duration-30">
                                <div className="pricing-amount  p-10 transition-colors duration-300">
                                    <div className=""><span className="text-2xl font-bold">1 month <br />
                                        of premium <br />
                                        for ৳ 100</span>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <ul className="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div className="mt-6 py-4">
                                        <button className="bg-green-600 text-xl text-white py-2 px-6 rounded hover:bg-red-700 transition-colors duration-300">UnSubscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" lg:w-1/3 my-2 md:my-6 ">
                            <div className="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto rounded-3xl md:scale-105 duration-300 transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-108 hover:bg duration-30">

                                <div className="pricing-amount  p-10 transition-colors duration-300">
                                    <div className=""><span className="text-4xl font-bold">3 month <br />
                                        of premium <br />
                                        for ৳ 250</span>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <ul className="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div className="mt-6 py-4">
                                        <button className="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-green-700 transition-colors duration-300">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" lg:w-1/3 my-2 md:my-6 ">
                            <div className="shadow-lg border-4 border-solid border-gray text-center max-w-sm mx-auto rounded-3xl duration-300 transition ease-in-out delay-150 bg-text hover:-translate-y-1 hover:scale-108 hover:bg duration-30">

                                <div className="pricing-amount  p-10 transition-colors duration-300">
                                    <div className=""><span className="text-2xl font-bold">12 month <br />
                                        of premium <br />
                                        for ৳ 7500</span>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <ul className="leading-loose">
                                        <li>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                        </li>

                                    </ul>
                                    <div className="mt-6 py-4">
                                        <button className="bg-red-600 text-xl text-white py-2 px-6 rounded hover:bg-green-700 transition-colors duration-300">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default BuySubscriptionPlan;