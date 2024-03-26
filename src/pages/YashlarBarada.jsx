import React from 'react'
import { NavLink } from 'react-router-dom'

function YashlarBarada() {
    return (
        <div>
            <div className="container">
                <div className='flex items-center my-10 gap-3'>
                    <NavLink to={`/ecohub/`} className=' text-[#CFCFCF] cursor-pointer'>Baş sahypa</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                    </svg>
                    <div className=' text-[#CFCFCF]'>Yaslar barada</div>
                </div>
                <div className='text-[40px] font-semibold my-10 w-1/3'>
                    Ýaşlar üçin Mümkinçilikler
                </div>
                <div className=" grid grid-cols-3 gap-3">
                    <NavLink to={`/yaslar/detail`} className='bg-[#fafafa] cursor-pointer w-full aspect-[4/3] flex justify-between flex-col  p-5 text-black font-semibold aspect-video'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="41" viewBox="0 0 45 41" fill="none">
                            <path d="M44.9995 12.3255V14.0686C44.9692 14.1798 44.9463 14.2929 44.9312 14.4071C44.75 16.7763 43.9811 18.9645 42.8396 21.0342C41.2897 23.8452 39.2323 26.2804 36.9886 28.56C32.9165 32.6994 28.506 36.4784 24.1041 40.2641C22.9575 41.2491 22.0176 41.2524 20.871 40.2523C17.3338 37.1638 13.7897 34.0821 10.2764 30.9648C7.81908 28.7834 5.51219 26.4547 3.58293 23.7859C1.464 20.8548 0.165293 17.6326 0.0132085 13.9975C-0.14742 10.0578 1.05046 6.60205 3.89735 3.81818C8.05661 -0.243407 14.5074 -1.13526 19.6612 1.60123C20.6489 2.12585 21.5716 2.76893 22.5662 3.38494C22.655 3.31894 22.8037 3.20556 22.9558 3.09387C27.614 -0.30094 32.6021 -1.01003 37.8567 1.52169C41.2743 3.16663 43.4496 5.94036 44.4732 9.56363C44.7278 10.4606 44.8287 11.4032 44.9995 12.3255ZM25.2097 16.4379V11.0698H19.762V16.4734H14.3365V21.8753H19.7723V27.24H25.2268V21.8618H30.6403V16.4379H25.2097Z" fill="#E1E1E1" />
                        </svg>
                        <div className='w-1/2  text-[30px]'>
                            Makalalar
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default YashlarBarada