import React from 'react'
import { NavLink } from 'react-router-dom'
import Divider from '../components/Divider'

function Questions() {
    return (
        <div className='container'>
            <div className='w-8/12 mx-auto'>
                <div className='flex items-center my-10 gap-3'>
                    <NavLink to={`/ecohub/`} className=' text-[#CFCFCF] cursor-pointer'>Baş sahypa</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                    </svg>
                    <div className=' text-[#CFCFCF]'>Soraglar</div>
                </div>
                <h1 className="text-goldColor mb-10 font-semibold text-[30px]">
                    Sorag we Jogaplar
                </h1>
                <div >
                    <ol class="list-decimal flex flex-col gap-2 list-inside">
                        <li className='pb-5 border-b border-b-[#E1E1E1]'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.s</li>
                        <li className='pb-5 border-b border-b-[#E1E1E1]'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.s</li>
                        <li className='pb-5 border-b border-b-[#E1E1E1]'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.s</li>

                    </ol>
                </div>
                <h1 className="text-goldColor mt-32 mb-20 font-semibold text-[30px]">
                    Sorag we Jogaplar
                </h1>
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
        </div>
    )
}

export default Questions