import React from 'react'
import { useTranslation } from 'react-i18next';

function MapContent(props) {
    const { isOpen, title, content, onClick, phone, leader, adress } = props;
    const { t } = useTranslation();

    return (
        <div>
            <div
                onClick={onClick}
                className={`group mt-3 flex items-center font-[500] bg-[#FAFAFA] cursor-pointer justify-between p-4 w-full`}
            >
                <span>{title}</span>
                <svg
                    style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
                    className={`stroke-black`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="8"
                    viewBox="0 0 17 8"
                    fill="none"
                >
                    <path
                        d="M16 0.999999L8.5 7L1 1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div
                className={`${!isOpen ? 'hidden' : 'block'} font-[500] text-start flex item-center border-t p-5 border-t-[#E1E1E1]  gap-4 bg-[#FAFAFA] p-4`}
            // dangerouslySetInnerHTML={{ __html: content }}
            >
                <div className='w-1/2 flex flex-col gap-4'>
                    <div className='flex flex-col '>
                        <span className='text-[#B4B4B4]'>{t('lider')}</span>
                        <div>
                            {leader}
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <span className='text-[#B4B4B4]'>{t('adress')}</span>
                        <div>
                            {adress}
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex items-start gap-3'>

                    <div className='w-1/2'>
                        <span className='text-[#B4B4B4]'>{t('contact')}</span>
                        <div className='flex flex-col '>
                            {phone?.map((phon) => {
                                return (
                                    <div>
                                        {phon}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className={` ${props.image ? '' : 'hidden'} w-18 aspect-square rounded-xl overflow-hidden bg-[#EEEEEE]`}>
                            <img src={props.image} className='object-cover h-full w-full' alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MapContent