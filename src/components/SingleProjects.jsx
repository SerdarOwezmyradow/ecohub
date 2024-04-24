import React from 'react'

function SingleProjects(props) {
    return (
        <div>
            <div className='bg-[#FAFAFA] cursor-pointer font-semibold p-4 relative w-full aspect-[3/4]'>
                <div className=" gap-4">
                    <div className="flex w-full items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <rect x="5.22791" width="6.70713" height="6.70713" transform="rotate(45 5.22791 0)" fill="#D3AA65" />
                        </svg>
                        <hr className='w-full border-[1px] border-goldColor' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <rect x="5.22791" width="6.70713" height="6.70713" transform="rotate(45 5.22791 0)" fill="#D3AA65" />
                        </svg>
                    </div>
                </div>
                <div className="image mt-4 mb-5 aspect-video   overflow-hidden ">
                    <img src={props.image} className='object-cover transition-transform duration-300 transform hover:scale-110  w-full  ' alt="Product" />
                </div>
                    <span className='text-sm text-goldColor mt-3 xl:text-lg'>{props?.title}</span>
                    <div className='text-darkColor xl:text-xl mt-3 line-clamp-5 w-full' dangerouslySetInnerHTML={{ __html: props?.content}}></div>

                <div className='absolute bottom-2 left-4 right-4'>
                    <span className='text-sm text-goldColor xl:text-lg'>{props?.date}</span>

                </div>

            </div>
        </div>
    )
}

export default SingleProjects