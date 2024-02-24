import React from 'react'
import Divider from './Divider'
import image from '../images/news.png'
import Product from './Product'

function News() {
    return (
        <div className='container  mt-20'>
            <div className='flex justify-center items-end w-full '>
                <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>Täzelikler</div>
                <Divider className='w-3/4' showright={true} />
            </div>

            <div className='flex aspect-[9/4] p-0  w-full mt-10 items-center'>
                <div className='w-1/3 pe-3 snap-mandatory snap-y overflow-y-scroll h-full'>
                    <div className='h-1/4 border-b snap-center relative w-full'>
                        <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className='h-1/4 border-b snap-center relative w-full'>
                        <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className='h-1/4 border-b snap-center relative w-full'>
                        <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className='h-1/4 border-b snap-center relative w-full'>
                        <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className='h-1/4 border-b snap-center relative w-full'>
                        <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className='h-1/4 border-b snap-center relative w-full'>
                        <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>
                    <div className='h-1/4 border-b snap-center relative w-full'>
                        <div className='font-semibold text-md'>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
                        <div className="absolute font-semibold bottom-2 text-goldColor left-0">
                            01.02.24
                        </div>
                    </div>

                </div>
                <div className='w-2/3 h-full relative '>
                    <img src={image} className='w-full h-full object-cover' alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <div className='absolute bottom-3 left-3 bg-black text-white p-5 w-1/2 bg-opacity-75 '>
                        Bilim ulgamynyň kanunçylyk binýady  –  <br /> Ýaş nesliň üstünlikli ösmeginiň girewi
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-3 mt-5 gap-3">
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className='flex mt-20 gap-5 '>
                <Divider showleft={true}/>
                <button className='bg-goldColor px-5 p-3 text-white text-nowrap'>Doly Gör</button>
                <Divider showright={true}/>
            </div>
        </div>
    )
}

export default News