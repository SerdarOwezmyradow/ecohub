import React from 'react'
import StickyNav from './StickyNav'

function Navbar() {
    return (
        <div className=' bg-primaryColor relative text-white'>

            <div className=' container pt-10   flex justify-between items-end pb-3'>
                <div className='line-clamp-2 text-start w-1/3 font-semibold uppercase tracking-widest'>
                    Türkmenistanyň
                    <br />
                    Ýaşlar Syýasaty
                </div>
                <div className='line-clamp-2 text-center w-1/3 font-semibold capitalize tracking-wide'>
                    logo
                </div>
                <div className='line-clamp-2 text-end w-1/3 flex flex-col font-semibold capitalize tracking-wide'>
                    <div>
                        18.08.2024
                    </div>
                    <div className='uppercase'>
                        
                        Aşgabat/ Türkmenistan
                    </div>
                </div>
            </div>
            <StickyNav/>
        </div>
    )
}

export default Navbar