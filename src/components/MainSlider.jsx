import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Install Swiper modules
import image from '../images/ashgabat.png'
import Divider from './Divider';
function MainSlider() {
    // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return (
        <div className='relative w-[95vw] flex mx-auto'>
            <div className='container mx-auto  pt-10'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    // navigation
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
                    }}
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

export default MainSlider