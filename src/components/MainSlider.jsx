import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import baseUrl from '../baseUrl';
import video from '../images/video.mp4';

function MainSlider() {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const [cats, setCats] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [index, setIndex] = useState(0)

    const getCats = async () => {
        try {
            setisLoading(true);
            const response = await axiosInstance.get(`${baseUrl}api/home`);
            setCats(response?.data?.banners);
            console.log('banners', response?.data?.banners);
            setisLoading(false);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            // Change the state every 3 seconds
            setIndex((prevIndex) => (prevIndex === cats?.length - 1 ? 0 : prevIndex + 1))
        }, 5000);

        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, [cats, index]);

    useEffect(() => {
        getCats();
    }, [i18n.language, id]);

    // Animation variants for sliding from bottom to top
    const leftSideVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className='mx-auto'>
            <div className='w-full flex justify-center items-center mx-auto '>
                <div className="relative h-screen w-full overflow-hidden">
                    {/* Video Background */}
                    <video
                        className="absolute top-0 left-0 w-full max-h-screen object-cover"
                        src={video}
                        autoPlay
                        loop
                        muted
                    />

                    {/* Content on top of the video */}
                    <div className="relative z-10 flex h-full bg-black bg-opacity-50">
                        <div className='container mx-auto p-5 py-20'>
                            <div className="h-full w-1/2 flex flex-col justify-between items-start">
                                {/* Restart animation on index change by setting key */}
                                <motion.div
                                    key={index} // Use key to restart animation when index changes
                                    initial="hidden"
                                    animate="visible"
                                    variants={leftSideVariants}
                                    className='text-white w-full font-semibold text-[30px] capitalize'
                                    dangerouslySetInnerHTML={{ __html: cats && cats[index]?.content }}
                                />

                                <motion.div
                                    key={`title-${index}`}  // Unique key to restart animation for title section
                                    initial="hidden"
                                    animate="visible"
                                    variants={leftSideVariants}
                                    className='flex w-full items-end gap-5'>
                                    <div className='text-white font-semibold text-xl'>
                                        {cats && cats[index]?.title}
                                    </div>
                                    <div className='flex w-full items-center justify-center gap-2'>
                                        <hr className='w-full wrap border-[1px] border-white' />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M5.07538 5.07539H19.9246V19.9246H5.07538V5.07539Z" stroke="#ffffff" strokeWidth="1.5" />
                                            <path d="M12.5 2L23 12.5L12.5 23L2 12.5L12.5 2Z" stroke="#ffffff" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSlider;
