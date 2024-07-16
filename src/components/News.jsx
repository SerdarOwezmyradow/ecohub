import React, { useEffect, useState } from 'react'
import Divider from './Divider'
import image from '../images/news.png'
import Product from './Product'
import { NavLink } from 'react-router-dom'
import axiosInstance from '../axios'
import { useTranslation } from 'react-i18next'
import baseUrl from '../baseUrl'
import LazyImage from './LazyImage'

function News() {

    const { t, i18n } = useTranslation();

    const [cats, setCats] = useState(null)
    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)
            const response = await axiosInstance.get(`${baseUrl}api/home`);
            console.log('news response', response.data.posts[1]);
            setCats(response?.data)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language])

    const [post, setPost] = useState(0)


    // const [currentState, setCurrentState] = useState('initial state');

    useEffect(() => {
        const timer = setTimeout(() => {
            // Change the state after 1 second
            setPost((prevIndex) => (prevIndex === cats?.posts.slice(0, 4)?.length - 1 ? 0 : prevIndex + 1))
        }, 10000);

        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, [post]);

    return (
        <div className='container  mt-20'>
            <div className='flex justify-center items-end w-full '>
                <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>{t('news')}</div>
                <Divider className='w-3/4' showright={true} />
            </div>

            <div className='flex aspect-[9/4] p-0  w-full mt-10 items-center'>
                <div className='w-1/3 pe-3 snap-mandatory snap-y  snap-y overflow-y-scroll h-full'>
                    {cats?.posts?.slice(0, 4)?.map((cat, index) => {
                        return (

                            <div value={index} onClick={() => setPost(index)} className='h-1/4 cursor-pointer text-md xl:text-xl border-b snap-start relative w-full'>
                                <div className={`font-[500] line-clamp-2 text-md ${index === post && 'text-goldColor'}`}>{cat?.title}</div>
                                <div className="absolute font-[500] bottom-2 text-goldColor left-0">
                                    {cat?.date}
                                </div>
                            </div>
                        )
                    })}




                </div>
                <div className='w-2/3 parent_image h-full flex justify-center items-center bg-[#E1E1E1] overflow-hidden relative '>
                    <NavLink to={`/topic/${cats?.posts[post]?.id}`}>
                        {cats?.posts[post]?.image ?
                            <LazyImage src={`${baseUrl}/storage/upload/post/images/${cats?.posts[post]?.image}`} className='w-full imageee transition-transform duration-300 transform hover:scale-110  h-full object-cover' alt={cats?.posts[post]?.title} />

                            // <img  alt="" />
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110" fill="none">
                                <path d="M0.0459327 55.0322C0.0459327 46.8658 -0.00229046 38.6959 0.0459327 30.5294C0.0872669 24.8233 1.26184 19.3445 4.06568 14.3344C8.56421 6.27128 15.7219 2.08814 24.6122 0.599567C26.8585 0.22715 29.1313 0.0381533 31.4082 0.0344576C47.354 -0.0114859 63.2975 -0.0114859 79.2388 0.0344576C84.6776 0.0344576 89.9168 1.09232 94.7907 3.59738C103.385 8.0114 107.849 15.3543 109.409 24.651C109.778 26.8533 109.964 29.0822 109.967 31.3151C110.011 47.3057 110.011 63.2963 109.967 79.2869C110.007 84.022 109.069 88.7143 107.212 93.07C103.054 102.622 95.4693 107.673 85.4561 109.399C83.2117 109.778 80.9396 109.968 78.6635 109.968C62.4158 110.006 46.1714 110.027 29.9271 109.934C24.4833 109.965 19.1234 108.592 14.3648 105.947C5.74661 101.085 1.54429 93.356 0.362822 83.7699C0.106617 81.3344 -0.00839295 78.8861 0.0183707 76.4373C-0.0229634 69.3046 0.0183707 62.1684 0.0183707 55.0322H0.0459327ZM101.773 58.3195V56.7276C101.773 48.6472 101.79 40.5635 101.773 32.4797C101.787 30.5887 101.679 28.6988 101.449 26.8218C100.371 18.9276 96.6852 12.9182 88.9419 9.96859C85.7901 8.8025 82.4509 8.22552 79.0906 8.26638C63.1425 8.2526 47.1944 8.2526 31.2463 8.26638C29.7483 8.26825 28.2521 8.373 26.7685 8.57994C19.1905 9.65501 13.3142 13.1077 10.2624 20.4506C9.03733 23.3499 8.39364 26.4618 8.36787 29.6094C8.30242 44.3159 8.30588 59.019 8.29555 73.7151C8.29555 75.9928 8.2611 78.2773 8.38166 80.5515C8.49972 83.4126 9.11998 86.2305 10.2141 88.8765L11.7986 87.8186L30.5264 75.2451C31.9271 74.277 33.5128 73.6092 35.1838 73.2837C36.8548 72.9581 38.5751 72.9819 40.2365 73.3533C42.8199 73.8771 44.8418 75.3863 46.7811 77.0713C48.6423 78.7576 50.9931 79.8055 53.491 80.0622C55.222 80.2721 56.9778 80.1099 58.6411 79.5863C60.3043 79.0628 61.8367 78.1901 63.1356 77.0265C70.3243 70.8242 77.5716 64.6735 84.7397 58.4401C87.4712 56.0625 90.5299 54.7979 94.1569 55.0219C96.9367 55.1838 99.3892 56.2245 101.773 58.3195Z" fill="#D1D1D1" />
                                <path d="M38.5385 46.049C35.9561 46.0455 33.4325 45.277 31.2862 43.8403C29.14 42.4037 27.4672 40.3632 26.4789 37.9765C25.4907 35.5897 25.2313 32.9637 25.7334 30.4296C26.2356 27.8955 27.4768 25.567 29.3005 23.7379C31.1241 21.9088 33.4485 20.661 35.9803 20.152C38.5122 19.643 41.138 19.8956 43.5264 20.8779C45.9149 21.8603 47.959 23.5283 49.4008 25.6715C50.8426 27.8148 51.6175 30.3372 51.6277 32.9206C51.6322 34.643 51.297 36.3494 50.6412 37.942C49.9855 39.5346 49.022 40.9821 47.8062 42.2017C46.5903 43.4212 45.1458 44.3888 43.5555 45.049C41.9652 45.7091 40.2603 46.049 38.5385 46.049Z" fill="#D1D1D1" />
                            </svg>
                        }
                        <div className={` ${cats?.posts[post]?.image ? '' : 'hidden'} absolute parent_image inset-0 bg-gradient-to-t from-black to-transparent opacity-50`}></div>
                        <div className='absolute bottom-3 xl:text-xl left-3 bg-black text-white p-5 w-1/2 bg-opacity-75 '>
                            {cats?.posts[post]?.title}
                        </div>
                    </NavLink>
                </div>

            </div>

            <div className="grid grid-cols-3 mt-5 gap-3">
                {cats?.posts?.slice(4, 7).map((cat) => {
                    return (
                        <NavLink to={`/topic/${cat.id}`} key={cat.id}>
                            < Product imageId={cat?.image} id={cat.id} image={`${baseUrl}/storage/upload/post/images/${cat?.image}`} title={cat.title} date={cat.date} />
                        </NavLink>
                    )
                })}
            </div>

            <div className='flex mt-20 gap-5 '>
                <Divider showleft={true} />
                <NavLink to={`/news`} className='bg-goldColor px-5 p-3 text-white text-nowrap'>Doly Gör</NavLink>
                <Divider showright={true} />
            </div>
        </div>
    )
}

export default News