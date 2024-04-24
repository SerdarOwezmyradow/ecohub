import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom'
import axiosInstance from '../axios';

function YashlarDetail() {
    const { t, i18n } = useTranslation();
    const { id } = useParams()
    const [cats, setCats] = useState(null)


    const baseUrl = `http://216.250.11.159/`
    const getCats = async () => {
        try {
            // isLoading(true)

            const response = await axiosInstance.get(`${baseUrl}api/category/${id}`);


            console.log('yaslar detail response', response.data);
            setCats(response?.data)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language])

    return (
        <div className='container'>
            <div className='flex items-center my-10 gap-3'>
                <NavLink to={`/`} className=' text-[#CFCFCF] cursor-pointer'>Baş sahypa</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                </svg>
                <NavLink to={`/yaslar/`} className=' text-[#CFCFCF] cursor-pointer'>Yaslar barada</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                </svg>
                <div className=' text-[#CFCFCF]'>category name</div>
            </div>
            <div className='w-1/2  mx-auto'>
                <div className='text-[30px] text-darkColor font-semibold my-10'>Category name</div>
                <div className='w-full flex flex-col gap-3'>
                    {cats?.length > 0 && cats?.map((cat) => {
                        return (
                            <>
                                <NavLink to={`/topic/${cat.id}`} className=' bg-[#FAFAFA] w-full cursor-pointer font-semibold p-3  mx-auto text-darkColor'>{cat?.title} </NavLink>
                            </>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default YashlarDetail