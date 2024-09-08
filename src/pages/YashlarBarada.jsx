import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom'
import axiosInstance from '../axios';
import baseUrl from '../baseUrl';

function YashlarBarada() {

    const { t, i18n } = useTranslation();
    const { id } = useParams()
    const [cats, setCats] = useState(null)


    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)

            const response = await axiosInstance.get(`${baseUrl}api/category/4/children`);


            console.log('yaslar response', response.data);
            setCats(response?.data.data)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language])


    return (
        <div>
            <div className="container mb-20">
                <div className='flex items-center my-10 gap-3'>
                    <NavLink to={`/`} className=' hover:text-[#5E5E5E] text-[#CFCFCF] cursor-pointer'>{t('key')}</NavLink>
                    {cats &&
                        <div className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                            </svg>
                            <div className=' text-[#CFCFCF]'>{cats[0]?.category_name}</div>

                        </div>
                    }
                </div>
                <div className='text-[40px] font-[500] my-10 w-1/3'>
                    {cats && cats[0]?.category_name}
                </div>
                <div className=" grid h-max flex items-center justify-center  grid-cols-5 gap-3">
                    {cats && cats?.map((cat) => {
                        return (
                            <NavLink to={`/yaslar/${cat?.id}`} className='bg-[#fafafa] grow mx-auto shrink cursor-pointer w-full h-full aspect-[1/1]  flex justify-between flex-col text-black font-[500] aspect-video'>
                                <img src={`${baseUrl}/storage/upload/category/images/${cat?.image}`} className='w-[70%] mx-auto' alt="" />
                                <div className='w-full px-5 pb-3 text-[16px]'>
                                    {cat?.label}
                                </div>
                            </NavLink>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default YashlarBarada