import React from 'react'
import footer from '../images/footer.png'


function Footer() {
    return (
        <div className='bg-[#fff] relative h-[150vh]'>
            <div className="flex text-center mx-auto w-1/3 flex-col justify-center items-center">
                <h1 className='text-[35px] mt-20 font-bold'>Subscribe to Our
                    <br /> Newsletter</h1>
                <input type="text" placeholder='email' className='text-center p-3 w-full text-[25px] border-b border-b-2 mt-20 outline-none border-b-[#BDBDBD]' name="" id="" />
                <div className="rounded-[30px]  p-3 w-1/3 mt-10 text-lg text-white text-center font-bold bg-[#58A300]">
                    Subscribe
                </div>
            </div>
            
            <div className='bg-[transparent] absolute bottom-10 z-10 left-0 right-0 container mx-auto  flex justify-between align-center p-3 '>
                <div className="logo text-xl font-bold cursor-pointer">
                © Ecohub, Inc. 2024
                </div>
                <div className="flex justify-between gap-5 align-center ">
                    <div className="cursor-pointer text-xl font-bold  ">Home</div>
                    <div className="cursor-pointer text-xl font-bold  ">Courses</div>
                    <div className="cursor-pointer text-xl font-bold  ">Contact</div>
                    <div className="cursor-pointer text-xl font-bold  ">Games</div>
                    <div className="cursor-pointer text-xl font-bold ">Sign in</div>
                </div>
            </div>
            <div className="">
                <img src={footer} className='absolute bottom-0 right-0 w-full' alt="" />
            </div>
        </div>
    )
}

export default Footer