import React from 'react';
import notfound from '../../../assets/images/home/404.png';

const NotFoundPage = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={notfound} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex justify-start'>
                        <div className='mx-20'>
                            <h1 className="text-6xl font-bold">404 Ops!</h1>
                            <p className="py-6">Page Not Found</p>
                            <button className="btn btn-primary text-white"><a href='/'>Back Home</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;