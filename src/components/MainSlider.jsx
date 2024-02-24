import React from 'react'
import image from '../images/ashgabat.png'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Divider from './Divider';

function MainSlider() {
    return (
        <div className='container pt-10'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            // navigation
            >
                <SwiperSlide className=''>
                    <div className='flex w-full p-4 aspect-[9/4] bg-[#F8F8F8]'>
                        <div className='w-1/2 relative pe-5'>

                            <div className='text-goldColor w-3/4  font-semibold text-[30px] capitalize '>
                                ‘’ ylymly-bilimli, sagdyn ýaşlar döwletimiziň kuwwatly güýjüdir, nurana geljegidir ‘’
                            </div>
                            <div className='absolute bottom-4 flex items-end gap-5  right-5 left-0'>
                                <div className='wrap w-1/3 text-goldColor font-semibold text-xl'>Serdar
                                    Berdimuhamedow</div>
                                <Divider showright={true} />
                            </div>
                        </div>

                        <div className='w-1/2 h-full'>
                            <img src={image} className='object-cover w-full h-full' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}

            </Swiper>

        </div>
    )
}

export default MainSlider