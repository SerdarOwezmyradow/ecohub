import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Install Swiper modules
import image from '../images/ashgabat.png'
import Divider from './Divider';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import baseUrl from '../baseUrl';
import LazyImage from './LazyImage';


function MainSlider() {
    // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    const { t, i18n } = useTranslation();
    const { id } = useParams()
    const [cats, setCats] = useState(null)


    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)

            const response = await axiosInstance.get(`${baseUrl}api/home`);


            console.log('banners response', response.data.banners);
            setCats(response?.data?.banners)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language, id])

    return (
        <div className='  mx-auto'>
            <div className='max-w-[1900px] flex justify-center items-center mx-auto  pt-10'>
                <button className="custom-prev-button w-[5vw] flex mx-auto justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
                <Swiper
                    className='container'
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
                    {cats?.map((cat) => {
                        return (
                            <>
                                <SwiperSlide className=''>
                                    <div className='flex w-full p-4 aspect-[9/4] bg-[#F8F8F8]'>
                                        <div className='w-1/2 relative pe-5'>

                                            <div className='text-goldColor w-3/4  font-semibold text-[30px] capitalize ' dangerouslySetInnerHTML={{ __html: cat?.content }}>
                                          
                                            </div>
                                            <div className='absolute bottom-4 flex items-end gap-5  right-5 left-0'>
                                                <div className='wrap w-1/3 text-goldColor font-semibold text-xl'>{cat?.title}</div>
                                                <Divider showright={true} />
                                            </div>
                                        </div>

                                        <div className='w-1/2 h-full'>
                                            {/* <img src={`${baseUrl}/storage/upload/banner/${cat?.photo}`} className='object-cover w-full h-full' alt="" /> */}
                                            <LazyImage src={`${baseUrl}/storage/upload/banner/${cat?.photo}`} className='object-cover w-full h-full' alt={cat?.title}/>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </>
                        )
                    })}


                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}

                </Swiper>
                <button className="custom-next-button flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
            </div>

        </div>

    )
}

export default MainSlider