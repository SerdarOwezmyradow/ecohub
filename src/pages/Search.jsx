import React from 'react'

function Search() {
    return (
        <div className='container'>
            <div className='w-8/12 mx-auto text-[#CDCDCD]'>
                <div className='flex justify-center p-3 mt-10 border-b border-[#CDCDCD] text-[#CDCDCD] items-center h-[auto] w-full'>
                    <input type="text" placeholder='Search here ' className='w-full outline-none border-0 text-xl ' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.1229 17.8666L18.4955 18.494C20.5272 16.4622 21.6686 13.7066 21.6686 10.8333C21.6686 7.96002 20.5272 5.2044 18.4955 3.17263C17.4906 2.16531 16.2967 1.36649 14.9821 0.822027C13.6676 0.277568 12.2583 -0.00179428 10.8355 9.92197e-06C9.41238 -0.00191882 8.00297 0.27737 6.68814 0.82183C5.37331 1.36629 4.179 2.16519 3.17388 3.17263C2.16763 4.17869 1.36946 5.37313 0.824874 6.6877C0.28029 8.00226 0 9.41122 0 10.8341C0 12.257 0.28029 13.666 0.824874 14.9806C1.36946 16.2951 2.16763 17.4896 3.17388 18.4956C4.179 19.5031 5.37331 20.302 6.68814 20.8464C8.00297 21.3909 9.41238 21.6702 10.8355 21.6682C12.2583 21.67 13.6676 21.3907 14.9821 20.8462C16.2967 20.3018 17.4906 19.5029 18.4955 18.4956L17.8681 19.1246L22.7435 24L24 22.7419L19.1229 17.8666ZM17.2375 17.2376C16.3985 18.0811 15.4005 18.7498 14.3014 19.205C13.2022 19.6602 12.0236 19.8929 10.8339 19.8895C9.64418 19.893 8.46559 19.6605 7.36639 19.2053C6.26719 18.75 5.2692 18.0812 4.43033 17.2376C3.58659 16.3987 2.91764 15.4008 2.46215 14.3016C2.00666 13.2025 1.77365 12.0239 1.77671 10.8341C1.77365 9.64434 2.00666 8.46576 2.46215 7.3666C2.91764 6.26745 3.58659 5.26956 4.43033 4.43068C5.2692 3.58702 6.26719 2.91822 7.36639 2.463C8.46559 2.00779 9.64418 1.7752 10.8339 1.77874C12.0236 1.77538 13.2022 2.00803 14.3014 2.46324C15.4005 2.91845 16.3985 3.58717 17.2375 4.43068C18.0807 5.26986 18.7492 6.26785 19.2044 7.36696C19.6596 8.46607 19.8925 9.64449 19.8894 10.8341C19.8925 12.0238 19.6596 13.2022 19.2044 14.3013C18.7492 15.4004 18.0807 16.3984 17.2375 17.2376Z" fill="#CDCDCD" />
                    </svg>
                </div>
                <div className="tags flex items-center gap-2 flex-wrap mt-5 w-[90%] mx-auto">
                    <div className='py-1 px-4 border border-[#CDCDCD] border-3 cursor-pointer rounded-full'>Makalalar</div>
                    <div className='py-1 px-4 border border-[#CDCDCD] border-3 cursor-pointer rounded-full'>Ýaşlar üçin Mümkinçilikler</div>
                    <div className='py-1 px-4 border border-[#CDCDCD] border-3 cursor-pointer rounded-full'>Makalalar</div>
                    <div className='py-1 px-4 border border-[#CDCDCD] border-3 cursor-pointer rounded-full'>Makalalar</div>
                </div>
                <div className='mt-10 flex flex-col gap-2'>
                    <div className='w-[80%] bg-[#FAFAFA] p-3  mx-auto text-darkColor'>hello </div>
                    <div className='w-[80%] bg-[#FAFAFA] p-3  mx-auto text-darkColor'>hello </div>
                    <div className='w-[80%] bg-[#FAFAFA] p-3  mx-auto text-darkColor'>hello </div>
                </div>
            </div>
        </div>
    )
}

export default Search