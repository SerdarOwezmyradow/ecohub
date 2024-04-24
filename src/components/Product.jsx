import React from 'react'
import imager from '../images/news.png'
import { NavLink } from 'react-router-dom'

function Product(props) {
    return (
        <div className='rounded-none cursor-pointer h-auto overflow-hidden'>
                <div className="image aspect-video  overflow-hidden ">
                    <img src={props.image} className='object-cover transition-transform duration-300 transform hover:scale-110  w-full  ' alt="Product" />
                </div>
                <div className="bg-white xl:text-xl text-darkColor line-clamp-2 w-[90%] font-bold pt-3 flex-col">
                    <div>{props.title}</div>
                </div>
                <div className='text-goldColor mt-5 xl:text-lg font-semibold'>
                    {props.date}
                </div>

        </div>
    )
}

export default Product