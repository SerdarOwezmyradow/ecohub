import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import image from '../images/fairytale.png'
import image1 from '../images/book.png'
import { useTranslation } from 'react-i18next';
import baseUrl from '../baseUrl';
import axiosInstance from '../axios';

function Library() {
    const { t, i18n } = useTranslation();
    const [cats, setCats] = useState(null)

    const getCats = async () => {
        try {
            // isLoading(true)
            const response = await axiosInstance.get(`${baseUrl}api/multimedia/40`);

            console.log('library ', response.data);
            setCats(response?.data)
            // isLoading(false)]

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    useEffect(() => {
        getCats()
    }, [i18n.language])
    return (
        <div className='overflow-x-hidden mb-20 font-semibold'>
            <div className='flex container items-center my-10 gap-3'>
                <NavLink to={`/`} className=' text-[#CFCFCF] hover:text-[#5E5E5E] cursor-pointer'>{t('key')}</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                </svg>
                <div className=' text-[#CFCFCF]'>{t('library')}</div>
            </div>
            <div className='text-[25px] container'>Öňe Çykanlar</div>
            <div className='flex items-center w-[100vw] justify-center '>
                <button className="custom-prev-button w-[5vw] flex mx-auto justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
                <Swiper
                    className='container'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={6}
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
                    }}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                // navigation
                >
                    <SwiperSlide className='mt-5 cursor-pointer'>
                        <div className='w-full aspect-3/2'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>
                        <div className='w-full aspect-3/2'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>
                        <div className='w-full aspect-3/2'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>
                        <div className='w-full aspect-3/2'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>
                        <div className='w-full aspect-3/2'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>
                        <div className='w-full aspect-3/2'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>
                        <div className='w-full aspect-3/2'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>
                        <div className='w-full aspect-3/2'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}
                    {/* <div className="flex justify-between absolute left-0 right-0 z-20 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center"> */}



                    {/* </div> */}
                </Swiper>
                <button className="custom-next-button flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
            </div>

            <div className='flex w-full container mt-20 p-4 aspect-[7/3] bg-[#F8F8F8]'>
                <div className='w-1/2 relative pe-5'>

                    <div className='text-goldColor w-3/4  font-semibold text-[30px] capitalize '>
                        Kitap ýa-da öwrenmek barada ýazyjylaryň aýdyp geçen sözleri
                    </div>
                    <div className='absolute bottom-4 flex items-end gap-5  right-5 left-0'>
                        <div className='wrap w-1/3 text-[#BABABA] font-semibold text-xl'>Ady <br /> Familýasy</div>
                        {/* <Divider showright={true} /> */}
                    </div>
                </div>

                <div className='w-1/2 bg-[#EEDDBF] h-full'>
                    {/* <img src={image} className='object-cover w-full h-full' alt="" /> */}
                </div>
            </div>
            <div className="flex container mt-20 cursor-pointer items-center justify-between">
                <div className=' text-[25px] container'>Öňe Çykanlar</div>
                <div className='flex items-center gap-2'>
                    <span className='text-nowrap text-[#BEBEBE]'>Doly gör</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                        <path d="M1 1L4 5L1 9" stroke="#C5C5C5" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div className='flex items-center mt-10 w-[100vw] justify-center '>
                <button className="custom-prev-buttons w-[5vw] flex mx-auto justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
                <Swiper
                    className='container'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={6}
                    navigation={{
                        prevEl: '.custom-prev-buttons',
                        nextEl: '.custom-next-buttons',
                    }}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                // navigation
                >
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Elektrotehnikanyň Esaslary
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Ýokary Matematika
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Elektrotehnikanyň Esaslary
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Ýokary Matematika
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Elektrotehnikanyň Esaslary
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Ýokary Matematika
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Ýokary Matematika
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}
                    {/* <div className="flex justify-between absolute left-0 right-0 z-20 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center"> */}



                    {/* </div> */}
                </Swiper>
                <button className="custom-next-buttons flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
            </div>
            <div className="flex container mt-20 cursor-pointer items-center justify-between">
                <div className=' text-[25px] container'>Çeper Eserler</div>
                <div className='flex items-center gap-2'>
                    <span className='text-nowrap text-[#BEBEBE]'>Doly gör</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                        <path d="M1 1L4 5L1 9" stroke="#C5C5C5" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div className='flex items-center mt-10 w-[100vw] justify-center '>
                <button className="custom-prev-buttonss w-[5vw] flex mx-auto justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
                <Swiper
                    className='container'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={6}
                    navigation={{
                        prevEl: '.custom-prev-buttonss',
                        nextEl: '.custom-next-buttonss',
                    }}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                // navigation
                >
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Elektrotehnikanyň Esaslary
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Ýokary Matematika
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Elektrotehnikanyň Esaslary
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Ýokary Matematika
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Elektrotehnikanyň Esaslary
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Ýokary Matematika
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-5 cursor-pointer'>

                        <div className='w-full aspect-3/2'>
                            <img src={image1} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full text-darkColor '>
                            Ýokary Matematika
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}
                    {/* <div className="flex justify-between absolute left-0 right-0 z-20 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center"> */}



                    {/* </div> */}
                </Swiper>
                <button className="custom-next-buttonss flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
            </div>

            <div className='container mt-20 pt-10 grid grid-cols-2 gap-3'>
                <div className='bg-[#FFF4E1] cursor-pointer w-full aspect-[7/5] flex items-start p-5 text-goldColor font-semibold aspect-video'>
                    <div className='w-1/2  text-[30px]'>
                        Çeper Eserler
                    </div>
                </div>
                <div className='bg-[#FFF4E1] cursor-pointer w-full aspect-[7/5] flex items-start p-5 text-goldColor font-semibold aspect-video'>
                    <div className='w-1/2  text-[30px]'>
                        Syýasat
                    </div>
                </div>
                <div className='bg-[#FFF4E1] cursor-pointer w-full aspect-[7/5] flex items-start p-5 text-goldColor font-semibold aspect-video'>
                    <div className='w-1/2  text-[30px]'>
                        Žurnallar
                    </div>
                </div>
                <div className='bg-[#FFF4E1] cursor-pointer w-full aspect-[7/5] flex items-start p-5 text-goldColor font-semibold aspect-video'>
                    <div className='w-1/2  text-[30px]'>
                        Gazetler
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Library