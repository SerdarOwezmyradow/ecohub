import React from 'react'

function Categories() {
    return (
        <div className='container mt-20 pt-10 grid grid-cols-3 gap-3'>
            <div className='bg-[#E3FFD9] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-[#477139] font-semibold aspect-video'>
                <div className='w-1/2  text-[30px]'>

                    Ýaşlar
                    Syýasaty
                </div>
            </div>
            <div className='bg-[#FFF4E1] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-goldColor font-semibold aspect-video'>
                <div className='w-1/2  text-[30px]'>
                    Makalalar
                </div>
            </div>
            <div className='bg-[#C6E3FF] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-[#406C97] font-semibold aspect-video'>
                <div className='w-1/2  text-[30px]'>
                    Kitaphana
                </div>
            </div>
        </div>
    )
}

export default Categories