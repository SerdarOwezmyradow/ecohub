import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button when scrolled past a certain point
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-10 right-10">
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ y: 50 }}
                    animate={{
                        y: [0, -10, 0],
                    }}  // Combined the jump animation and fade-in effect
                    exit={{ y: 50 }}
                    // whileHover={{ scale: 1.2}}
                    className="bg-primaryColor w-10 h-10 flex items-center justify-center overflow-hidden text-white p-3 rounded-full shadow-lg"
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <div>
                        <span className='text-xl'>
                            ↑
                        </span>
                    </div>
                </motion.button>

            )}
        </div>
    );
};

export default ScrollToTop;
