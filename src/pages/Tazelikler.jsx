import React from 'react'
import Divider from '../components/Divider'
import { NavLink } from 'react-router-dom'

function Tazelikler() {
    return (
        <div className='container font-semibold '>
            <div className='flex items-center my-10 gap-3'>
                <NavLink to={`/ecohub/`} className=' text-[#CFCFCF] cursor-pointer'>Baş sahypa</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                </svg>
                <div className=' text-[#CFCFCF]'>Täzelikler</div>
            </div>
            <div className="flex">
                <div className='w-2/3'>

                    <div className=' flex items-start gap-5  right-5 left-0'>
                        <div className='wrap w-2/5 text-goldColor font-semibold text-[25px]'>Ýaşlar Syýasaty Barada</div>
                        <Divider showright={true} className='mt-5' />

                    </div>
                    <div className="flex my-10 items-center gap-10 text-[#CFCFCF]">
                        <span>
                            11.12.2024
                        </span>
                        <span className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                                <path d="M0 6.15457V5.84646C2.33242 2.05461 5.84227 0.000513619 10.5 9.6238e-08C15.1577 -0.000513426 18.6681 2.05409 21 5.84646V6.15457C18.6681 9.94642 15.1583 12.0015 10.5 12C5.84172 11.9985 2.33187 9.94694 0 6.15457ZM6.30383 5.99384C6.30102 6.77343 6.54454 7.53628 7.0036 8.18586C7.46265 8.83544 8.1166 9.34255 8.88268 9.64302C9.64876 9.94349 10.4926 10.0238 11.3073 9.87384C12.122 9.72385 12.871 9.3503 13.4596 8.80045C14.0481 8.2506 14.4497 7.54916 14.6136 6.7849C14.7775 6.02065 14.6962 5.22792 14.3801 4.50704C14.064 3.78616 13.5273 3.16952 12.8379 2.73517C12.1485 2.30081 11.3373 2.06825 10.5071 2.06693C9.95642 2.06524 9.41077 2.16552 8.90139 2.36202C8.392 2.55852 7.92887 2.84739 7.53848 3.21211C7.14809 3.57683 6.8381 4.01025 6.62625 4.48756C6.41439 4.96488 6.30483 5.47673 6.30383 5.99384Z" fill="#CFCFCF" />
                                <path d="M10.5071 3.37795C11.0593 3.38019 11.5983 3.53607 12.0562 3.82589C12.5141 4.11571 12.8701 4.52647 13.0795 5.00626C13.2888 5.48605 13.342 6.01334 13.2323 6.5215C13.1226 7.02966 12.8549 7.49589 12.4632 7.86126C12.0714 8.22663 11.5731 8.47476 11.0312 8.57428C10.4893 8.67381 9.9281 8.62027 9.4186 8.42042C8.90909 8.22057 8.4741 7.88339 8.16859 7.45149C7.86309 7.01958 7.70079 6.51233 7.70219 5.99384C7.70196 5.64874 7.7745 5.30702 7.91562 4.98837C8.05673 4.66973 8.26364 4.38047 8.5244 4.13729C8.78515 3.8941 9.09461 3.7018 9.43491 3.57148C9.7752 3.44115 10.1396 3.37538 10.5071 3.37795Z" fill="#CFCFCF" />
                            </svg>
                            <span>116</span>
                        </span>
                    </div>
                    <div className='text-goldColor text-[30px]'>
                        Türkmenistanyň kanuny
                    </div>
                    <div className=' mt-5 '>
                        «Ýaşlar barada döwlet syýasaty hakynda» Türkmenistanyň kanuny ýaşlar barada döwlet syýasatynyň maksatlaryny, wezipelerini, ýörelgelerini we esasy ugurlaryny kesgitleýär, şeýle hem ýaşlaryň hukuklarynyň we azatlyklarynyň üpjün edilmeginde hem-de olaryň kämil şahsyýetler hökmünde kemala gelmeginde döwlet goldawynyň ýokarlandyrylmagyna gönükdirilendir.
                    </div>
                    <div className=' mt-5'>
                        <span className='font-bold text-[#000]'>
                            Ýaşlar
                        </span>
                        - Türkmenistanyň 14 ýaşdan 35 ýaşa çenli ýaşdaky raýatlary.
                    </div>
                    <div className='w-full aspect-video bg-[#D9D9D9] my-5'
                    ></div>
                    <div className=''>
                        «Ýaşlar barada döwlet syýasaty hakynda» Türkmenistanyň kanuny ýaşlar barada döwlet syýasatynyň maksatlaryny, wezipelerini, ýörelgelerini we esasy ugurlaryny kesgitleýär, şeýle hem ýaşlaryň hukuklarynyň we azatlyklarynyň üpjün edilmeginde hem-de olaryň kämil şahsyýetler hökmünde kemala gelmeginde döwlet goldawynyň ýokarlandyrylmagyna gönükdirilendir.
                    </div>
                    <div className='mt-48  justify-center  items-center gap-3 cursor-pointer flex w-full text-[#007EF2]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="34" viewBox="0 0 27 34" fill="none">
                            <path d="M18.0954 0.00225733C18.2984 0.189433 18.5114 0.367588 18.702 0.566039C21.3212 3.30827 23.9394 6.05201 26.5564 8.79726C26.7018 8.93975 26.8162 9.11076 26.8924 9.29955C26.9687 9.48834 27.0051 9.69084 26.9994 9.89437C26.9904 16.3696 26.9882 22.8448 26.9927 29.32C26.9927 31.6146 25.6094 33.3996 23.4459 33.8901C23.0992 33.9639 22.7453 33.999 22.3907 33.9949C16.4585 34.0017 10.5266 34.0017 4.59517 33.9949C1.95712 33.9949 0.00112737 32.0285 0 29.3843C0 21.1155 0 12.8441 0 4.57002C0 2.36451 1.26491 0.688942 3.38211 0.0710371C3.43078 0.0516758 3.47758 0.0278972 3.52191 0L18.0954 0.00225733ZM16.9534 1.60566C16.8136 1.59889 16.7054 1.58874 16.5983 1.58874C12.6187 1.58874 8.63867 1.58874 4.6583 1.58874C2.85451 1.58874 1.6516 2.78734 1.6516 4.58694C1.6516 12.8347 1.6516 21.0832 1.6516 29.3325C1.6516 31.1512 2.85225 32.3464 4.67746 32.3476C10.5533 32.3476 16.4296 32.3476 22.3062 32.3476C24.1438 32.3476 25.3501 31.1444 25.3501 29.3031C25.3501 23.1158 25.3501 16.9292 25.3501 10.7434V10.3781C23.7796 10.3781 22.2611 10.3781 20.7436 10.3781C18.4889 10.3781 16.9647 8.85476 16.9602 6.60527C16.9602 5.06389 16.9602 3.52251 16.9602 1.98226L16.9534 1.60566ZM24.2092 8.73411L18.6343 2.88318C18.618 2.94772 18.606 3.01326 18.5982 3.07938C18.5982 4.29827 18.5734 5.51943 18.5982 6.73832C18.6231 7.95722 19.4303 8.7172 20.6636 8.73298C21.3953 8.74201 22.1292 8.73298 22.8586 8.73298L24.2092 8.73411Z" fill="#007EF2" />
                            <path d="M12.6536 20.9524V20.5961C12.6536 17.8148 12.6536 15.0335 12.6536 12.2522C12.6536 11.9229 12.7145 11.6365 12.9918 11.4313C13.1001 11.3487 13.2276 11.295 13.3623 11.2752C13.497 11.2554 13.6345 11.2702 13.7619 11.3181C13.8894 11.366 14.0026 11.4454 14.0909 11.5491C14.1792 11.6527 14.2398 11.7771 14.2669 11.9105C14.2951 12.0743 14.3064 12.2405 14.3007 12.4066C14.3007 15.1226 14.3007 17.8392 14.3007 20.5567V20.9502L14.4349 21.0629C14.4762 20.952 14.5319 20.847 14.6006 20.7506C15.5852 19.6817 16.5724 18.6165 17.5622 17.5551C17.7978 17.3014 18.0594 17.1198 18.4348 17.192C18.5715 17.2139 18.7004 17.2705 18.809 17.3565C18.9176 17.4425 19.0022 17.555 19.0549 17.6831C19.1075 17.8113 19.1263 17.9508 19.1095 18.0883C19.0927 18.2258 19.0409 18.3567 18.959 18.4684C18.8988 18.548 18.8333 18.6233 18.7628 18.6939C17.2439 20.3251 15.7246 21.9556 14.2049 23.5853C13.719 24.1051 13.2579 24.1186 12.7844 23.6112C11.2301 21.9477 9.6796 20.2834 8.13285 18.6184C7.88144 18.35 7.78449 18.0478 7.90061 17.7051C7.94951 17.556 8.04168 17.425 8.16537 17.3286C8.28906 17.2322 8.43865 17.1748 8.59507 17.1638C8.91186 17.1244 9.14298 17.2879 9.34703 17.5021C10.3504 18.5838 11.3545 19.6636 12.3594 20.7416C12.4338 20.8228 12.4969 20.913 12.5657 20.9987L12.6536 20.9524Z" fill="#007EF2" />
                            <path d="M13.498 28.3267C11.2914 28.3267 9.08548 28.3267 6.88034 28.3267C6.29185 28.3267 5.91192 27.9986 5.90742 27.5081C5.90937 27.3071 5.98359 27.1136 6.11649 26.9629C6.24938 26.8121 6.43209 26.7143 6.63119 26.6872C6.74368 26.6782 6.8566 26.6755 6.9694 26.6793H20.039C20.1934 26.6716 20.348 26.6845 20.499 26.7177C20.6806 26.7666 20.8396 26.8772 20.9487 27.0305C21.0578 27.1838 21.1101 27.3703 21.0968 27.5579C21.0835 27.7456 21.0053 27.9228 20.8756 28.0592C20.746 28.1955 20.573 28.2825 20.3862 28.3053C20.2544 28.3228 20.1213 28.3296 19.9883 28.3256L13.498 28.3267Z" fill="#007EF2" />
                        </svg>
                        <div>
                            Türkmenistanyň “Ýaşlar Barada Döwlet <br /> Syýasaty Hakynda” Kanuny.pdf
                        </div>
                    </div>
                </div>
                <div className='w-1/3  ps-20'>
                    <div className='text-darkColor text-xl'  >Başga habarlar</div>
                    <div className=' border-b mt-5   w-full'>
                        <div className='font-semibold line-clamp-2 text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className=" mt-5 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className=' border-b mt-5   w-full'>
                        <div className='font-semibold line-clamp-2 text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className=" mt-5 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className=' border-b mt-5   w-full'>
                        <div className='font-semibold line-clamp-2 text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className=" mt-5 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className=' border-b mt-5   w-full'>
                        <div className='font-semibold line-clamp-2 text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className=" mt-5 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className='flex justify-center mt-5 cursor-pointer items-center gap-2'> 
                        <NavLink to={'/news/'} className='text-sm text-goldColor'>Doly gör</NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                            <path d="M1 1L4 5L1 9" stroke="#D3AA65" stroke-width="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tazelikler