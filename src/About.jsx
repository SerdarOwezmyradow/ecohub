import React from 'react'
import about from "./images/about.png"
import about1 from "./images/about1.png"
import about2 from "./images/about2.png"
import about3 from "./images/about3.png"

function About() {
    return (
        <div className='container relative h-[90vh] border-2 w-[100%] border my-10 border-primaryText rounded-xl overflow-hidden '>
            <div className="absolute w-[25vw] left-0 top-0">
                <img src={about} />
            </div>
            <div className="absolute w-[25vw] right-0 top-0">
                <img src={about1} />
            </div>
            <div className="absolute w-[25vw] left-0 bottom-0">
                <img src={about2} />
            </div>
            <div className="absolute w-[25vw] right-0 bottom-0">
                <img src={about3} />
            </div>

            <div className="text-center flex justify-center gap-4 h-full items-center flex-col">
                <h1 className='text-primaryText text-[40px] font-bold'>Our Mission</h1>
                <p className='wrap mx-auto w-2/3'>At EcoHub, we're not just spreading knowledge about climate change; we're investing in our collective future. Our mission is to empower you with the insights and tools needed to make a tangible impact on the world's climate crisis. Join us to empower your climate action journey. Because investing in our future isn't just a choice—it's a necessity. Let's make it count.</p>
                <div className='px-10 rounded-lg py-2 bg-primaryText text-white'>Join</div>
            </div>
        </div>
    )
}

export default About