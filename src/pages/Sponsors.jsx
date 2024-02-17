import React from 'react'
import contact from '../images/contact.png'
import contact1 from '../images/contact1.png'
import contact2 from '../images/contact2.png'
import contact3 from '../images/contact3.png'
import sponsor from '../images/sponsor.png'
import sponsor1 from '../images/sponsor1.png'


function Sponsors() {
    return (
        <div className='bg-secondary mt-20 relative h-[150vh]'>
            <img src={contact} className='w-3/12 absolute top-0 left-0' alt="" />

            <img src={contact2} className='w-1/12 absolute top-0 right-0' alt="" />
            <img src={contact3} className='w-1/12 absolute bottom-0 left-0' alt="" />
            <img src={contact1} className='w-3/12 absolute bottom-0 right-0' alt="" />

            <div className="container text-center flex justify-center  gap-20 h-full items-center flex-col">
                <div>


                    <div className="text-center text-secondaryText font-bold text-[40px]">
                        Our Sponsors
                    </div>
                    <div className="grid lg:grid-cols-4 container mt-10 cs:grid-cols-4 xl:grid-cols-5 gap-4">
                        <div className='bg-[#632C3E] rounded-lg flex justify-center items-center  aspect-video h-full px-3 py-3 w-full'>
                            <img src={sponsor1} alt="" />
                        </div>
                        <div className='bg-[#632C3E] rounded-lg flex justify-center items-center aspect-video h-full px-3 py-3 w-full'>
                            <img src={sponsor1} alt="" />
                        </div>
                        <div className='bg-[#632C3E] rounded-lg flex justify-center items-center aspect-video h-full px-3 py-3 w-full'>
                            <img src={sponsor1} alt="" />
                        </div>
                        <div className='bg-[#632C3E] rounded-lg flex justify-center items-center aspect-video h-full px-3 py-3 w-full'>
                            <img src={sponsor1} alt="" />
                        </div>
                    </div>
                </div>
                <div>


                    <div className="text-center text-secondaryText font-bold text-[40px]">
                        Our Sponsors
                    </div>
                    <div className="grid lg:grid-cols-4 container mt-10 cs:grid-cols-4 xl:grid-cols-5 gap-4">
                        <div className='bg-[#632C3E] rounded-lg flex justify-center items-center  aspect-video h-full px-3 py-3 w-full'>
                            <img src={sponsor} alt="" />
                        </div>
                        <div className='bg-[#632C3E] rounded-lg flex justify-center items-center aspect-video h-full px-3 py-3 w-full'>
                            <img src={sponsor} alt="" />
                        </div>
                        <div className='bg-[#632C3E] rounded-lg flex justify-center items-center aspect-video h-full px-3 py-3 w-full'>
                            <img src={sponsor} alt="" />
                        </div>
                        <div className='bg-[#632C3E] rounded-lg flex justify-center items-center aspect-video h-full px-3 py-3 w-full'>
                            <img src={sponsor} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors