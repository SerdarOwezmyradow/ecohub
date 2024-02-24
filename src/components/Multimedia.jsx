import React from 'react'
import Divider from './Divider'
import image from '../images/multimedia.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Multimedia() {
    return (
        <div className='container mt-20'>
            <div className='flex justify-center items-end w-full '>
                <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>Multimedia</div>
                <Divider className='w-3/4' showright={true} />
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            // navigation
            >
                <SwiperSlide className='mt-10 cursor-pointer'>
                    <div className='w-full aspect-[4/3]'>
                        <img src={image} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mt-10 cursor-pointer'>
                    <div className='w-full aspect-[4/3]'>
                        <img src={image} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mt-10 cursor-pointer'>
                    <div className='w-full aspect-[4/3]'>
                        <img src={image} alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}

            </Swiper>

        </div>
    )
}

export default Multimedia