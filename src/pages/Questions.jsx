import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Divider from '../components/Divider'
import { useTranslation } from 'react-i18next';
import axiosInstance from '../axios';
import baseUrl from '../baseUrl';

function Questions() {
    const [cats, setCats] = useState(null)

    const { t, i18n } = useTranslation();

    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)

            const response = await axiosInstance.get(`${baseUrl}api/category/10`);


            console.log('questions response', response.data);
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
            <div className='w-8/12 mx-auto'>
                <div className='flex items-center my-10 gap-3'>
                    <NavLink to={`/`} className=' text-[#CFCFCF] hover:text-[#5E5E5E] cursor-pointer'>{t('key')}</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                    </svg>
                    {cats && cats?.length > 0 ?
                        < div className=' text-[#CFCFCF]'>{cats[0]?.category_name}</div>
                        :
                        <div className=' text-[#CFCFCF]'>{cats?.category_name}</div>

                    }
                </div>
                {cats && cats?.length > 0 ?
                    <h1 className="text-goldColor mb-10 font-semibold text-[30px]">
                        {cats && cats[0]?.category_name}
                    </h1>
                    :
                    <h1 className="text-goldColor mb-10 font-semibold text-[30px]">
                        {cats?.category_name}
                    </h1>

                }
            
                <div >
                    <ol class="list-decimal flex flex-col gap-2 list-inside">
                        {cats && cats?.length > 0 ?
                            cats?.map((cat) => {
                                return (
                                    <li className='pb-5 border-b border-b-[#E1E1E1]'>{cat?.title}</li>

                                )
                            }
                            )
                            :
                            <li className='pb-5 border-b border-b-[#E1E1E1]'>{cats?.title}</li>

                        }

                    </ol>
                </div>
                 {cats && cats?.length > 0 ?
                    <h1 className="text-goldColor mt-32 mb-20 font-semibold text-[30px]">
                        {cats[0]?.category_name}
                    </h1>
                    :
                    <h1 className="text-goldColor mt-32 mb-20 font-semibold text-[30px]">
                        {cats?.category_name}
                    </h1>

                }
                <div className='flex flex-col gap-5'>
                    <div className="flex gap-4">
                        <input type="text" placeholder='Ady Familýasy ' className='w-full  outline-none border-b py-3 border-b-[#CDCDCD]  ' />
                        <input type="text" placeholder='Email' className='w-full  outline-none border-b py-3 border-b-[#CDCDCD]  ' />

                    </div>
                    <div className="flex gap-4">
                        <input type="number" placeholder='Telefon belgisi ' className='w-full  outline-none border-b py-3 border-b-[#CDCDCD]  ' />
                        <input type="text" placeholder='Captca' className='w-full  outline-none border-b py-3 border-b-[#CDCDCD]  ' />

                    </div>
                    <input type="text" placeholder='Sorag' className='w-full  outline-none border-b py-3 border-b-[#CDCDCD]  ' />

                    <div className='flex mt-20 gap-5 '>
                        <Divider showleft={true} />
                        <NavLink to={`/news`} className='bg-goldColor px-5 p-3 text-white text-nowrap'>Ugrat</NavLink>
                        <Divider showright={true} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Questions