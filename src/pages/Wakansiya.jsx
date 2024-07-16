import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom'
import axiosInstance from '../axios';
import baseUrl from '../baseUrl';

function Wakansiya() {
    const [cats, setCats] = useState(null)

    const { t, i18n } = useTranslation();
    const { id } = useParams()

    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)

            const response = await axiosInstance.get(`${baseUrl}api/category/9`);


            console.log('news response', response.data);
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
        <div className='container mb-20'>
            <div className='flex items-center my-10 gap-3'>
                <NavLink to={`/`} className=' text-[#CFCFCF] hover:text-[#5E5E5E] cursor-pointer'>{t('key')}</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                </svg>
                <div className=' text-[#CFCFCF]'>{cats && cats[0]?.category_name}</div>
            </div>
            <div className="w-1/2 mx-auto">
                <div className='text-[30px] my-10'>{cats && cats[0]?.category_name}</div>
                <div className="flex flex-col gap-3">
                    {cats && cats?.map((cat) => {
                        return (
                            <>
                                <NavLink className={`flex group bg-[#FAFAFA] p-3 justify-between items-center`} to={`/vacansy/${cat?.id}`}>

                                    <div className='w-full  cursor-pointer  flex flex-col gap-3 mx-auto text-darkColor font-semibold'>
                                        <div className='group-hover:text-goldColor'>{cat?.title}</div>
                                        <span className='text-[#CFCFCF] text-sm'>{cat?.date}</span>
                                    </div>
                                    <div className='invisible group-hover:visible'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                            <path d="M1.42857 0.999893L10 9.99989L1.42857 18.9999" stroke="#D3AA65" stroke-width="2.5" />
                                        </svg>
                                    </div>
                                </NavLink>
                            </>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default Wakansiya