import React from 'react'
import imager from '../images/product.png'

function Product() {
    return (
        <div className='rounded-lg cursor-pointer h-auto overflow-hidden'>
            <div className="image aspect-video relative overflow-hidden">
                <img src={imager} className='object-cover w-full  ' alt="Product" />
                <div className="absolute top-1 left-1 rounded-md text-white p-1 text-xs bg-[#FF4553]">New</div>
            </div>
            <div className="flex bg-white p-3 flex-col">
                <h1 className='text-xl truncate '>Global warmingasddddddddddddddddddddddddddddddddS </h1>
                <span className='text-xs text-disabledtext  mb-5'>a course by Gabril Niko</span>
                <p className='text-sm text-disabledtext'>Discover the fundamentals of portraiture by learning to draw facial features and...</p>
            </div>
        </div>
    )
}

export default Product