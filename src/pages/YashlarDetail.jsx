import React from 'react'
import { NavLink } from 'react-router-dom'

function YashlarDetail() {
    return (
        <div className='container'>
            <div className='flex items-center my-10 gap-3'>
                <NavLink to={`/ecohub/`} className=' text-[#CFCFCF] cursor-pointer'>Baş sahypa</NavLink>
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
                    <div className=' bg-[#FAFAFA] w-full cursor-pointer font-semibold p-3  mx-auto text-darkColor'>hello </div>
                    <div className=' bg-[#FAFAFA] w-full cursor-pointer font-semibold p-3  mx-auto text-darkColor'>hello </div>
                    <div className=' bg-[#FAFAFA] w-full cursor-pointer font-semibold p-3  mx-auto text-darkColor'>hello </div>
                </div>
            </div>

        </div>
    )
}

export default YashlarDetail