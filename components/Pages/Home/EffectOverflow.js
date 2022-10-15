import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import banner1 from '../../../assets/images/home/banner/banner1.png';

const images = [banner1, banner1, banner1, banner1, banner1, banner1];

const EffectOverflow = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
               
                
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 5,
                    slideShadows: true,
                }}
             
                spaceBetween={30}
              
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination,EffectCoverflow]}
                className="mySwiper swiper-container"
            >
                <div className='container'>
                    <div className='flex'>
                       {  
                       images.map((image) => (
                         <SwiperSlide>
                                 <img className="object-cover object-center rounded" alt="banner" src={image} /> 
                         </SwiperSlide>
                       ))
                       }
                    </div>
                </div>
            </Swiper>
        </>
    );
};

export default EffectOverflow;