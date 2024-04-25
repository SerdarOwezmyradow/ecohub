import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import Divider from '../components/Divider'
import axiosInstance from '../axios'
import { useTranslation } from 'react-i18next'

function TopicDetail(props) {

    const { id } = useParams()
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [cats, setCats] = useState(null)
    const baseUrl = `http://216.250.11.159/`
    const getCats = async () => {
        try {
            // isLoading(true)
            let response
            if (location.pathname.split('/')[1] === 'topics') {
                response = await axiosInstance.get(`${baseUrl}api/category/${id}`);
            } else {
                response = await axiosInstance.get(`${baseUrl}api/post/${id}`);
            }
            console.log('topic response', response.data);
            setCats(response?.data)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language,location.pathname])


    return (
        <div className='container'>

            {/* <div className="flex"> */}
            <div className='w-8/12 mx-auto'>
                <div className='flex items-center my-10 gap-3'>
                    <NavLink to={`/`} className=' text-[#CFCFCF] text-nowrap cursor-pointer'>Baş sahypa</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                    </svg>
                    <div className=' text-[#CFCFCF]'>{cats?.title}</div>
                </div>

                <div className=' flex items-start gap-5  right-5 left-0'>
                    <div className='wrap w-3/5 text-goldColor font-semibold text-[25px]'>{cats?.category_name}</div>
                    <Divider showright={true} className='mt-5' />

                </div>
                <div className='wrap w-4/5 text-goldColor mt-5 font-semibold text-[30px]'>{cats?.title}</div>

                <div className="flex my-10 items-center gap-10 text-[#CFCFCF]">
                    {cats?.date &&
                        <span>
                            {cats?.date}
                        </span>
                    }
                    <span className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                            <path d="M0 6.15457V5.84646C2.33242 2.05461 5.84227 0.000513619 10.5 9.6238e-08C15.1577 -0.000513426 18.6681 2.05409 21 5.84646V6.15457C18.6681 9.94642 15.1583 12.0015 10.5 12C5.84172 11.9985 2.33187 9.94694 0 6.15457ZM6.30383 5.99384C6.30102 6.77343 6.54454 7.53628 7.0036 8.18586C7.46265 8.83544 8.1166 9.34255 8.88268 9.64302C9.64876 9.94349 10.4926 10.0238 11.3073 9.87384C12.122 9.72385 12.871 9.3503 13.4596 8.80045C14.0481 8.2506 14.4497 7.54916 14.6136 6.7849C14.7775 6.02065 14.6962 5.22792 14.3801 4.50704C14.064 3.78616 13.5273 3.16952 12.8379 2.73517C12.1485 2.30081 11.3373 2.06825 10.5071 2.06693C9.95642 2.06524 9.41077 2.16552 8.90139 2.36202C8.392 2.55852 7.92887 2.84739 7.53848 3.21211C7.14809 3.57683 6.8381 4.01025 6.62625 4.48756C6.41439 4.96488 6.30483 5.47673 6.30383 5.99384Z" fill="#CFCFCF" />
                            <path d="M10.5071 3.37795C11.0593 3.38019 11.5983 3.53607 12.0562 3.82589C12.5141 4.11571 12.8701 4.52647 13.0795 5.00626C13.2888 5.48605 13.342 6.01334 13.2323 6.5215C13.1226 7.02966 12.8549 7.49589 12.4632 7.86126C12.0714 8.22663 11.5731 8.47476 11.0312 8.57428C10.4893 8.67381 9.9281 8.62027 9.4186 8.42042C8.90909 8.22057 8.4741 7.88339 8.16859 7.45149C7.86309 7.01958 7.70079 6.51233 7.70219 5.99384C7.70196 5.64874 7.7745 5.30702 7.91562 4.98837C8.05673 4.66973 8.26364 4.38047 8.5244 4.13729C8.78515 3.8941 9.09461 3.7018 9.43491 3.57148C9.7752 3.44115 10.1396 3.37538 10.5071 3.37795Z" fill="#CFCFCF" />
                        </svg>
                        <span>{cats?.sees}</span>
                    </span>
                </div>
                {/* <div className='text-goldColor text-[30px]'>
                    Türkmenistanyň kanuny
                </div> */}
                <div className=' mt-5 innerHtml' dangerouslySetInnerHTML={{ __html: cats?.content }}>

                </div>
                {/* <div className=' mt-5'>
                    <span className='font-bold text-[#000]'>
                        Ýaşlar
                    </span>
                    - Türkmenistanyň 14 ýaşdan 35 ýaşa çenli ýaşdaky raýatlary.
                </div> */}
                {/* {cats?.image &&
                    <div className='w-full aspect-video overflow-hidden bg-[#D9D9D9] my-5'>
                        <img className='w-full h-full' src={`${baseUrl}/storage/upload/post/images/${cats?.image}`} alt="" />
                    </div>
                } */}
                {/* <div className=''>
                    «Ýaşlar barada döwlet syýasaty hakynda» Türkmenistanyň kanuny ýaşlar barada döwlet syýasatynyň maksatlaryny, wezipelerini, ýörelgelerini we esasy ugurlaryny kesgitleýär, şeýle hem ýaşlaryň hukuklarynyň we azatlyklarynyň üpjün edilmeginde hem-de olaryň kämil şahsyýetler hökmünde kemala gelmeginde döwlet goldawynyň ýokarlandyrylmagyna gönükdirilendir.
                </div> */}
                <div className={`mt-10 ${props.show ? '' : 'hidden'}`}>
                    <div className='font-semibold text-lg mt-20 mb-10'>Wakansiýa Barada Habarlaşmak üçin:</div>
                    <div className='flex flex-col gap-8'>

                        <div className='w-full  cursor-pointer  flex flex-col gap-2 mx-auto text-darkColor font-semibold'>
                            <span className='text-[#CFCFCF] text-sm'>email</span>
                            <div>example@gmail.com</div>
                        </div>
                        <div className='w-full  cursor-pointer  flex flex-col gap-2 mx-auto text-darkColor font-semibold'>
                            <span className='text-[#CFCFCF] text-sm'>Telefon</span>
                            <div>(+993) 63 000000</div>
                        </div>
                        <div className='w-full  cursor-pointer  flex flex-col gap-2 mx-auto text-darkColor font-semibold'>
                            <span className='text-[#CFCFCF] text-sm'>Ýerleşýän ýeri</span>
                            <div>Aşgabat şäheri, Köpetdag Etraby, Parahat 7 köçesi, 12 Saglyk jaýy.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default TopicDetail