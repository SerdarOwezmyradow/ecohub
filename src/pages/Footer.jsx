import React from 'react'
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <div className=' bg-primaryColor mt-20'>
            <div className="container text-white py-10">
                <div className="flex">
                    <div className="w-3/5 flex ">
                        <ul className='flex w-1/2 flex-col  items-left gap-3 font-[500]'>
                            <NavLink to={`/`} className='cursor-pointer text-left' >
                                Baş sahypa
                            </NavLink>
                            <NavLink to={`/topic/yaslar/2`} className='cursor-pointer text-left'>
                                Ýaşlar Syýasaty
                            </NavLink>
                            <NavLink to={`/news`} className='cursor-pointer text-left'>
                                Habarlar
                            </NavLink>
                            <NavLink to={`/yaslar`} className='cursor-pointer text-left'>
                                Ýaşlar üçin Mümkinçilikler
                            </NavLink >
                 


                        </ul>
                        <ul className='flex w-1/2 flex-col gap-3 items-left  font-[500]'>
                            <NavLink to={`/library`} className='cursor-pointer text-left'>
                                Kitaphana
                            </NavLink>
                          
                            <li className='cursor-pointer text-left'>
                                Sanly Ulgam
                            </li>
                            <NavLink to={`topics/1`} className='cursor-pointer text-left'>
                                Biz Barada
                            </NavLink >
                        </ul>
                    </div>
                    <div className="w-2/5">
                        <div className="flex items-center justify-between ">
                            <div className=" flex flex-col gap-3">
                                <span className='text-[#FFFFFF]  opacity-50 text-xs'>Habarlaşmak Üçin</span>
                                <div className='text-lg'>
                                    +993 (63) 060606
                                </div>
                            </div>
                            <div className=" flex flex-col text-right gap-3">
                                <div className='text-left'>

                                    <span className='text-[#FFFFFF]  opacity-50 text-xs'>Elektron Poçta</span>
                                    <div className='text-lg'>
                                        youth@tm.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-left flex flex-col gap-2 w-2/3 mt-20'>
                            <span className='text-[#FFFFFF]  opacity-50 text-xs'>Bildirişlerden Habardar Bol</span>
                            <div className='flex justify-center  bg-white  items-center'>
                                <span className='text-[#C5C5C5] p-3 text-xs font-[500]'>Email</span>
                                <input className='w-2/3 h-full outline-none text-xs text-darkColor' type="text" name="" id="" />
                                <span className='text-primaryColor p-3 text-xs cursor-pointer font-[500]'>Goşul</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='w-full border-[1px] my-10 border-white' />
                <div className="flex text-sm">
                    <div className="w-3/5">
                        <div>Türkmenistanyň Ýaşlar Syýasaty</div>
                    </div>
                    <div className="w-2/5 flex items-center justify-between">
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <span>Türkmenistanyň Ýaşlar Baradaky Kanuny</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <path d="M1 1H8M8 1L1 8M8 1V8" stroke="white" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>© 2024</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer