import React from 'react'
import Product from '../components/Product'

function Courses() {
    return (
        <div className='container'>
            <div className='flex items-center mb-4'>
                <h1 className='font-bold text-[30px]'>Highlighted Courses</h1>
                <div className='p-2 cursor-pointer ms-2 bg-[#E6E6E6] rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 8 14" fill="none">
                        <path d="M1.85612 12.2446L6.56115 6.97839L1.85612 1.75537" stroke="#2B372A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 ">
                <Product />
                <Product />
                <Product />
                <Product />

            </div>
        </div>
    )
}

export default Courses