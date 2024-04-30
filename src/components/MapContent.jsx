import React, { useEffect, useState } from 'react'

function MapContent(props) {
    const [rotation, setRotation] = useState(0);
    const [content, setContent] = useState(false);

    const handleClick = () => {
        setContent(!content)
        if (!content) {
            setRotation(180);
        } else {
            setRotation(0);

        }
    };
    useEffect(() => {
        setRotation(0)
        setContent(false)
        
    }, [props.id])
    
    return (
        <div>
            <div onClick={handleClick} className={`group ${!content ? '' : 'text-[#CCCCCC]'} hover:text-[#CCCCCC]  mt-3 flex items-center bg-[#FAFAFA] cursor-pointer justify-between p-4  w-full`}>
                <span>{props.title}</span>
                <svg style={{ transform: `rotate(${rotation}deg)` }} className={`${!content ? 'stroke-black' : 'stroke-[#CCCCCC]'}  group-hover:stroke-[#CCCCCC]`} xmlns="http://www.w3.org/2000/svg" width="17" height="8" viewBox="0 0 17 8" fill="none">
                    <path d="M16 0.999999L8.5 7L1 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
            <div className={`${!content ? 'hidden' : 'block'} text-start flex flex-col gap-4 bg-[#FAFAFA] p-4 mt-2`} dangerouslySetInnerHTML={{ __html: props?.content }} >
            </div>
        </div>
    )
}

export default MapContent