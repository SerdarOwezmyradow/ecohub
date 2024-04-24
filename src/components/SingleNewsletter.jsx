import React from 'react'

function SingleNewsletter(props) {
    return (
        <div className='bg-[#FAFAFA] cursor-pointer font-semibold p-4 relative w-full aspect-video'>
            <div className="flex items-center gap-4">
                <span className='text-sm text-goldColor text-nowrap xl:text-lg'>{props.date}</span>
                <div className="flex w-full items-center gap-2">
                    <hr className='w-full border-[1px] border-goldColor' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <rect x="5.22791" width="6.70713" height="6.70713" transform="rotate(45 5.22791 0)" fill="#D3AA65" />
                    </svg>
                </div>
            </div>
            <div className='mt-8 bottom-4 left-4 right-4'>
                <span className='text-sm text-goldColor xl:text-lg'>{props.title}</span>
                <div className='text-darkColor xl:text-xl mt-3 line-clamp-3 w-full' dangerouslySetInnerHTML={{ __html: props?.content }}></div>
            </div>

        </div>
    )
}

export default SingleNewsletter