import React, { useEffect, useState } from 'react'
// import Divider from './Divider'
import image from '../images/news.png'
import Divider from '../components/Divider'
import Product from '../components/Product'
import { NavLink, Route, useParams } from 'react-router-dom'
import axiosInstance from '../axios'
import { useTranslation } from 'react-i18next'

// import Product from './Product'
function NewsPage() {

    const { t, i18n } = useTranslation();
    const { id } = useParams()
    const [cats, setCats] = useState(null)


    const baseUrl = `http://216.250.11.159/`
    const getCats = async () => {
        try {
            // isLoading(true)
            let response
            if (id) {
                response = await axiosInstance.get(`${baseUrl}api/category/${id}`);
            } else {
                response = await axiosInstance.get(`${baseUrl}api/category/3`);
            }

            console.log('news response', response.data[0]);
            setCats(response?.data)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language, id])

    return (
        <div>
            <div className='container '>
                <div className='flex items-center my-10 gap-3'>
                    <NavLink to={`/`} className=' text-[#CFCFCF] cursor-pointer'>Baş sahypa</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                    </svg>
                    {id ?
                        <NavLink to={'/news'} className=' text-[#CFCFCF]'>Habarlar</NavLink>
                        :
                        <div className=' text-[#CFCFCF]'>Habarlar</div>
                    }
                    {id && cats &&
                        <div className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                            </svg>
                            <div className=' text-[#CFCFCF]'>{cats[0]?.category_name}</div>

                        </div>
                    }
                </div>
                <div className='flex justify-center items-end w-full '>
                    {id && cats ?
                        <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>{cats[0]?.category_name}</div>
                        :
                        <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>Tazelikler</div>

                    }
                    <Divider className='w-3/4' showright={true} />
                </div>

                {/* <div className='flex aspect-[9/4] p-0  w-full mt-10 items-center'>
                    <div className='w-1/3 pe-3 snap-mandatory snap-y  snap-y overflow-y-scroll h-full'>
                        <div className='h-1/4 border-b snap-start relative w-full'>
                            <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                            <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                                01.02.24
                            </div>
                        </div>
                        <div className='h-1/4 border-b snap-start relative w-full'>
                            <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                            <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                                01.02.24
                            </div>
                        </div>
                        <div className='h-1/4 border-b snap-start relative w-full'>
                            <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                            <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                                01.02.24
                            </div>
                        </div>
                        <div className='h-1/4 border-b snap-start relative w-full'>
                            <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                            <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                                01.02.24
                            </div>
                        </div>
                        <div className='h-1/4 border-b snap-start relative w-full'>
                            <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                            <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                                01.02.24
                            </div>
                        </div>
                        <div className='h-1/4 border-b snap-start relative w-full'>
                            <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                            <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                                01.02.24
                            </div>
                        </div>
                        <div className='h-1/4 border-b snap-start relative w-full'>
                            <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                            <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                                01.02.24
                            </div>
                        </div>

                    </div>
                    <div className='w-2/3 h-full parent_image overflow-hidden relative '>
                        <img src={image} className='w-full imageee transition duration-150 ease-in-out hover:scale-300 h-full object-cover' alt="" />
                        <div className="absolute parent_image  inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                        <div className='absolute bottom-3 left-3 bg-black text-white p-5 w-1/2 bg-opacity-75 '>
                            Bilim ulgamynyň kanunçylyk binýady  –  <br /> Ýaş nesliň üstünlikli ösmeginiň girewi
                        </div>
                    </div>

                </div> */}
                {cats?.length > 0 ?
                    <div className="grid grid-cols-4 mt-5 gap-3">

                        {cats?.map((cat) => {
                            return (
                                <>
                                    <NavLink to={`/topic/${cat.id}`} key={cat.id}>

                                        {/* <div>{cat?.title}</div> */}
                                        <Product id={cat.id} image={`${baseUrl}/storage/upload/post/images/${cat?.image}`} title={cat.title} date={cat.date} />
                                    </NavLink>
                                </>
                            )
                        })}
                    </div>
                    :
                    <div className='flex justify-center items-center flex-col'>
                        <div className='mt-20 font-semibold text-center'>No topics found</div>
                        <NavLink to={'/news'} className='text-center mt-10 text-white bg-primaryColor px-4 py-2 '>All news</NavLink>
                    </div>
                }

                {/* {JSON.stringify(cats)} */}

                {/* <div className='flex mt-20 gap-5 '>
                    <Divider showleft={true} />
                    <button className='bg-goldColor px-5 p-3 text-white text-nowrap'>Doly Gör</button>
                    <Divider showright={true} />
                </div> */}
            </div>
        </div>
    )
}

export default NewsPage