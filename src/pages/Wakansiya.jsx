import React from 'react'
import { NavLink } from 'react-router-dom'

function Wakansiya() {
    return (
        <div className='container'>
            <div className='flex items-center my-10 gap-3'>
                <NavLink to={`/ecohub/`} className=' text-[#CFCFCF] cursor-pointer'>Baş sahypa</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                </svg>
                <div className=' text-[#CFCFCF]'>Wakansiya</div>
            </div>
            <div className="w-1/2 mx-auto">
                <div className='text-[30px] my-10'>Wakansiyalar</div>
                <div className="flex flex-col gap-3">
                    <NavLink className={`flex group bg-[#FAFAFA] p-3 justify-between items-center`} to={`/wakansy/detail`}>

                        <div className='w-full  cursor-pointer  flex flex-col gap-3 mx-auto text-darkColor font-semibold'>
                            <div className='group-hover:text-goldColor'>Ýaş Telekeçiler Gözlenilýär</div>
                            <span className='text-[#CFCFCF] text-sm'>16.03.2024</span>
                        </div>
                        <div className='invisible group-hover:visible'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                <path d="M1.42857 0.999893L10 9.99989L1.42857 18.9999" stroke="#D3AA65" stroke-width="2.5" />
                            </svg>
                        </div>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default Wakansiya