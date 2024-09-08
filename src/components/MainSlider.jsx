import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import image from '../images/ashgabat.png';
import Divider from './Divider';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import baseUrl from '../baseUrl';
import LazyImage from './LazyImage';

function MainSlider() {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const [cats, setCats] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    const getCats = async () => {
        try {
            setisLoading(true);
            const response = await axiosInstance.get(`${baseUrl}api/home`);
            setCats(response?.data?.banners);
            setisLoading(false);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        getCats();
    }, [i18n.language, id]);

    // Animation variants for scrolling from bottom to top
    const slideVariant = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className='mx-auto'>
            <div className='max-w-[1900px] flex justify-center items-center mx-auto pt-10'>
                <button className="custom-prev-button w-[5vw] flex mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" strokeWidth="1.5" />
                    </svg>
                </button>

                <Swiper
                    className='container'
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
                    }}
                >
                    {!isLoading ?
                        cats?.map((cat) => (
                            <SwiperSlide key={cat.id} className=''>
                                <motion.div
                                    className='flex w-full  aspect-[9/4] bg-[#F8F8F8]'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={slideVariant}
                                >
                                    <div className='w-full h-full'>
                                        <LazyImage src={`${baseUrl}/storage/upload/banner/${cat?.photo}`} className='object-cover w-full h-full' alt={cat?.title} />
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))
                        : <div className='bg-slate-200 animate-pulse w-full p-4 aspect-[9/4]'></div>}
                </Swiper>

                <button className="custom-next-button flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" strokeWidth="1.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default MainSlider;
