import React from 'react'
import Divider from './Divider'
import image from '../images/gallery.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Multimedia() {
    return (
        <div className='relative h-auto w-[95vw] flex mx-auto'>

            <div className='container mt-20'>
                <div className='flex justify-center items-end w-full '>
                    <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>Galereýa</div>
                    <Divider className='w-3/4' showright={true} />
                </div>
                <Swiper
                    spaceBetween={10}
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                // navigation
                >
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-[4/3]'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-[4/3]'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-[4/3]'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-[4/3]'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}

                </Swiper>

            </div>
            <div className="flex justify-between absolute left-0 right-0 z-20 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
                <button className="custom-prev-button  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
                <button className="custom-next-button ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default Multimedia