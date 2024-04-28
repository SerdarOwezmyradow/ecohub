import React, { useEffect, useState } from 'react'
import Divider from './Divider'
import image from '../images/gallery.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axiosInstance from '../axios';
import baseUrl from '../baseUrl';

function Multimedia() {

    const [cats, setCats] = useState(null)
    const [showLightBox, setShowLightBox] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)

    useEffect(() => {
        if (showLightBox) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            document.body.style.height = '100vh'; // Prevent scrolling
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling
        }

        return () => {
            document.body.style.overflow = ''; // Re-enable scrolling on component unmount
        };
    }, [showLightBox]);

    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)

            const response = await axiosInstance.get(`${baseUrl}api/home`);


            console.log('gallery response', response?.data?.galleries);
            setCats(response?.data?.galleries)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [])

    const OpenImage = (index) => {
        setShowLightBox(true)
        setSelectedImage(index)
    }

    const goToPrevious = () => {
        setSelectedImage((prevIndex) => (prevIndex === 0 ? cats?.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setSelectedImage((prevIndex) => (prevIndex === cats?.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className=''>

            <div className='container mt-20'>
                <div className='flex justify-center items-end w-full '>
                    <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>Galereýa</div>
                    <Divider className='w-3/4' showright={true} />
                </div>


            </div>
            <div className="flex justify-between max-w-[1900px] mx-auto  items-center">
                <button className="custom-prev-buttone w-[5vw] flex mx-auto justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
                <Swiper
                    spaceBetween={10}
                    className='container'
                    navigation={{
                        prevEl: '.custom-prev-buttone',
                        nextEl: '.custom-next-buttone',
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                // navigation
                >
                    {cats?.map((cat, index) => {
                        return (
                            <SwiperSlide className='mt-10 cursor-pointer'>
                                <div className='w-full aspect-[4/3]'>
                                    <img onClick={() => OpenImage(index)} src={`${baseUrl}/storage/upload/gallery/images/${cat?.photo}`} className='w-full h-full object-cover' alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}

                </Swiper>

                <div className={` ${showLightBox ? '' : 'hidden'} fixed  z-30 inset-0 bg-black bg-opacity-70`}>
                    <div className="">

                        {/* <div className="relative"> */}
                        <div className="absolute text-white top-5 left-5 ">
                            {selectedImage + 1}/{cats?.length}
                        </div>
                        <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setShowLightBox(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M16.3577 14.8033C16.4451 14.8846 16.5151 14.9828 16.5637 15.0918C16.6123 15.2009 16.6384 15.3186 16.6405 15.438C16.6426 15.5573 16.6207 15.6759 16.5759 15.7865C16.5312 15.8972 16.4647 15.9977 16.3803 16.0821C16.2959 16.1665 16.1953 16.2331 16.0846 16.2778C15.974 16.3225 15.8554 16.3445 15.7361 16.3424C15.6167 16.3403 15.499 16.3142 15.39 16.2656C15.2809 16.217 15.1828 16.147 15.1014 16.0596L8.61845 9.5778L2.13548 16.0596C1.96698 16.2166 1.74411 16.3021 1.51383 16.298C1.28355 16.294 1.06382 16.2006 0.900963 16.0378C0.738103 15.8749 0.644827 15.6552 0.640763 15.4249C0.6367 15.1947 0.722176 14.9718 0.87919 14.8033L7.36097 8.32036L0.87919 1.83745C0.722176 1.66895 0.6367 1.44607 0.640763 1.21578C0.644827 0.985502 0.738103 0.765798 0.900963 0.602939C1.06382 0.44008 1.28355 0.346731 1.51383 0.342668C1.74411 0.338605 1.96698 0.42408 2.13548 0.581093L8.61845 7.06291L15.1014 0.581093C15.2699 0.42408 15.4928 0.338605 15.7231 0.342668C15.9534 0.346731 16.1731 0.44008 16.3359 0.602939C16.4988 0.765798 16.5921 0.985502 16.5961 1.21578C16.6002 1.44607 16.5147 1.66895 16.3577 1.83745L9.87594 8.32036L16.3577 14.8033Z" fill="white"></path></svg>
                        </div>
                        {cats && cats[selectedImage]?.photo  &&
                            <div className="flex justify-between gap-2  items-center mx-5 h-[100vh]">
                                <svg onClick={() => goToPrevious()} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                                    <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="white" stroke-width="1.5" />
                                </svg>
                                <img className=' w-3/4 ' src={`${baseUrl}/storage/upload/gallery/images/${cats[selectedImage]?.photo}`} alt="" />
                                <svg onClick={() => goToNext()} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                                    <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="white" stroke-width="1.5" />
                                </svg>
                            </div>
                        }
                    </div>
                    {/* </div> */}
                </div>
                <button className="custom-next-buttone flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default Multimedia