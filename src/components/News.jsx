import React, { useEffect, useState } from 'react'
import Divider from './Divider'
import image from '../images/news.png'
import Product from './Product'
import { NavLink } from 'react-router-dom'
import axiosInstance from '../axios'
import { useTranslation } from 'react-i18next'
import baseUrl from '../baseUrl'

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
                <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>Täzelikler</div>
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
                <div className='w-2/3 parent_image h-full overflow-hidden relative '>
                    <NavLink to={`/topic/${cats?.posts[post]?.id}`}>
                        <img src={`${baseUrl}/storage/upload/post/images/${cats?.posts[post]?.image}`} className='w-full imageee transition-transform duration-300 transform hover:scale-110  h-full object-cover' alt="" />
                        <div className="absolute parent_image inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
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
                            < Product id={cat.id} image={`${baseUrl}/storage/upload/post/images/${cat?.image}`} title={cat.title} date={cat.date} />
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