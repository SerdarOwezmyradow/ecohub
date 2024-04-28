import React, { useEffect, useState } from 'react'
import SingleNewsletter from './SingleNewsletter'
import { NavLink, useParams } from 'react-router-dom'
import axiosInstance from '../axios';
import { useTranslation } from 'react-i18next';
import baseUrl from '../baseUrl';

function Newsletters() {
    const { t, i18n } = useTranslation();
    const { id } = useParams()
    const [cats, setCats] = useState(null)


    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)

            const response = await axiosInstance.get(`${baseUrl}api/home`);


            console.log('newsletter response', response?.data?.newsletters);
            setCats(response?.data?.newsletters)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language, id])
    return (
        <div className='container mt-20'>
            <div className="flex font-semibold items-center justify-between w-full">
                <div className='font-semibold text-darkColor text-[30px]'>Makalalar</div>
                <div className='flex text-[#BEBEBE] cursor-pointer items-center gap-2'>
                    <NavLink to={'/newsletter'} className='p-0 text-sm '>Doly gör</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 10" fill="none">
                        <path d="M1 1L4 5L1 9" stroke="#C5C5C5" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div className="grid mt-5 grid-cols-3 gap-4">
                {cats?.map((cat) => {
                    return (
                        <NavLink to={`/topic/${cat.id}`}>

                            <SingleNewsletter date={cat?.date} title={cat?.title} content={cat?.content} />
                        </NavLink>
                    )
                })}

            </div>
        </div>
    )
}

export default Newsletters