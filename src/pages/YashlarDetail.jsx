import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom'
import axiosInstance from '../axios';
import baseUrl from '../baseUrl';

function YashlarDetail() {
    const { t, i18n } = useTranslation();
    const { id } = useParams()
    const [cats, setCats] = useState(null)


    // const baseUrl = `http://216.250.11.159:8080/`
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
                <NavLink to={`/`} className=' text-[#CFCFCF] hover:text-[#5E5E5E] cursor-pointer'>{t('key')}</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                </svg>
                <NavLink to={`/yaslar/`} className=' text-[#CFCFCF] hover:text-[#5E5E5E] cursor-pointer'>{cats && cats[0]?.category_category_name}</NavLink>
                {id && cats &&
                    <div className='flex items-center  gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                            <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                        </svg>
                        <div className='  text-[#CFCFCF]'>{cats[0]?.category_name}</div>

                    </div>
                }
                {/* <div className=' text-[#CFCFCF]'>{cats[0]?.category_name}</div> */}
            </div>
            <div className='w-1/2  mx-auto'>
                <div className='text-[30px] text-darkColor font-[500] my-10'>
                    {cats && cats[0]?.category_name}</div>
                <div className='w-full flex flex-col gap-3'>
                    {cats?.length > 0 && cats?.map((cat) => {
                        return (
                            <>
                                <NavLink to={`/topic/${cat.id}`} className=' bg-[#FAFAFA] w-full hover:text-goldColor cursor-pointer font-[500] p-3  mx-auto text-darkColor'>{cat?.title} </NavLink>
                            </>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default YashlarDetail